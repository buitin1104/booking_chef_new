<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class ProductCreateRequest extends FormRequest
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
    public function rules()
    {
        return [
            'name' => 'required|max:255',
            'slug' => 'required|max:255',
            'price' => 'required|numeric',
            'quantity' => 'required|integer',
            'chef_id' => 'required|exists:chefs,id'
        ];
    }

    public function attributes()
    {
        return [
            'chef_id' => 'dau bep',  
        ];
    }

    public function messages()
    {
        return [
            'name.required' => 'Trường này không được để trống',
            'slug.required' => 'Trường này không được để trống',
            'price.required' => 'Trường này không được để trống',
            'quantity.required' => 'Trường này không được để trống',
            'required' => ':attribute không được để trống',
        ];
    }
}
