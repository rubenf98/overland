<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ReservationEmail extends Mailable
{
    use Queueable, SerializesModels;

    public $token;
    public $date;
    public $activity;


    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($aToken, $aDate, $aActivity)
    {
        $this->activity = $aActivity;
        $this->token = $aToken;
        $this->date = $aDate;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('emails.reservation')
            ->subject('Nova reserva Overland')
            ->attach(public_path("/storage/invoice_" . $this->token . ".pdf"), [
                'as' => 'reservation_details.pdf',
                'mime' => 'application/pdf',
            ]);
    }
}
