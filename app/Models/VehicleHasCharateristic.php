<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Spatie\Translatable\HasTranslations;

class VehicleHasCharateristic extends Model
{
    use HasTranslations;

    public $translatable = ['value'];

    protected $fillable = [
        'value', 'vehicle_id', 'charateristic_id'
    ];
}
