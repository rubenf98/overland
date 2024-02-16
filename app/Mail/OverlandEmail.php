<?php

namespace App\Mail;

use Carbon\Carbon;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class OverlandEmail extends Mailable
{
    use Queueable, SerializesModels;

    public $token;
    public $vehicle;
    public $fromDate;
    public $toDate;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($aToken, $aFromDate, $aToDate, $aVehicle)
    {
        $this->vehicle = $aVehicle;
        $this->token = $aToken;
        $this->fromDate = Carbon::parse($aFromDate)->format('d-m-Y');
        $this->toDate = Carbon::parse($aToDate)->format('d-m-Y');
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('emails.overland')
            ->subject('Nova reserva Overland')
            ->attach(public_path("/storage/invoice_" . $this->token . ".pdf"), [
                'as' => 'overland_details.pdf',
                'mime' => 'application/pdf',
            ]);
    }
}
