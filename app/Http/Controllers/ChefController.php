<?php

namespace App\Http\Controllers;

use App\Http\Requests\User\UpdateChefRequest;
use Illuminate\Http\Request;

class ChefController extends Controller
{
    public function index()
    {
        $user = Auth::user();

        return view('users.Chef.index', [
            'user' => $user
        ]);
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
