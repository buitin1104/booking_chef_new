@if (isset($cart) && count($cart) > 0)
    <form class="cart-page-area">
        <div class="table-responsive mb-10">
            <table class="shop_table-2 cart table">
                <thead>
                    <tr>
                        <th class="product-remove" style="width: 30px">{{ __('Xóa') }}</th>
                        <th class="product-thumbnail">{{ __('Hình ảnh') }}</th>
                        <th class="product-name" style="width: 390px">{{ __('Đầu bếp') }}</th>
                        <th class="product-price">{{ __('Giá') }}</th>
                        <th class="product-subtotal text-right">{{ __('Thành tiền') }}</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($cart as $item)
                        @php
                            $productId = $item['id'];
                        @endphp
                        <tr class="cart_item" productId="{{ $item['id'] }}">
                            <td class="remove-item">
                                <a href="javascript:void(0)" class="color-red"
                                    onclick="removeProductFromCart({{ $item['id'] }})">
                                    <i class="fa fa-trash-o"></i>
                                </a>
                            </td>
                            <td class="item-img">
                                <img style="width: 50px" src="{{ $item['avatar'] ? $item['avatar'] : '/images/default.png' }}" alt="Avatar not found">
                            </td>
                            <td class="item-title">
                                {{  $item['name']  }}
                            </td>
                            <td class="item-price">
                                <span class="number">${{ number_format($item['price']) ?? 0 }}</span>
                            </td>
                            <td class="total-price text-right">
                                <span class="number">${{ number_format($item['price']) }}</span>
                            </td>
                        </tr>
                    @endforeach

                    <tr class="tr-last">
                        <td class="cart_item"></td>
                        <td class="cart_item"></td>
                        <td class="item-title"></td>
                        <td class="item-qty">
                            <b>{{ __('Tổng tiền') }}</b>
                        </td>
                        <td class="total-price sum-price text-right">
                            <span class="total">
                                <b class="number">${{ number_format(Session::get('totalProduct')) ?? 0 }}</b>
                            </span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </form>
    <div class="text-right">
        <a href="{{ route('checkout') }}" class="btn btn-danger btn-checkout">{{ __('Đặt ngay') }}</a>
    </div>
@else
    <div class="text-center">
        <img src="{{ asset('/images/img_empty.png') }}" style="max-width: 200px" alt="">
        <p class="cart-empty">{{ __('Giỏ hàng của bạn trống!') }}</p>
    </div>
@endif
