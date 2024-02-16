<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Spatie\Translatable\HasTranslations;

class Extra extends Model
{
    use HasTranslations;
    public $translatable = ['name'];

    protected $fillable = [
        'price', 'type', 'price', 'name', 'max'
    ];

    protected $casts = [
        'price' => 'decimal:2',
        'visible' => 'integer',
    ];
}
