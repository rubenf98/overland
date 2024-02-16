<?php

namespace App\Mail;

use Carbon\Carbon;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class OverlandPaymentInfoMail extends Mailable implements ShouldQueue
{
    use Queueable, SerializesModels;

    public $token;
    public $fromDate;
    public $toDate;
    public $vehicle;

    public $entity;
    public $reference;
    public $value;


    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($aToken, $aFromDate, $aToDate, $aVehicle, $aEntity, $aReference, $aValue)
    {
        $this->vehicle = $aVehicle;
        $this->token = $aToken;
        $this->entity = $aEntity;
        $this->reference = $aReference;
        $this->value = $aValue;
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
        return $this->view('emails.overlandpayment')
            ->subject('Nova reserva Overland')
            ->attach(public_path("/storage/invoice_" . $this->token . ".pdf"), [
                'as' => 'reservation_details.pdf',
                'mime' => 'application/pdf',
            ]);
    }
}
