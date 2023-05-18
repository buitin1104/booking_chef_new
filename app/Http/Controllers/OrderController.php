<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Order;
use App\Models\Chef;
use App\Models\OrderChef;
use DB;
use Illuminate\Support\Facades\Mail;
use App\Mail\OrderSuccessMail;
use App\Models\UserDetail;

class OrderController extends Controller
{
    private $user;
    private $order;

    public function __construct(
        User $user,
        Order $order,
        Chef $product
    ) {
        $this->user = $user;
        $this->order = $order;
        $this->product = $product;
    }

    public function index() {
        $countProduct = $this->countProductByStatus();
        $viewData = [
            'orders' => $this->getDataOrderHistory('order'),
            'countProduct' => $countProduct
        ];
        return view('order.index', $viewData);
    }

    public function checkout(Request $request) {
        $user = null;

        if (auth()->user()) {
            $user = User::where('id', auth()->user()->id)->with('detail')->first();
        }
        return view('order.checkout', compact('user'));
    }

    public function store(Request $request) {
        $params = $request->all();
        DB::beginTransaction();
        $cart = \Session::get('cart', []);
        $total = 0;
        $orderCode = 0;
        foreach ($cart as $item) {
            $total += $item['price'];
        }

        // update address of user
        UserDetail::updateOrCreate([
            'user_id' => auth()->user()->id
        ], [
            'user_id' => auth()->user()->id,
            'address' => $params['address'],
            'phone' => $params['phone'],
        ]);

        $orderCode = (($this->order->orderBy('id', 'desc')->first()->id ?? 0) + 1).time();
        $dataInsertOrder = [
            'user_id' => auth()->user()->id,
            'code' => $orderCode,
            'total' => $total,
            'status' => 'order',
            'note' => ''
        ];
        $orderCreated = Order::create($dataInsertOrder);

        $orderProducts = [];
        foreach ($cart as $item) {
            array_push($orderProducts, [
                'order_id' => $orderCreated->id,
                'chef_id' => $item['id'],
                'price' => $item['price'],
            ]);
        }
        OrderChef::insert($orderProducts);

        if ($orderCode) {
            DB::commit();
            $order = $this->getDataOrderDetail($orderCode);
            Mail::to(auth()->user()->email)->send(new OrderSuccessMail($order));
            return redirect(route('order.success', [
                'code' => $orderCode,
            ]))->with('alert-success', 'Đặt thành công');
        } else {
            DB::rollback();
            $url = route('checkout');
            return redirect(route('home'))->with('alert-danger', 'Đặt thất bại');
        }
    }

    public function detail($code) {
        $order = $this->getDataOrderDetail($code);
        $viewData = [
            'order' => $order
        ];
        return view('order.detail', $viewData);
    }

    public function cancel(Request $request, $code) {
        $params = $request->all();
        $newStatus = $params['newStatus'];
        $oldStatus = $params['oldStatus'];
        $note = $params['note'];
        DB::beginTransaction();

        $findOrder = $this->order->where('code', $code)->first();
        if ($findOrder) {
            $findOrder->update([
                'status' => $newStatus,
                'note' => $note
            ]);

            DB::commit();
            $orders = $this->getDataOrderHistory($oldStatus);
            $countProduct = $this->countProductByStatus();
            $html = view('order.includes.order-histories', compact('orders'))->render();
            return response()->json([
                'code' => 200,
                'message' => 'Huỷ đơn hàng thành công',
                'html' => $html,
                'countProduct' => $countProduct
            ]);
        } else {
            DB::rollback();
            return response()->json([
                'code' => 400,
                'message' => 'Huỷ đơn hàng thất bại',
            ]);
        }
    }

    public function orderSuccess($code) {
        $oldCart = \Session::get('cart', []);
        if (!$oldCart) {
            return redirect()->route('home');
        }
        $order = $this->getDataOrderDetail($code);
        $this->clearCart();
        return view('order.success', compact('order'));
    }

    public function getProductByType(Request $request) {
        $params = $request->all();
        $keyword = isset($params['keyword']) ? $params['keyword'] : '';
        $orders = $this->getDataOrderHistory($params['status'], $keyword);
        $countProduct = $this->countProductByStatus();
        $html = view('order.includes.order-histories', compact('orders'))->render();
        return response()->json([
            'code' => 200,
            'message' => 'success',
            'html' => $html,
            'countProduct' => $countProduct
        ]);
    }

    private function getDataOrderHistory($status, $keyword = null) {
        $orders = $this->order->query()->where([
            'user_id' => auth()->user()->id
        ])->with(
            'user',
            'user.detail',
            'chefs',
            'order_chefs',
        );

        if ($status && $status != 'all') {
            $orders->where('status', $status);
        }

        if ($keyword) {
            $orders->where(function ($q) use ($keyword) {
                $q->orWhere('code', 'like', '%'.$keyword.'%');
                $q->orWhere('total', 'like', '%'.$keyword.'%');
            });
        }

        $orders = $orders->get();

        if ($orders) {
            $orders = $orders->toArray();
            return $orders;
        }
        return [];
    }

    public function countProductByStatus() {
        $countProduct = [
            'order' => $this->order->where('user_id', auth()->user()->id)->where('status', 'order')->count(),
            'confirm' => $this->order->where('user_id', auth()->user()->id)->where('status', 'confirm')->count(),
            'cancel' => $this->order->where('user_id', auth()->user()->id)->where('status', 'cancel')->count(),
            'success' => $this->order->where('user_id', auth()->user()->id)->where('status', 'success')->count(),
            'all' => $this->order->where('user_id', auth()->user()->id)->count(),
        ];
        return $countProduct;
    }

    public function getDataOrderDetail($code) {
        $order = $this->order->where('code', $code)->with(
            'order_chefs',
            'chefs',
            'user',
            'user.detail'
        )->first();
        if (!$order) {
            abort(404);
        }

        return $order;
    }

    public function clearCart() {
        \Session::forget('cart');
        \Session::forget('countProduct');
        \Session::forget('totalProduct');
    }
}
