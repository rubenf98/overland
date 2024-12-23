<?php

namespace App\Models;

use Spatie\Translatable\HasTranslations;
use Cerbero\QueryFilters\FiltersRecords;
use Illuminate\Database\Eloquent\Model;

class Activity extends Model
{
    use HasTranslations;
    use FiltersRecords;

    public $fillable = [
        'description1',
        'description2',
        'description3',
        'name',
        'category_id',
        'image',
        'status',
        'price',
        'minimum',

    ];

    public $translatable = [
        'description1',
        'description2',
        'description3',
        'name',
    ];

    public function images()
    {
        return $this->hasMany(ActivityImage::class);
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}
