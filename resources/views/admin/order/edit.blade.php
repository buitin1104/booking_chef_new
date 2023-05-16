@extends('admin.layouts.master')

@section('title') Chi tiết @endsection

@section('content')
    <div class="content-wrapper">
        <div class="page-header">
            <h3 class="page-title">
              <span class="page-title-icon bg-gradient-primary text-white mr-2">
                <i class="fa fa-shopping-cart"></i>
              </span>
                Chi tiết
            </h3>
        </div>

        <div class="row">
            <div class="col-md-9">
                <div class="row">
                    <div class="col-md-8">
                        <div class="card-box min-height-300">
                            <h6 class="title d-flex justify-content-between">
                                <span>Thông tin</span>
                                <div>
                                    Mã đơn:
                                    <span style="color: #ff9800">#{{ $dataEdit->code }}</span>
                                </div>
                            </h6>
                            <table class="table list-product">
                                <tbody>
                                    @foreach ($dataEdit->chefs as $key => $product)
                                        @php
                                            $price = (int)$dataEdit->order_chefs[$key]->price;
                                        @endphp
                                        <tr>
                                            <td class="td-image">
                                                <div class="image">
                                                    <img src="{{ asset($product->avatar) }}" alt="" class="w-100">
                                                </div>
                                            </td>
                                            <td class="td-title">
                                                <div class="p-title">
                                                    <a href="javascript:void(0)">{{ $product->name }}</a>
                                                </div>
                                            </td>
                                            <td class="td-price">{{ number_format($price) }} đ</td>
                                            <td class="td-quantity">x</td>
                                            <td class="td-total">{{ number_format($price) }} đ</td>
                                        </tr>
                                    @endforeach
                                    <tr>
                                        <td colspan="5" class="text-right">Tổng tiền</td>
                                        <td class="td-total">{{ number_format($dataEdit->total) }} đ</td>
                                    </tr>
                                    <tr>
                                        <td colspan="5" class="text-right">Phí dịch vụ</td>
                                        <td class="td-total">
                                            $0
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="5" class="text-right">Tổng tiền thanh toán</td>
                                        @php
                                            $total = (int)$dataEdit->total;
                                        @endphp
                                        <td class="td-total">{{ number_format($total) }} đ</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card-box min-height-300">
                            <h6 class="title">Thông tin khách hàng</h6>
                            <p style="font-size: 13px"><b>Họ và tên:</b> {{ $dataEdit->user->name ?? '' }}</p>
                            <p style="font-size: 13px"><b>Email:</b> {{ $dataEdit->user->email ?? '' }}</p>
                            <p style="font-size: 13px"><b>Số điện thoại:</b> {{ $dataEdit->user->detail->phone ?? '' }}</p>
                            <p style="font-size: 13px"><b>Địa chỉ nhận hàng:</b> {{ $dataEdit->user->detail->address ?? '' }}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-md-3">
                <div class="card-box min-height-300">
                    <h6 class="title">Trạng thái đơn hàng</h6>
                    <form action="{{ route('admin.order.update', $dataEdit->id) }}" method="POST">
                        @csrf
                        @foreach ($orderStatus as $key => $title)
                            <label class="label-radio-custom">
                                <input type="radio" class="hrv-radio" @if($dataEdit->status == $key) checked @endif name="status" value="{{ $key }}">
                                <span>{{ $title }}</span>
                            </label> <br>
                        @endforeach
                        @if ($dataEdit->status === 'order' || $dataEdit->status === 'confirm')
                            <button type="submit" class="btn btn-success mt-3">Cập nhật</button>
                        @endif
                        @if ($dataEdit->status === 'cancel')
                            <div class="form-group mt-3">
                                <label>Lý do:</label>
                                <input type="text" name="note" value="{{ $dataEdit->note }}" class="form-control">
                            </div>
                        @endif
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection
