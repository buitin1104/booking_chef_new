<div class="pro">
    <img src="{{ $chef->avatar ? $chef->avatar : '/images/default.png' }}" alt="Avatar not found">
    <div class="des">
        @if ($chef->review)
            <span>Đầu Bếp {{ $chef->review->rating }} sao</span>
        @else
            <span>Chưa có đánh giá</span>
        @endif

        <h5>{{ $chef->name }}</h5>

        @if ($chef->review)
            <div class="star">
                @for ($i = 1; $i <= $chef->review->rating; $i++)
                    <i class="fas fa-star"></i>
                @endfor
            </div>
        @endif

        <h4>${{ number_format($chef->price, 0) }}</h4>
    </div>
    <a
        href="javascript:void(0)"
        onclick="addChefToCart({{ $chef->id }})"
        class="btn-add-cart"
    ><i class="cart fa-solid fa-bag-shopping"></i></a>
</div>
