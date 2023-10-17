<?php

namespace App\Models;

use Cerbero\QueryFilters\FiltersRecords;
use Illuminate\Database\Eloquent\Model;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Support\Facades\Storage;

class Reservation extends Model
{
    use FiltersRecords;

    protected $fillable = [
        'payment_method', 'activity_id', 'client_id', 'token', 'price',
        'date', 'notes', 'status', 'participants', 'address'
    ];

    public function generateInvoice()
    {
        $reservation = $this;
        $pdf = PDF::loadView('emails.invoice', compact('reservation'));

        Storage::put("/public/invoice_" . $this->token . ".pdf", $pdf->output());
        $content = $pdf->download('invoice.pdf');

        return $content;
    }

    public function activity()
    {
        return $this->belongsTo(Activity::class);
    }

    public function client()
    {
        return $this->belongsTo(Client::class);
    }
}
