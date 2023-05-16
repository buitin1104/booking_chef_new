<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class CreateChefRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|max:100',
            'email' => 'required|email|unique:chefs,email',
            'phone' => 'required|numeric',
            'experience_year' => 'required|numeric',
            'price' => 'required',
        ];
    }

    public function messages(): array
    {
        return [
            'name.required' => 'Trường này không được để trống',
            'email.required' => 'Trường này không được để trống',
            'phone.required' => 'Trường này không được để trống',
            'experience_year.required' => 'Trường này không được để trống',
            'price.required' => 'Trường này không được để trống',
        ];
    }
}
