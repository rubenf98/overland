<?php

namespace App\Http\Controllers;

use App\Models\BlockDate;
use Carbon\Carbon;
use Illuminate\Http\Request;

class IsVehicleAvailableInvokable extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        return BlockDate::where("date", ">", Carbon::now())->where('vehicle_id', $request->vehicle_id)->get()->pluck("date");
    }
}
