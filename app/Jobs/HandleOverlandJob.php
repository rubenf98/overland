<?php

namespace App\Jobs;

use App\Mail\OverlandEmail;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Mail;

class HandleOverlandJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $overland;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($aOverland)
    {
        $this->overland = $aOverland;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $this->overland->generateInvoice();

        Mail::to('overlandmadeira@gmail.com')->queue(
            new OverlandEmail(
                $this->overland->token,
                $this->overland->pickup_date,
                $this->overland->return_date,
                $this->overland->vehicle->title,
            )
        );
    }
}
