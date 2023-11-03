<?php

namespace App\Http\Controllers;

use App\Models\BlockDate;
use Illuminate\Http\Request;

class IsActivityAvailableInvokable extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        $blockdate = BlockDate::where("date", $request->date)->where('activity_id', $request->activity_id)->first();

        return $blockdate ? 0 : 1;
    }
}
