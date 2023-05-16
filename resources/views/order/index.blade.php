@extends('layouts.app')

@section('title') Đơn hàng @endsection

@section('content')
    <div class="container list-order-page">
        <div class="row mb-20 mt-10">
            <div class="col-md-12">
                <ul class="order-status">
                    <li class="order active" onclick="getProductByStatus('order')">
                        Đặt hàng (<span class="count">{{ $countProduct['order'] }}</span>)
                    </li>
                    <li class="confirm" onclick="getProductByStatus('confirm')">
                        Đã xác nhận (<span class="count">{{ $countProduct['confirm'] }}</span>)
                    </li>
                    <li class="success" onclick="getProductByStatus('success')">
                        Đã nhận hàng (<span class="count">{{ $countProduct['success'] }}</span>)
                    </li>
                    <li class="cancel" onclick="getProductByStatus('cancel')">
                        Hủy đơn (<span class="count">{{ $countProduct['cancel'] }}</span>)
                    </li>
                    <li class="all" onclick="getProductByStatus('all')">
                        Tất cả (<span class="count">{{ $countProduct['all'] }}</span>)
                    </li>
                </ul>
                <div class="search-box-order">
                    <input
                        type="text"
                        name="keyword"
                        id="input-keyword"
                        class="form-control-custom"
                        placeholder="Tìm kiếm theo từ khóa, mã đơn hàng"
                    >
                    <button type="button" class="btn-search btn-search-order" data-status="order">
                        <i class="fa fa-search"></i>
                    </button>
                </div>
                <div class="cart-page-area">
                    @include('order.includes.order-histories')
                </div>
            </div>
        </div>
    </div>
@endsection

@section('script')
    <script src="{{ asset('modules/user/js/order.js') }}"></script>
    <script>
        function confirmCancelOrder (code, oldStatus) {
            Swal.fire({
                title: 'Lý do bạn huỷ đơn?',
                input: 'text',
                inputAttributes: {
                    autocapitalize: 'off'
                },
                showCancelButton: true,
                confirmButtonColor: '#30d6d2',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Tiếp tục',
                cancelButtonText: 'Huỷ',
                showLoaderOnConfirm: true,
                preConfirm: (text) => {
                    $.ajax({
                        url: '/order/' + code + '/cancel',
                        method: 'POST',
                        data: {
                            'oldStatus': oldStatus,
                            'newStatus': 'cancel',
                            'note': text
                        },
                        success: function (response) {
                            if (response.code === 200) {
                                let obj = response.countProduct;
                                $('.cart-page-area').html(response.html);
                                Object.keys(obj).forEach(function (key) {
                                    $(`li.${key}`).find('.count').text(obj[key]);
                                });
                                Toast.fire({
                                    icon: 'success',
                                    title: 'Hủy đơn thành công'
                                });
                            }
                        },
                        error: function (err) {
                            console.log(err)
                        }
                    })
                },
            })
        }
    </script>
@endsection
