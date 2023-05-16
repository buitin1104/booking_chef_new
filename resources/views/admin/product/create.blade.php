@extends('admin.layouts.master')

@section('content')
    <div class="content-wrapper">
        <div class="page-header">
            <h3 class="page-title">
              <span class="page-title-icon bg-gradient-primary text-white mr-2">
                <i class="fa fa-product-hunt"></i>
              </span>
                Thêm mới món ăn
            </h3>
        </div>

        <form class="form-product" action="{{ route('admin.product.store') }}" method="POST" novalidate>
            @include('admin.product._form', ['routeType' => 'create'])
        </form>
    </div>
@endsection
