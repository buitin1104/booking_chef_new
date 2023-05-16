<?php

namespace App\Http\Controllers;

use App\Http\Requests\User\UpdateChefRequest;
use Illuminate\Http\Request;
use App\Models\Chef;

class ChefController extends Controller
{
    public function index(Request $request)
    {
        $query = Chef::query()->with('review');

        $params = $request->all();

        if (isset($params['tu-khoa']) && $params['tu-khoa']) {
            $query->where('name', 'like', '%'.$params['tu-khoa'].'%')
            ->orWhere('email', 'like', '%'.$params['tu-khoa'].'%');
        }

        $chefs = $query->get();

        $viewData = [
            'chefs' => $chefs,
        ];

        return view('chef.index', $viewData);
    }

    public function update(UpdateChefRequest $request)
    {
        $user = Auth::user();

        $user->updata([
            'name' => $$request->name
        ]);
        $detail = $user->detail()->firstOrCreate();

        $detail->update([
            'address' => $request->address,
            'phone_number' => $request->phone_number,
            'experience_year' => $request->experience_year,
        ]);
    }
}
