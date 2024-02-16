<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreVehicleRequest;
use App\Http\Requests\UpdateVehicleRequest;
use App\Http\Resources\VehicleResource;
use App\Models\LogRecord;
use App\Models\Price;
use App\Models\Vehicle;
use App\Models\VehicleHasCharateristic;
use App\QueryFilters\VehicleFilters;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class VehicleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(VehicleFilters $filters)
    {
        return VehicleResource::collection(Vehicle::filterBy($filters)->paginate(10));
    }

    public function selector(VehicleFilters $filters)
    {
        return VehicleResource::collection(Vehicle::filterBy($filters)->get());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreVehicleRequest $request)
    {
        $validator = $request->validated();

        DB::beginTransaction();
        $imageName = uniqid() . '.' . $request->banner->extension();

        $request->file('banner')->storeAs(
            'public/vehicles',
            $imageName
        );


        $record = Vehicle::create([
            'description' => [
                'pt' => $validator['description_pt'],
                'en' => $validator['description_en'],
            ],
            'title' => $validator['title'],
            'registration' => $validator['registration'],
            'image' => '/storage/vehicles/' . $imageName
        ]);

        foreach ($validator['price'] as $key => $aPrice) {
            Price::create([
                'vehicle_id' => $record->id,
                'month' => $key + 1,
                'price' => $aPrice,
            ]);
        }

        foreach ($validator['charpt'] as $key => $aChar) {
            $newChar = VehicleHasCharateristic::create([
                'vehicle_id' => $record->id,
                'charateristic_id' => $key,
            ]);

            if ($aChar != "undefined") {
                $newChar->value = ['en' => $validator['charen'][$key], 'pt' => $aChar];
                $newChar->save();
            }
        }


        LogRecord::create([
            'user_id' => auth()->user()->id,
            'description' => "criou o veículo " . $record->id . " com o nome " . $validator['title']
        ]);

        DB::commit();

        return new VehicleResource($record);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Vehicle  $vehicle
     * @return \Illuminate\Http\Response
     */
    public function show(Vehicle $vehicle)
    {
        return new VehicleResource($vehicle);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Vehicle  $vehicle
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateVehicleRequest $request, Vehicle $vehicle)
    {
        $validator = $request->validated();

        $vehicle->update([
            'description' => [
                'pt' => $validator['description_pt'],
                'en' => $validator['description_en'],
            ],
            'title' => $validator['title'],
            'registration' => $validator['registration'],
        ]);

        foreach ($validator['price'] as $key => $aPrice) {
            $price = Price::where('vehicle_id', $vehicle->id)->where('month', $key + 1)->first();
            $price->price = $aPrice;
            $price->save();
        }

        foreach ($validator['charpt'] as $key => $aChar) {
            $char = VehicleHasCharateristic::where('vehicle_id', $vehicle->id)->where('charateristic_id', $key)->first();
            $val = ['en' => null, 'pt' => null];
            if ($aChar != "undefined" || $aChar == null) {
                $val = ['en' => $validator['charen'][$key], 'pt' => $aChar];
            }
            $char->update(['value' => $val]);
        }

        if ($request->has('banner')) {
            $imageName = uniqid() . '.' . $request->banner->extension();
            $request->file('banner')->storeAs(
                'public/vehicles',
                $imageName
            );

            $vehicle->image =  '/storage/vehicles/' . $imageName;
            $vehicle->save();
        }

        return new VehicleResource($vehicle);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Vehicle  $vehicle
     * @return \Illuminate\Http\Response
     */
    public function destroy(Vehicle $vehicle)
    {
        DB::beginTransaction();

        LogRecord::create([
            'user_id' => auth()->user()->id,
            'description' => "apagou o veículo " . $vehicle->id
        ]);

        $vehicle->delete();


        DB::commit();

        return response()->json(null, 204);
    }
}
