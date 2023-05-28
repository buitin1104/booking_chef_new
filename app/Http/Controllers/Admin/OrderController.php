<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Order;
use App\Models\OrderChef;
use App\Models\User;

class OrderController extends AppController
{
    private $order;
    private $order_product;
    private $user;

    public function __construct(
        Order $order,
        OrderChef $order_product,
        User $user
    ) {
        $this->order = $order;
        $this->order_product = $order_product;
        $this->user = $user;
    }

    public function index(Request $request) {
        $query = $this->order->query();

        if ($request->has('keyword')) {
            $query = $query->where('code', 'like', '%'.$request->keyword.'%');
        }

        $query->with('order_chefs', 'user', 'user.detail', 'chefs');

        $result = $query->get();

        $viewData = [
            'result' => $result,
            'keyword' => $request->keyword,
        ];

        return view("admin.order.index", $viewData);
    }

    public function edit($id) {
        $order = $this->order->where([
            'id' => $id
        ])->with(
            'order_chefs',
            'chefs',
            'user'
        )->first();

        $orderStatus = [
            'order' => 'Đặt hàng',
            'confirm' => 'Đã duyệt',
            'cancel' => 'Đã hủy',
            'success' => 'Hoàn thành',
        ];

        $viewData = [
            'dataEdit' => $order,
            'orderStatus' => $orderStatus
        ];
        return view('admin.order.edit', $viewData);
    }

    public function update(Request $request, $id) {
        $params = $request->all();
        $this->order->findOrFail($id)->update([
            'status' => $params['status']
        ]);
        return redirect()->route('admin.order.index')->with('alert-success', 'Cập nhật thành công');
    }
}
