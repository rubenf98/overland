<?php

namespace App\Jobs;

use App\Mail\OverlandPaymentInfoMail;
use App\Mail\PaymentInfoMail;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Mail;

class HandleOverlandPaymentJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $overland, $payment;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($aOverland, $aPayment)
    {
        $this->overland = $aOverland;
        $this->payment = $aPayment;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $this->overland->generateInvoice();

        Mail::to($this->overland->client->email)->queue(
            new OverlandPaymentInfoMail(
                $this->overland->token,
                $this->overland->pickup_date,
                $this->overland->return_date,
                $this->overland->vehicle->title,
                $this->payment->entity,
                $this->payment->reference,
                $this->payment->value,

            )
        );
    }
}
