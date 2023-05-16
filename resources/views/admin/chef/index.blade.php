@extends('admin.layouts.master')

@section('title') Danh sách đầu bếp @endsection

@section('content')
    <div class="content-wrapper">
        <div class="page-header">
            <h3 class="page-title">
              <span class="page-title-icon bg-gradient-primary text-white mr-2">
                <i class="fa fa-users"></i>
              </span>
                Danh sách đầu bếp
            </h3>
        </div>

        <div class="row">
            <div class="col-md-12">
                <div class="card-box">
                    <div class="row">
                        <div class="col-md-9">
                            <form action="{{ route('admin.chef.index') }}" method="GET" class="form-horizontal">
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
                            <a href="{{ route('admin.chef.create') }}" class="btn btn-success">
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
                                <th>Avatar</th>
                                <th>Tên</th>
                                <th>Email</th>
                                <th>Số điện thoại</th>
                                <th>Số năm kinh nghiệm</th>
                                <th style="width: 180px">Hành động</th>
                            </tr>
                            </thead>
                            <tbody>
                            @foreach ($result as $item)
                                <tr>
                                    <td>{{ $item->id }}</td>
                                    <td>
                                        @if ($item->avatar)
                                            <img
                                                src="{{ $item->avatar }}"
                                                alt="image not found"
                                                class="image-preview"
                                                style="border-radius: 50% !important"
                                            >
                                        @else
                                            <img src="{{ asset('/images/default.png') }}" alt="image not found" class="image-preview">
                                        @endif
                                    </td>
                                    <td>{{ $item->name }}</td>
                                    <td>{{ $item->email }}</td>
                                    <td>{{ $item->phone }}</td>
                                    <td>{{ $item->experience_year }}</td>
                                    <td>
                                        <a href="{{ route('admin.chef.edit', $item->id) }}" class="btn btn-warning text-white btn-edit">
                                            <i class="fa fa-pencil"></i>
                                            <span>Sửa</span>
                                        </a>
                                        <a href="{{ route('admin.chef.delete', $item->id) }}" class="btn btn-danger text-white btn-delete">
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
