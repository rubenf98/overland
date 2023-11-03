<?php

namespace App\Jobs;

use App\Mail\ReservationEmail;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Mail;

class HandleReservationJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $reservation;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($aReservation)
    {
        $this->reservation = $aReservation;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $this->reservation->generateInvoice();

        Mail::to($this->reservation->client->email)->queue(
            new ReservationEmail(
                $this->reservation->token,
                $this->reservation->date,
                $this->reservation->activity->name
            )
        );
    }
}
