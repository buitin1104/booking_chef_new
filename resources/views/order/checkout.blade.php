@extends('layouts.app')

@section('content')
    <div class="container order-page">
        <div class="row">
            <div class="col-md-6">
                @if (!auth()->user())
                    <p>Đăng nhập để tiếp tục <a href="{{ route('login') }}">Đăng nhập ngay</a></p>
                @else
                    <form class="form-submit-order" method="POST" action="{{ route('order.store') }}">
                        @csrf
                        <div class="form-group">
                            <p>
                                <span class="text-shiping">{{ __('Thông tin vận chuyển') }}</span> <br/>
                            </p>
                        </div>
                        <div class="form-group">
                            <input type="text" name="name" id="name" value="{{ auth()->user()->name }}" class="form-control-custom" placeholder="{{ __('Họ tên') }}" required>
                        </div>
                        <div class="form-group row">
                            <div class="col-md-7">
                                <input type="text" name="email" id="email" value="{{ auth()->user()->email }}" class="form-control-custom" placeholder="{{ __('Email') }}" required>
                            </div>
                            <div class="col-md-5">
                                <input type="text" name="phone" id="phone" value="{{ $user->detail ? $user->detail->phone : '' }}" class="form-control-custom" placeholder="{{ __('Số điện thoại') }}" required>
                            </div>
                        </div>
                        <div class="form-group">
                            <input type="text" name="address" id="address" value="{{ $user->detail ? $user->detail->address : '' }}" class="form-control-custom" placeholder="{{ __('Địa chỉ') }}" required>
                        </div>
                        <hr>
                        @include('order.includes.payment-method')

                        <div class="form-group row d-flex align-items-center">
                            <div class="col-md-6">
                                <a href="{{ route('cart.index') }}" class="back-to-cart">
                                    <i class="fa fa-arrow-left"></i>
                                    <span>{{ __('Quay lại giỏ hàng') }}</span>
                                </a>
                            </div>
                            <div class="col-md-6">
                                <button type="submit" class="btn btn-checkout">{{ __('Xác nhận') }}</button>
                            </div>
                        </div>
                    </form>
                @endif
            </div>
            <div class="col-md-6">
                @php
                    $cart = Session::get('cart', []);
                @endphp
                <div class="info-cart">
                    @if (count($cart) > 0)
                        @foreach ($cart as $item)
                            <div class="item">
                                <div class="content">
                                    <div class="image">
                                        <img src="{{ $item['avatar'] }}" alt="">
                                    </div>
                                    <div class="des">
                                        <span class="title">{{ $item['name'] }}</span> <br>
                                    </div>
                                </div>
                                <div class="price">
                                    <span class="number">${{ number_format($item['price']) }}</span>
                                </div>
                            </div>
                        @endforeach
                    @endif
                </div>
                <hr>
                <div style="display: flex; justify-content: space-between" class="d-flex justify-content-space-between">
                    <span>{{ __('Tổng tiền') }}:</span>
                    <b>${{ number_format(Session::get('totalProduct', 0)) }}</b>
                </div>
            </div>
        </div>
    </div>
@endsection

@section('script')
    <script src="{{ asset('modules/user/js/order.js') }}"></script>
@endsection
