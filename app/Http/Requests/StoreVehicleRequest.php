<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;

class StoreVehicleRequest extends FormRequest
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

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'description_pt' => 'required|string',
            'description_en' => 'required|string',
            'title' => 'required|string',
            'registration' => 'required|string',
            'price' => 'required|array',
            'price.*' => 'required|numeric',
            'charpt' => 'required|array',
            'charpt.*' => 'required|string',
            'charen' => 'required|array',
            'charen.*' => 'required|string',
            'banner' => 'required|image|mimes:jpg',
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
