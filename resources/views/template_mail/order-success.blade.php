
<div class="complete-order-page">
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <div class="row" style="display: flex; border-bottom: 1px solid #ccc;">
                    <div class="col-md-10">
                        <span style="font-size: 20px; font-weight: bold;">Đơn hàng của bạn đã được đặt thành công</span>
                        <br>
                        <p>Cảm ơn bạn đã lựa chọn chúng tôi!</p>
                    </div>
                </div>
                <div style="border: 1px solid #ccc; border-radius: 4px; min-height: 200px; margin-top: 30px; padding: 5px 10px;">
                    <h5 style="font-size: 17px;">Thông tin khách hàng</h5>
                    <p>Họ tên: <span style="color: #71bed7;">{{ $order->user->name }}</span></p>
                    <p>Số điện thoại: <span style="color: #71bed7;">{{ $order->user->detail ? $order->user->detail->phone : '' }}</span></p>
                    <p>Email: <span style="color: #71bed7;">{{ $order->user->email }}</span></p>
                    <p>
                        Địa chỉ:
                        <span style="color: #71bed7;">
                            {{ $order->user->detail ? $order->user->detail->address : ''}}
                        </span>
                    </p>
                    <p>Trạng thái: <span style="text-transform: uppercase; color: #ff9428;">Đặt hàng</span></p>
                    <p>
                        Phương thức thanh toán:
                        <span style="color: #71bed7;">
                            Thanh toán trực tiếp
                        </span>
                    </p>
                    <p>
                        Tổng tiền: <b style="font-size: 18px">${{ number_format($order['total']) }}</b>
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
