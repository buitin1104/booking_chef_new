<?php

namespace App\Http\Controllers;

use App\Http\Requests\User\UpdateProfileRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ProfileController extends Controller
{
    public function index()
    {
        $user = Auth::user();

        return view('users.profiles.index', [
            'user' => $user
        ]);
    }

    public function update(UpdateProfileRequest $request)
    {
        $user = Auth::user();

        $user->update([
            'name' => $request->name
        ]);

        $detail = $user->detail()->firstOrCreate();

        $detail->update([
            'gender' => $request->gender,
            'birthday' => $request->birthday
        ]);

        if ($request->password) {
            $user->update([
                'password' => bcrypt($request->password)
            ]);
        }

        return back();
    }

    public function changePassword()
    {
        return back();
    }
}
