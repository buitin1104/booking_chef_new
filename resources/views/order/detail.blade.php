@extends('web::layouts.master')

@section('title') Chi tiết đơn hàng @endsection

@section('content')
    <div class="container" id="order-history-detail">
        <div class="row">
            <div class="col-md-12">
                <div class="row mt-10">
                    <div class="col-md-6">
                        <a href="{{ route('order.index') }}" class="back-to-order-history">
                            <i class="fa fa-arrow-left"></i>
                            <span>Trở lại</span>
                        </a>
                    </div>
                    <div class="col-md-6 text-right">
                        Mã đơn hàng: <span class="color-red">{{ $order['code'] }}</span>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="info-user-order">
                            <h6 class="heading-title">Thông tin khách hàng</h6>
                            <p class="mt-20">Họ và tên: {{ $order['user']['name'] ?? $order['order_address']['name'] }}</p>
                            <p>Địa chỉ: {{ $order['order_address']['city'] }}, {{ $order['order_address']['district'] }}, {{ $order['order_address']['address'] }}</p>
                            <p>Số điện thoại: {{ $order['user']['phone'] ?? $order['order_address']['phone'] }}</p>
                        </div>
                    </div>
                </div>

                <div class="row mt-30">
                    <div class="col-md-12">
                        <h6 class="heading-title">Danh sách sản phẩm</h6>
                    </div>
                    <div class="list-order-histories">
                        <div class="item">
                            @foreach ($order['products'] as $key => $product)
                                @php
                                    $price = (int)$order['order_products'][$key]['price'];
                                    $quantity = (int)$order['order_products'][$key]['quantity'];
                                    $product_id = $product['configurable_product_id'] ?? $product['id'];
                                @endphp
                                <div class="product">
                                    <div class="image">
                                        <img src="{{ asset($product['product_images']['0']['url']) }}" alt="">
                                    </div>
                                    <div class="info">
                                        <a href="{{ route('product.detail', ['slug' => $product['slug'], 'id' => $product_id]) }}" class="title" target="_blank">
                                            <span class="name">{{ $product['title'] }}</span>
                                        </a>
                                        @if (isset($product['attributes']))
                                            <span class="attribute-item">
                                                (@foreach ($product['attributes'] as $attribute){{ $loop->first ? '' : ', '  }}{{ __($attribute['attribute_items']['0']['key']) }}: {{ $attribute['attribute_items']['0']['title'] }}@endforeach)
                                            </span>
                                        @endif
                                        <span class="mr-10px">
                                            Đơn giá:
                                            <span class="color-red">
                                                {{ number_format($price) }} <sup>đ</sup>
                                            </span>
                                        </span>
                                        <span class="tax mr-10px">
                                            Thuế:
                                            <span class="color-red">Đã bao gồm</span>
                                        </span>
                                        <span class="mr-10px">Số lượng: {{ $quantity }}</span>
                                        <span class="sub-total">
                                            Tổng tiền:
                                            <span class="number color-red">
                                                {{ number_format($price * $quantity) }} <sup>đ</sup>
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            @endforeach
                            <div class="summery">
                                <div class="sub-summery">
                                    <p class="total-product font-size-15">
                                        <span class="intro">Tiền hàng: </span>
                                        <span class="number color-red">{{ number_format($order['total']) }} <sup>đ</sup></span>
                                    </p>
                                    <p class="fee_ship font-size-15">
                                        <span class="intro">Cước vận chuyển:</span>
                                        <span class="number color-red">0 <sup>đ</sup></span>
                                    </p>
                                    <p class="total font-size-15">
                                        <span class="intro">Tổng thanh toán:</span>
                                        <span class="number color-red">{{ number_format($order['total']) }} <sup>đ</sup></span>
                                    </p>
                                    <p class="fee_ship font-size-15">
                                        <span class="intro">Phương thức thanh toán:</span>
                                        <span class="number" style="color: #00c4ff; font-weight: 600">Thanh toán trực tiếp</span>
                                    </p>
                                </div>
                                <div style="clear: right"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
