<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;

class AdminAuthenticate
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next, $guard = 'admin')
    {
        if (Auth::guard($guard)->guest()) {
            return redirect(route('admin.login'));
        }

        if (Auth::guard('web')->user() && Auth::guard('web')->user()->role === 0) {
            return redirect(route('home'));
        }

        return $next($request);
    }
}
