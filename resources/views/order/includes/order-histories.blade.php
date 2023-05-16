@if (count($orders) > 0)
    <div class="list-order-histories">
        @foreach ($orders as $item)
            <div class="item">
                <p class="text-right w-100 mb-0">Mã: <span class="color-red">{{ $item['code'] }}</span></p>
                @foreach ($item['chefs'] as $key => $product)
                    @php
                        $price = (int)$item['order_chefs'][$key]['price'];
                        $product_id = $product['configurable_product_id'] ?? $product['id'];
                    @endphp
                    <div class="product">
                        <div class="image">
                            <img src="{{ $product['avatar'] ? $product['avatar'] : '/images/default.png' }}" alt="Avatar not found">
                        </div>
                        <div class="info">
                            <a href="javascript:void(0)" class="title">
                                <span class="name">{{ $product['name'] }}</span>
                            </a>
                            <span class="mr-10px">
                                Đơn giá:
                                <span class="color-red">
                                    ${{ number_format($price) }}
                                </span>
                            </span>
                            <span class="sub-total">
                                Tổng tiền:
                                <span class="number color-red">
                                    ${{ number_format($price) }}
                                </span>
                            </span>
                        </div>
                    </div>
                @endforeach
                <div class="summery">
                    <div class="sub-summery">
                        <p class="total-product font-size-15">
                            <span class="intro">Thành tiền: </span>
                            <span class="number color-red">${{ number_format($item['total']) }}</span>
                        </p>
                        <p class="fee_ship font-size-15">
                            <span class="intro">Phí dịch vụ:</span>
                            <span class="number color-red">$0</span>
                        </p>
                        <p class="total font-size-17">
                            <span class="intro">Tổng thanh toán:</span>
                            <span class="number color-red">${{ number_format($item['total']) }}</span>
                        </p>
                    </div>
                    <div style="clear: right"></div>
                    @if ($item['status'] == 'order')
                        <a href="javascript:void(0)" onclick="confirmCancelOrder({{ $item['code'] }}, '{{ $item['status'] }}')" class="btn btn-cancel-order">Huỷ đơn hàng</a>
                    @endif
                </div>
            </div>
        @endforeach
    </div>
@else
    <div class="text-center">
        <img src="{{ asset('/images/img_empty.png') }}" alt="" style="max-width: 200px">
        <p>Không có kết quả tương ứng</p>
    </div>
@endif
