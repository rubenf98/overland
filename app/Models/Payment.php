<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Symfony\Component\Console\Output\ConsoleOutput;

class Payment extends Model
{
    use HasFactory;

    protected $fillable = [
        'reservation_id', 'reference', 'entity', 'status', 'value',
        'start_date', 'end_date'
    ];

    public static function store($reservationId, $data)
    {
        return self::create([
            'reservation_id' => $reservationId,
            'reference' => $data["referencia"],
            'entity' => $data['entidade'],
            'status' => $data['estado'],
            'value' => $data['valor'],
        ]);
    }
}
