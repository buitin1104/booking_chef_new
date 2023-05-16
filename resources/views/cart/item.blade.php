@php
    $cartItems = (isset($cart) && count($cart) > 0) ? $cart : Session::get('cart');
@endphp
@if ($cartItems)
    <div class="list scroll-box">
        @foreach ($cartItems as $item)
            @php
                $productId = $item['id'];
            @endphp
            <div class="single-cart-item">
                <div class="cart-img">
                    <img src="{{ $item['avatar'] ? $item['avatar'] : '/images/default.png' }}" alt="Avatar not found">
                </div>
                <div class="cart-text">
                    <div class="content">
                        <h5 class="title">
                            {{ $item['name'] }}
                        </h5>
                        <div class="cart-text-btn">
                            <div class="cart-qty">
                                <span class="cart-price">{{ $item['price'] }} đ</span>
                            </div>
                        </div>
                    </div>
                    <button
                        type="button"
                        class="btn-remove-item-cart"
                        onclick="removeProductFromCart({{ $item['id'] }})"
                    >
                        &times;
                    </button>
                </div>
            </div>
        @endforeach
    </div>

    <div class="cart-price-total d-flex justify-content-between">
        <h5>{{ __('Tổng tiền') }} :</h5>
        <h5>
            <span class="total">{{ number_format(Session::get('totalProduct')) ?? 0 }}</span>
            <span>đ</span>
        </h5>
    </div>

    <div class="cart-links d-flex justify-content-between">
        <a class="btn product-cart button-icon flosun-button dark-btn" href="{{ route('cart.index') }}">{{ __('Xem giỏ hàng') }}</a>
        <a class="btn flosun-button secondary-btn rounded-0" href="{{ route('checkout') }}">{{ __('Đặt ngay') }}</a>
    </div>
@else
    <div class="text-center">
        <img src="/images/img_empty.png" alt="" style="max-width: 200px">
        <p class="cart-empty">Giỏ hàng của bạn chưa có sản phẩm!</p>
    </div>
@endif
