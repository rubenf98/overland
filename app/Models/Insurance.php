<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Spatie\Translatable\HasTranslations;

class Insurance extends Model
{
    use HasTranslations;
    public $translatable = ['name', 'description'];

    protected $casts = [
        'price' => 'decimal:2',
    ];
}
