<?php

namespace App\Http\Requests;

use App\Models\Activity;
use App\Models\Council;
use Carbon\Carbon;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;

class ReservationRequest extends FormRequest
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
        $activityId = $this->activity_id ? $this->activity_id : $this->activity[1];
        $activity = Activity::find($activityId);
        $council = Council::find($this->council_id);

        $activityPrice = $activity->price * $this->participants;
        $total = $activityPrice + $council->price;

        if ($total < $activity->minimum) {
            $total = $activity->minimum + $council->price;
            $activityPrice = $activity->minimum;
        }

        $this->merge([
            'price' => $total,
            'activity_price' => $activityPrice,
            'transportation_price' => $council->price,
            'activity_id' => $activityId,
        ]);
        // Log::alert("step 9");
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
            'cc' => 'nullable|string',
            'nif' => 'nullable|string',
            'country' => 'required|string',
            'email' => 'required|string',
            'phone' => 'required|string',

            'date' => 'required|date|after:' . Carbon::now()->addDay()->startOfDay(),
            'activity_id' =>  'required|integer|exists:activities,id',
            'council_id' => 'required|integer|exists:councils,id',
            'price' => 'required|numeric',
            'activity_price' => 'required|numeric',
            'transportation_price' => 'required|numeric',
            'participants' => 'required|integer',
            'address' => 'nullable|string',

            'notes' => 'nullable|string',
            'payment_method' => 'nullable|string',
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
