<?php

namespace App\Http\Controllers\Admin;

use App\Models\User;
use Illuminate\Http\Request;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class AdminAuthController extends Controller
{
    public function showLogin()
    {
        if (Auth::guard('admin')->user()) {
            return redirect(route('admin.dashboard'));
        }
        return view('admin.auth.login');
    }

    public function login(Request $request)
    {
        $data = $request->all();

        if(Auth::guard('admin')->attempt([
            'email'=>$data['email'],
            'password'=>$data['password']
        ])){
            $user = User::where('email', $data['email'])->first();
            if ($user->role === 1) {
                return redirect()->route('admin.dashboard')->with('alert-success', 'Đăng nhập thành công');
            } else {
                Auth::guard('admin')->logout();
                return redirect()->back()->with('alert-danger', 'Tài khoản của bạn không có quyền truy cập');
            }
        } else{
            return redirect()->back()->with('alert-danger', 'Sai tài khoản hoặc mật khẩu');
        }
    }

    public function logout()
    {
        Auth::guard('admin')->logout();
        return redirect()->route('admin.login');
    }
}
