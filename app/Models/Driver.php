<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Driver extends Model
{
    protected $fillable = ['name', 'age', 'license', 'address'];

    public static function store($validator)
    {
        return Driver::create([
            'name' => $validator['driver_name'],
            'age' => $validator['driver_age'],
            'license' => $validator['driver_license'],
        ]);
    }
}
