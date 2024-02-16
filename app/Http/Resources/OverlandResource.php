<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class OverlandResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'token' => $this->token,
            'vehicle' => $this->vehicle,
            'client' => $this->client,
            'insurance' => $this->insurance,
            'driver' => $this->driver,
            'price' => $this->price,
            'vehicle_price' => $this->vehicle_price,
            'return_date' => $this->return_date,
            'pickup_date' => $this->pickup_date,
            'pickup_place' => $this->pickup_place,
            'status' => $this->status,
            'created_at' => (string) $this->created_at,
            'flight' => $this->flight,
            'notes' => $this->notes,
            'address' => $this->address,
            'days' => $this->days,
            'payment' => $this->payment,
            'extras' => $this->extras
        ];
    }
}
