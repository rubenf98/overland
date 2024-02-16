<?php

namespace App\Http\Requests;

use App\Models\Extra;
use App\Models\Insurance;
use App\Models\Vehicle;
use Carbon\Carbon;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;
use Symfony\Component\Console\Output\ConsoleOutput;

class OverlandRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }
    protected function prepareForValidation()
    {
        $from = Carbon::parse($this->date[0]);
        $to = Carbon::parse($this->date[1]);
        $days = $from->diffInDays($to);

        $vehicle = Vehicle::find($this->vehicle_id);

        $vehiclePrice = 0;
        foreach ($vehicle->prices as $price) {
            if ($price->month == $from->month && $price->price > $vehiclePrice) {
                $vehiclePrice = $price->price;
            } else if ($price->month == $to->month && $price->price > $vehiclePrice) {
                $vehiclePrice = $price->price;
            }
        }

        $extraPrice = 0;
        #$out = new ConsoleOutput();
        $hasPickup = false;

        foreach ($this->extras as $cExtra) {
            $extra = Extra::find($cExtra);
            if ($cExtra == 2) {
                $hasPickup = true;
            }
            #$out->writeln($extra);
            if ($extra->type == "day") {
                $extraPrice += $days * $extra->price;
            } else {
                $extraPrice += $extra->price;
            }
        }



        $insurance = Insurance::find($this->insurance_id);

        $this->merge([
            'price' => round(($vehiclePrice * $days) + $extraPrice + ($insurance->price * $days), 2),
            'vehicle_price' => round($vehiclePrice * $days, 2),
            'vehicle_price_per_day' => round($vehiclePrice, 2),
            'days' => $days,
            'pickup_place' => $hasPickup ? "Aeroporto" : "Loja"
        ]);
    }
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required|string',
            'country' => 'required|string',
            'email' => 'required|string',
            'phone' => 'required|string',

            'date' => 'required|array',
            'date.*' => 'required|date',
            'pickup_place' => 'required|string',
            'flight' => 'nullable|string',
            'vehicle_id' =>  'required|integer|exists:vehicles,id',
            'insurance_id' => 'required|integer|exists:insurances,id',
            'price' => 'required|numeric',
            'days' => 'required|integer|min:1',
            'vehicle_price' => 'required|numeric',
            'vehicle_price_per_day' => 'required|numeric',

            'extras' => 'nullable|array',
            'extras.*' => 'integer|exists:extras,id',

            'driver_name' => 'required|string',
            'driver_age' => 'required|integer|min:25',
            'driver_license' => 'required|string',
        ];
    }

    protected function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response()->json([
            'success' => false,
            'errors' => $validator->errors()
        ], 422));
    }
}
