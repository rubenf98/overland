<?php

namespace App\Models;

use Cerbero\QueryFilters\FiltersRecords;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BlockDate extends Model
{
    use HasFactory, FiltersRecords;
    protected $fillable = ['date', 'notes', 'activity_id', 'reservation_id', 'block_period_id', 'overland_id', 'vehicle_id'];

    public function period()
    {
        return $this->belongsTo(BlockPeriod::class);
    }

    public function reservation()
    {
        return $this->belongsTo(Reservation::class);
    }

    public function overland()
    {
        return $this->belongsTo(Overland::class);
    }

    public function vehicle()
    {
        return $this->belongsTo(Vehicle::class);
    }

    public function activity()
    {
        return $this->belongsTo(Activity::class);
    }
}
