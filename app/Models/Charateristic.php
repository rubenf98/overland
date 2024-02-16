<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Translatable\HasTranslations;

class Charateristic extends Model
{
    use HasTranslations;
    public $translatable = ['name'];

    protected $fillable = [
        'name'
    ];

    public function vehicles()
    {
        return $this->belongsToMany(Vehicle::class, 'vehicle_has_charateristics')->withPivot('value');
    }
}
