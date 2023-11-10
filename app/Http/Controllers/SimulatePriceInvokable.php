<?php

namespace App\Http\Controllers;

use App\Models\Activity;
use App\Models\Council;
use Illuminate\Http\Request;

class SimulatePriceInvokable extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        $activity = Activity::find($request->activity[1]);
        $council = Council::find($request->council_id);


        $activityPrice = $activity->price * $request->participants;
        $total = $activityPrice + $council->price;

        if ($total < $activity->minimum) {
            $total = $activity->minimum + $council->price;
        }

        return $total;
    }
}
