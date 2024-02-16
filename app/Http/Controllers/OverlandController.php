<?php

namespace App\Http\Controllers;

use App\Http\Requests\OverlandRequest;
use App\Http\Resources\OverlandResource;
use App\Jobs\HandleOverlandJob;
use App\Jobs\HandleOverlandPaymentJob;
use App\Models\BlockDate;
use App\Models\Client;
use App\Models\Driver;
use App\Models\LogRecord;
use App\Models\Overland;
use App\Models\Payment;
use App\Models\Vehicle;
use App\QueryFilters\OverlandFilters;
use Carbon\Carbon;
use DateInterval;
use DatePeriod;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class OverlandController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(OverlandFilters $filters)
    {
        return OverlandResource::collection(Overland::filterBy($filters)->paginate(10));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(OverlandRequest $request)
    {
        $validator = $request->validated();

        DB::beginTransaction();

        $client = Client::store($validator);
        $driver = Driver::store($validator);
        $token = uniqid();

        $initDate = Carbon::parse($validator["date"][0]);
        $endDate = Carbon::parse($validator['date'][1]);

        $overland = Overland::create([
            'token' => $token,
            'pickup_date' => $initDate,
            'return_date' =>  $endDate,
            'pickup_place' => $validator['pickup_place'],
            'flight' => array_key_exists('flight', $validator)  ? $validator['flight'] : null,
            'price' => $validator['price'],
            'vehicle_price' => $validator['vehicle_price'],
            'vehicle_price_per_day' => $validator['vehicle_price_per_day'],
            'days' => $validator['days'],
            'vehicle_id' => $validator['vehicle_id'],
            'insurance_id' => $validator['insurance_id'],
            'client_id' => $client->id,
            'driver_id' => $driver->id,
        ]);

        $vehicle = Vehicle::find($validator['vehicle_id']);
        $interval = DateInterval::createFromDateString('1 day');
        $period = new DatePeriod($initDate->startOfDay(), $interval, $endDate->endOfDay());

        foreach ($period as $dt) {
            BlockDate::create([
                "date" => $dt,
                "vehicle_id" => $vehicle->id,
                "overland_id" => $overland->id
            ]);
        }

        $overland->extras()->attach($validator["extras"]);

        $paymentRequest = new \GuzzleHttp\Client();

        $response = $paymentRequest->request('POST', 'https://clientes.eupago.pt/clientes/rest_api/multibanco/create', [
            'body' => '{"chave":"' . config('app.eupago_key') . '","valor":' . $validator['price'] . ',"id":"' . $overland->id . '","per_dup":"0","failOver":"1","email":"' . $validator['email'] . '"}',
            'headers' => [
                'accept' => 'application/json',
                'content-type' => 'application/json',
            ],
        ]);

        $data = json_decode($response->getBody(), true);
        $payment = Payment::create([
            'overland_id' => $overland->id,
            'reference' => $data["referencia"],
            'entity' => $data['entidade'],
            'status' => $data['estado'],
            'value' => $data['valor'],
        ]);
        DB::commit();

        HandleOverlandJob::dispatch($overland);
        HandleOverlandPaymentJob::dispatch($overland, $payment);
        //$reservation->generateInvoice();

        return $data;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Overland  $overland
     * @return \Illuminate\Http\Response
     */
    public function show(Overland $overland)
    {
        return new OverlandResource($overland);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Overland  $overland
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Overland $overland)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Overland  $overland
     * @return \Illuminate\Http\Response
     */
    public function destroy(Overland $overland)
    {
        DB::beginTransaction();

        $blockedDates = BlockDate::where('overland_id', $overland->id)->get();

        foreach ($blockedDates as $blockedDate) {
            $blockedDate->delete();
        }

        LogRecord::create([
            'user_id' => auth()->user()->id,
            'description' => "apagou o overland " . $overland->id
        ]);

        $overland->delete();


        DB::commit();

        return response()->json(null, 204);
    }
}
