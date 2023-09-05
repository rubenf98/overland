<?php

namespace App\Models;

use Cerbero\QueryFilters\FiltersRecords;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Partner extends Model
{
    use FiltersRecords;

    protected $fillable = ["name", "user_id"];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function activities()
    {
        return $this->belongsToMany(Activity::class, 'partner_has_activities');
    }
}
