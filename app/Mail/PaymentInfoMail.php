<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class PaymentInfoMail extends Mailable implements ShouldQueue
{
    use Queueable, SerializesModels;

    public $token;
    public $date;
    public $activity;

    public $entity;
    public $reference;
    public $value;


    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($aToken, $aDate, $aActivity, $aEntity, $aReference, $aValue)
    {
        $this->activity = $aActivity;
        $this->token = $aToken;
        $this->date = $aDate;
        $this->entity = $aEntity;
        $this->reference = $aReference;
        $this->value = $aValue;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('emails.payment')
            ->subject('Nova reserva Overland')
            ->attach(public_path("/storage/invoice_" . $this->token . ".pdf"), [
                'as' => 'reservation_details.pdf',
                'mime' => 'application/pdf',
            ]);
    }
}
