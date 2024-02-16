<?php

namespace App\Models;

use Cerbero\QueryFilters\FiltersRecords;
use Illuminate\Database\Eloquent\Model;
use Spatie\Translatable\HasTranslations;

class Vehicle extends Model
{
    use HasTranslations, FiltersRecords;
    public $translatable = ['description'];
    protected $fillable = ['title', 'registration', 'description', 'image'];

    public function prices()
    {
        return $this->hasMany(Price::class);
    }

    public function charateristics()
    {
        return $this->belongsToMany(Charateristic::class, 'vehicle_has_charateristics')->withPivot('value');
    }
}
