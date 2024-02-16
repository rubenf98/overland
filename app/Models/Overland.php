<?php

namespace App\Models;

use Cerbero\QueryFilters\FiltersRecords;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Support\Facades\Storage;

class Overland extends Model
{
    use SoftDeletes, FiltersRecords;

    protected $fillable = [
        'address', 'vehicle_price_per_day',  'vehicle_id', 'client_id', 'insurance_id',
        'days', 'vehicle_price', 'token', 'price',
        'pickup_date', 'return_date', 'pickup_place', 'return_place',
        'flight', 'notes', 'status', 'confirmed_at', 'archive', 'driver_id'
    ];

    public function generateInvoice()
    {
        $overland = $this;
        $pdf = PDF::loadView('emails.overlandinvoice', compact('overland'));

        Storage::put("/public/invoice_" . $this->token . ".pdf", $pdf->output());
        $content = $pdf->download('invoice.pdf');

        return $content;
    }


    public function extras()
    {
        return $this->belongsToMany(Extra::class, 'overland_has_extras');
    }

    public function vehicle()
    {
        return $this->belongsTo(Vehicle::class);
    }

    public function client()
    {
        return $this->belongsTo(Client::class);
    }

    public function insurance()
    {
        return $this->belongsTo(Insurance::class);
    }

    public function driver()
    {
        return $this->belongsTo(Driver::class);
    }

    public function payment()
    {
        return $this->hasOne(Payment::class);
    }
}
