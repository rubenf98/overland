<?php

namespace App\Models;

use Cerbero\QueryFilters\FiltersRecords;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Arr;

class Client extends Model
{
    use FiltersRecords;
    protected $fillable = ['notes', 'name', 'cc', 'nif', 'address', 'country', 'postal_code', 'email', 'phone', 'company'];

    public static function store($validator)
    {
        $client = self::where('email', $validator['email'])->first();

        if ($client) {
            $client->update([
                'name' => $validator['name'],
                'cc' => Arr::get($validator, 'cc'),
                'nif' => Arr::get($validator, 'nif'),
                'country' => Arr::get($validator, 'country'),
                'email' => $validator['email'],
                'phone' => $validator['phone'],
                'notes' => Arr::get($validator, 'client_notes'),
            ]);
        } else {
            $client = self::create([
                'name' => $validator['name'],
                'cc' => Arr::get($validator, 'cc'),
                'nif' => Arr::get($validator, 'nif'),
                'country' => Arr::get($validator, 'country'),
                'email' => $validator['email'],
                'phone' => $validator['phone'],
                'notes' => Arr::get($validator, 'client_notes'),
            ]);
        }

        return $client;
    }

    public function reservations()
    {
        return $this->hasMany(Reservation::class);
    }
}
