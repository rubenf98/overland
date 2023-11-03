<?php

namespace App\Http\Controllers;

use App\Mail\ReservationEmail;
use App\Models\Reservation;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ConfirmReservationInvokable extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        $reservation = Reservation::with('activity')->where('token', $request->token)->firstOrFail();



        if ($reservation->payment_method == "Cartão de crédito") {
            $reservation->payed_at = Carbon::now();
        }
        $reservation->confirmed_at = Carbon::now();
        $reservation->status = "confirmado";
        $reservation->save();

        $reservation->generateInvoice();
        // Mail::to("jrubenf98@gmail.com")->queue(new ReservationEmail($reservation->token, $reservation->pickup_date, $reservation->return_date, $reservation->carPref->title));
        Mail::to("jrubenf98@gmail.com")->queue(new ReservationEmail($reservation->token, $reservation->date, $reservation->activity->title));
    }
}
