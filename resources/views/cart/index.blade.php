@extends('layouts.app')

@section('title') Giỏ hàng @endsection

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="cart-page-area">
                    @include('cart.table', ['cart' => $cart])
                </div>
            </div>
        </div>
    </div>
@endsection
