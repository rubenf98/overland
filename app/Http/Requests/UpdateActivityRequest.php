<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;

class UpdateActivityRequest extends FormRequest
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
            'name_pt' => 'required|string',
            'name_en' => 'required|string',
            'category_id' => 'required|integer|exists:categories,id',
            'price' => 'required|integer',
            'minimum' => 'required|integer',
            'description1_pt' => 'required|string',
            'description1_en' => 'required|string',
            'description2_pt' => 'required|string',
            'description2_en' => 'required|string',
            'description3_pt' => 'required|string',
            'description3_en' => 'required|string',
            'banner' => 'nullable|image|mimes:jpg',
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
