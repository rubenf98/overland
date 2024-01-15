<?php

namespace App\Http\Controllers;

use App\Http\Requests\ReservationRequest;
use App\Http\Requests\UpdateReservationRequest;
use App\Http\Resources\ReservationResource;
use App\Jobs\HandlePaymentJob;
use App\Jobs\HandleReservationJob;
use App\Models\BlockDate;
use App\Models\Client;
use App\Models\LogRecord;
use App\Models\Payment;
use App\Models\Reservation;
use App\QueryFilters\ReservationFilters;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;

class ReservationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(ReservationFilters $filters)
    {
        return ReservationResource::collection(Reservation::filterBy($filters)->paginate(10));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ReservationRequest $request)
    {
        $validator = $request->validated();
        DB::beginTransaction();
        $token = uniqid();
        $client = Client::store($validator);

        $reservation = Reservation::create([
            'token' => $token,
            'date' => $validator['date'],
            'participants' => $validator['participants'],
            'payment_method' => Arr::get($validator, 'payment_method') == 1 ? "Pagamento no levantamento" : "Cartão de crédito",
            'price' => $validator['price'],
            'council_id' => $validator['council_id'],
            'activity_price' => $validator['activity_price'],
            'transportation_price' => $validator['transportation_price'],
            'activity_id' => $validator['activity_id'],
            'client_id' => $client->id,
            'address' => Arr::get($validator, 'address'),
        ]);
        $paymentRequest = new \GuzzleHttp\Client();

        $response = $paymentRequest->request('POST', 'https://clientes.eupago.pt/clientes/rest_api/multibanco/create', [
            'body' => '{"chave":"' . config('app.eupago_key') . '","valor":' . $validator['price'] . ',"id":"' . $reservation->id . '","per_dup":"0","failOver":"1","email":"' . $validator['email'] . '"}',
            'headers' => [
                'accept' => 'application/json',
                'content-type' => 'application/json',
            ],
        ]);


        $data = json_decode($response->getBody(), true);

        $payment = Payment::store($reservation->id, $data);


        BlockDate::create([
            "date" => $validator['date'],
            "activity_id" => $validator['activity_id'],
            "reservation_id" => $reservation->id
        ]);
        DB::commit();

        HandleReservationJob::dispatch($reservation);
        HandlePaymentJob::dispatch($reservation, $payment);
        //$reservation->generateInvoice();

        return $data;

        //return new ReservationResource($reservation);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Reservation  $reservation
     * @return \Illuminate\Http\Response
     */
    public function show(Reservation $reservation)
    {
        return new ReservationResource($reservation);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Reservation  $reservation
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateReservationRequest $request, Reservation $reservation)
    {
        $validator = $request->validated();
        DB::beginTransaction();
        $client = Client::find($reservation->client_id);
        $blockDate = BlockDate::where('reservation_id', $reservation->id)->first();

        $client->update([
            'name' => $validator['name'],
            'cc' => Arr::get($validator, 'cc'),
            'nif' => Arr::get($validator, 'nif'),
            'country' => Arr::get($validator, 'country'),
            'email' => $validator['email'],
            'phone' => $validator['phone'],
            'notes' => Arr::get($validator, 'client_notes'),
        ]);
        $reservation->update($validator);

        $blockDate->update([
            "date" => $validator['date'],
            "activity_id" => $validator['activity_id'],
            "reservation_id" => $reservation->id
        ]);
        DB::commit();

        return new ReservationResource($reservation);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Reservation  $reservation
     * @return \Illuminate\Http\Response
     */
    public function destroy(Reservation $reservation)
    {
        DB::beginTransaction();

        $blockedDates = BlockDate::where('reservation_id', $reservation->id)->get();

        foreach ($blockedDates as $blockedDate) {
            $blockedDate->delete();
        }

        LogRecord::create([
            'user_id' => auth()->user()->id,
            'description' => "apagou a reserva " . $reservation->id
        ]);

        $reservation->delete();


        DB::commit();

        return response()->json(null, 204);
    }
}
