<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Chef;
use App\Models\Product;
use Session;

class CartController extends Controller
{
    public function index()
    {
        $cart = Session::get('cart', []);
        return view('cart.index', compact('cart'));
    }

    public function addToCart(Request $request, $id)
    {
        $params = $request->all();
        $product = Chef::where('id', $id)->first()->toArray();
        $cart = Session::get('cart', []);

        if ($product) {
            if (isset($cart[$product['id']])) {
                Session::put('cart', $cart);
            } else {
                $product['price'] = removeComma($product['price']);
                $cart[$product['id']] = $product;
            }
            Session::put('cart', $cart);
        }
        $infoCart = $this->getInfoCart($cart);

        return response()->json([
            'code' => 200,
            'message' => __('Thêm thành công'),
            'data' => $cart,
            'countProduct' => $infoCart['countProduct'],
            'html' => $infoCart['html']
        ]);
    }

    public function updateCart(Request $request, $product_id)
    {
        $params = $request->all();
        $cart = Session::get('cart', []);

        $cart[$product_id]['quantity'] = $params['quantity'];

        if ($params['quantity'] < 1) {
            $cart = array_filter($cart, function ($item, $key) use ($product_id) {
                return $item['id'] != $product_id;
            }, ARRAY_FILTER_USE_BOTH);
        }

        Session::put('cart', $cart);
        $cart = Session::get('cart', []);

        $infoCart = $this->getInfoCart($cart);
        return response()->json([
            'code' => 200,
            'message' => 'Cập nhật giỏ hàng thành công',
            'html' => $infoCart['html'],
            'countProduct' => $infoCart['countProduct'],
            'table' => $infoCart['htmlCartTable']
        ]);
    }

    public function removeFromCart(Request $request, $product_id) {
        $cart = Session::get('cart', []);

        $cart = array_filter($cart, function ($item, $key) use ($product_id) {
            return $item['id'] != $product_id;
        }, ARRAY_FILTER_USE_BOTH);

        Session::put('cart', $cart);
        $infoCart = $this->getInfoCart($cart);

        $isEmpty = count($cart) > 0 ? false : true;

        return response()->json([
            'code' => 200,
            'message' => __('Xóa thành công'),
            'countProduct' => $infoCart['countProduct'],
            'html' => $infoCart['html'],
            'isEmpty' => $isEmpty,
        ]);
    }

    private function getInfoCart($cart)
    {
        $totalProduct = 0;
        $countProduct = 0;
        if (isset($cart)) {
            foreach ($cart as $item) {
                $countProduct += 1;
                $totalProduct += $item['price'];
            }
        }
        Session::put('totalProduct', $totalProduct);
        Session::put('countProduct', $countProduct);

        $html = '';
        $htmlCartTable = '';
        if (count($cart) > 0) {
            $html = view('cart.item', compact('cart'))->render();
        } else {
            $html = '<div class="text-center">'.
                '<img src="/images/img_empty.png" alt="" style="max-width: 200px">'.
                '<p class="cart-empty">'.__('Giỏ hàng của bạn trống!').'</p>'.
            '</div>';
        }
        $htmlCartTable = view('cart.table', compact('cart'))->render();

        return [
            'html' => $html,
            'countProduct' => $countProduct,
            'htmlCartTable' => $htmlCartTable
        ];
    }
}
