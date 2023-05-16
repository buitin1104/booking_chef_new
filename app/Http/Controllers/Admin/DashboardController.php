<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Chef;
use App\Models\Product;
use App\Models\Order;

class DashboardController extends Controller
{
    public function index()
    {
        $totalChef = Chef::count();
        $totalProduct = Product::count();
        $totalOrder = Order::count();

        $viewData = [
            'totalChef' => $totalChef,
            'totalProduct' => $totalProduct,
            'totalOrder' => $totalOrder,
        ];
        return view('admin.dashboard', $viewData);
    }
}
