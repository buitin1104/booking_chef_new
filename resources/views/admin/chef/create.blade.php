@extends('admin.layouts.master')

@section('title') Thêm mới tài khoản @endsection

@section('content')
    <div class="content-wrapper">
        <div class="page-header">
            <h3 class="page-title">
              <span class="page-title-icon bg-gradient-primary text-white mr-2">
                <i class="fa fa-users"></i>
              </span>
                Thêm mới tài khoản
            </h3>
        </div>

        <form class="form-chef" action="{{ route('admin.chef.store') }}" method="POST" novalidate>
            @include('admin.chef._form', ['routeType' => 'create'])
        </form>
    </div>
@endsection
