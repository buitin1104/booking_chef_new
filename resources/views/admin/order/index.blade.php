@extends('admin.layouts.master')

@section('title') Danh sách đơn hàng @endsection

@section('content')
    <div class="content-wrapper">
        <div class="page-header">
            <h3 class="page-title">
              <span class="page-title-icon bg-gradient-primary text-white mr-2">
                <i class="fa fa-shopping-cart"></i>
              </span>
                Danh sách đơn hàng
            </h3>
        </div>

        <div class="row">
            <div class="col-md-12">
                <div class="card-box">
                    <div class="row">
                        <div class="col-md-9">
                            <form action="{{ route('admin.order.index') }}" method="GET" class="form-horizontal">
                                <div class="form-group mb-0 row">
                                    <div class="col-md-4">
                                        <input type="text" name="keyword" class="form-control" placeholder="Từ khóa" value="{{ request()->keyword }}">
                                    </div>

                                    <div class="col-md-4">
                                        <button type="submit" class="btn btn-success">
                                            <i class="fa fa-search"></i>
                                            <span>Tìm kiếm</span>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-12">
                <div class="card-box">
                    <div class="table-responsive">
                        <table class="table table-hover">
                            <thead>
                            <tr>
                                <th>Mã đặt</th>
                                <th>Thông tin khách hàng</th>
                                <th style="width: 230px">Đầu bếp</th>
                                <th>Tổng tiền</th>
                                <th style="width: 110px">Trạng thái</th>
                                <th style="min-width: 100px">Ngày đặt</th>
                                <th style="width: 180px">Hành động</th>
                            </tr>
                            </thead>
                            <tbody>
                            @foreach ($result as $item)
                                <tr>
                                    <td>
                                        <a href="javascript:void(0)">#{{ $item->code }}</a>
                                    </td>
                                    <td>
                                        <p>
                                            <b>Họ tên:</b>
                                            <span>{{ $item->user->name }}</span>
                                        </p>
                                        <p>
                                            <b>Email: </b>
                                            <span>{{ $item->user->email }}</span>
                                        </p>
                                        <p>
                                            <b>Số điện thoại: </b>
                                            <span>{{ $item->user->detail ? $item->user->detail->phone : '' }}</span>
                                        </p>
                                        <p>
                                            <b>Địa chỉ: </b>
                                            <span>{{ $item->user->detail ? $item->user->detail->address : '' }}</span>
                                        </p>
                                    </td>
                                    <td>
                                        <ol>
                                            @foreach ($item->chefs as $product)
                                                <li style="color: #388afa">
                                                    {{ $product->name }}
                                                </li>
                                            @endforeach
                                        </ol>
                                    </td>
                                    <td>
                                        ${{ number_format($item->total) }}
                                    </td>
                                    <td>
                                        @if ($item->status === 'order')
                                            <label class="label label-warning">Đặt hàng</label>
                                        @elseif ($item->status === 'cancel')
                                            <label class="label label-danger">Đã hủy</label>
                                        @elseif ($item->status === 'confirm')
                                            <label class="label label-primary">Đã duyệt</label>
                                        @else
                                            <label class="label label-success">Hoàn thành</label>
                                        @endif
                                    </td>
                                    <td>{{ date('d/m/Y', strtotime($item->created_at)) }}</td>
                                    <td style="text-align: center">
                                        <a href="{{ route('admin.order.edit', $item->id) }}" style="font-size: 12px" class="btn btn-primary text-white btn-edit">
                                            <i class="fa fa-pencil"></i>
                                            <span>Chi tiết</span>
                                        </a>
                                    </td>
                                </tr>
                            @endforeach
                            </tbody>
                        </table>
                        {{-- {{ $result->appends(['keyword' => $keyword])->links() }} --}}
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
