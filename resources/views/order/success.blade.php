<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Đặt hàng thành công</title>
        <link rel="stylesheet" href="{{ asset('/vendor/css/bootstrap.min.css') }}">
        <link rel="stylesheet" href="{{ asset('modules/user/css/font-awesome.css') }}" type="text/css">
        <link rel="stylesheet" href="{{ asset('modules/user/css/order-success.css') }}">
    </head>
    <body>
        <div class="complete-order-page" style="margin-top: 30px">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <div class="row thank-you">
                            <div class="col-md-12">
                                <p class="title">Bạn đã đặt thành công</p>
                                <p>Cảm ơn bạn đã lựa chọn chúng tôi!</p>
                            </div>
                        </div>
                        <div class="row information">
                            <h5 class="title">Thông tin khách hàng</h5>
                            <p>Họ tên: <span class="color-blue">{{ $order->user->name }}</span></p>
                            <p>Số điện thoại: <span class="color-blue">{{ $order->user->detail ? $order->user->detail->phone : '' }}</span></p>
                            <p>Email: <span class="color-blue">{{ $order->user->email }}</span></p>
                            <p>
                                Địa chỉ:
                                <span class="color-blue">
                                    {{ $order->user->detail ? $order->user->detail->address : '' }}
                                </span>
                            </p>
                            <p>Trạng thái đơn hàng: <span class="color-orange text-uppercase">Đặt hàng</span></p>
                            <p>
                                Phương thức thanh toán:
                                <span class="color-blue">
                                    Thanh toán trực tiếp
                                </span>
                            </p>
                        </div>
                        <div class="row">
                            <a href="{{ route('home') }}" class="btn btn-default btn-continue-shopping">Tiếp tục lựa chọn</a>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="info-cart">
                            @if (count($order['order_chefs']) > 0)
                                @foreach ($order['chefs'] as $key => $item)
                                    <div class="item">
                                        <div class="content">
                                            <div class="image">
                                                <img src="{{ $item['avatar'] }}" alt="{{ $item['title'] }}">
                                            </div>
                                            <div class="des">
                                                <span class="title">{{ $item['title'] }}</span> <br>
                                            </div>
                                        </div>
                                        <div class="price">
                                            <span class="number">${{ number_format($order['order_chefs'][$key]['price']) }}</span>
                                        </div>
                                    </div>
                                @endforeach
                            @endif
                        </div>
                        <hr>
                        <hr>
                        <div class="d-flex justify-content-space-between mb-20">
                            <span>{{ __('Tổng tiền') }}:</span>
                            <b class="font-size-18">${{ number_format($order['total']) }}</b>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </body>
</html>
