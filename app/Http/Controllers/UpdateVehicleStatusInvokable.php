<?php

namespace App\Http\Controllers;

use App\Http\Resources\VehicleResource;
use App\Models\LogRecord;
use App\Models\Vehicle;
use Illuminate\Http\Request;

class UpdateVehicleStatusInvokable extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request, Vehicle $vehicle)
    {
        if ($request->has('status')) {
            $vehicle->status = $request->status;
        }

        $vehicle->save();

        LogRecord::create([
            'user_id' => auth()->user()->id,
            'description' => "atualizou o estado do veículo " . $vehicle->id . " (" . $vehicle->name . ")"
        ]);

        return new VehicleResource($vehicle);
    }
}
