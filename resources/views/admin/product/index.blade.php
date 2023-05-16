@extends('admin.layouts.master')

@section('content')
    <div class="content-wrapper">
        <div class="page-header">
            <h3 class="page-title">
              <span class="page-title-icon bg-gradient-primary text-white mr-2">
                <i class="fa fa-product-hunt"></i>
              </span>
                Danh sách món ăn
            </h3>
        </div>

        <div class="row">
            <div class="col-md-12">
                <div class="card-box">
                    <div class="row">
                        <div class="col-md-9">
                            <form action="{{ route('admin.product.index') }}" method="GET" class="form-horizontal">
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
                        <div class="col-md-3 text-right">
                            <a href="{{ route('admin.product.create') }}" class="btn btn-success">
                                <i class="fa fa-plus"></i>
                                <span>Tạo mới</span>
                            </a>
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
                                    <th>ID</th>
                                    <th>Hình ảnh</th>
                                    <th style="width: 210px">Tiêu đề</th>
                                    <th>Giá bán</th>
                                    <th>Giảm giá</th>
                                    <th>Số lượng</th>
                                    <th>Trạng thái</th>
                                    <th style="width: 180px">Hành động</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach($result as $item)
                                    <tr>
                                        <td>{{ $item->id }}</td>
                                        <td>
                                            @if ($item->product_images->count() > 0)
                                                <img
                                                    src="{{ $item->product_images[0]->url}}"
                                                    alt="image not found"
                                                    class="image-preview"
                                                >
                                            @else
                                                <img src="{{ asset('/images/placeholder.png') }}" alt="image not found" class="image-preview">
                                            @endif
                                        </td>
                                        <td>
                                            {{-- <a href="{{ route('product.detail', [
                                                    'slug' => $item->slug,
                                                    'id' => $item->id
                                                ]) }}" target="_blank">{{ $item->name }}</a> --}}
                                            <a>{{ $item->name }}</a>
                                        </td>
                                        <td>{{ number_format($item->price, 2) }} VNĐ</td>
                                        <td>{{ number_format($item->sale_price, 2) }} VNĐ</td>
                                        <td>{{ $item->quantity }}</td>
                                        <td>
                                            @if($item->status === 'publish')
                                                <label class="label label-success">Công khai</label>
                                            @else
                                                <label class="label label-danger">Riêng tư</label>
                                            @endif
                                        </td>
                                        <td>
                                            <a href="{{ route('admin.product.edit', $item->id) }}" class="btn btn-warning text-white btn-edit">
                                                <i class="fa fa-pencil"></i>
                                                <span>Sửa</span>
                                            </a>
                                            <a href="{{ route('admin.product.delete', $item->id) }}" class="btn btn-danger text-white btn-delete">
                                                <i class="fa fa-trash"></i>
                                                <span>Xóa</span>
                                            </a>
                                        </td>
                                    </tr>
                                @endforeach
                            </tbody>
                        </table>
                        {{ $result->appends(['keyword' => $keyword])->links() }}
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection

