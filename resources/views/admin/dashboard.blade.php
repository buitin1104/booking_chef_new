@extends('admin.layouts.master')

@section('content')
    <div class="content-wrapper">
        <div class="row">
            <div class="col-12">
                </span>
            </div>
        </div>
        <div class="page-header">
            <h3 class="page-title">
              <span class="page-title-icon bg-gradient-primary text-white mr-2">
                <i class="mdi mdi-home"></i>
              </span>
                Trang quản trị
            </h3>
            <nav aria-label="breadcrumb">
                <ul class="breadcrumb">
                    <li class="breadcrumb-item active" aria-current="page">
                        <span></span>Trang quản trị
                        <i class="mdi mdi-alert-circle-outline icon-sm text-primary align-middle"></i>
                    </li>
                </ul>
            </nav>
        </div>
        <div class="row">
            <div class="col-md-4 stretch-card grid-margin">
                <div class="card bg-gradient-danger card-img-holder text-white">
                    <div class="card-body">
                        <img src="{{ asset('modules/admin/images/dashboard/circle.svg') }}" class="card-img-absolute" alt="circle-image"/>
                        <h4 class="font-weight-normal mb-3">Đầu bếp
                            <i class="mdi mdi-chart-line mdi-24px float-right"></i>
                        </h4>
                        <h2 class="mb-5">{{ $totalChef }}</h2>
                    </div>
                </div>
            </div>
            <div class="col-md-4 stretch-card grid-margin">
                <div class="card bg-gradient-info card-img-holder text-white">
                    <div class="card-body">
                        <img src="{{ asset('modules/admin/images/dashboard/circle.svg') }}" class="card-img-absolute" alt="circle-image"/>
                        <h4 class="font-weight-normal mb-3">Món ăn
                            <i class="mdi mdi-bookmark-outline mdi-24px float-right"></i>
                        </h4>
                        <h2 class="mb-5">{{ $totalProduct }}</h2>
                    </div>
                </div>
            </div>
            <div class="col-md-4 stretch-card grid-margin">
                <div class="card bg-gradient-success card-img-holder text-white">
                    <div class="card-body">
                        <img src="{{ asset('modules/admin/images/dashboard/circle.svg') }}" class="card-img-absolute" alt="circle-image"/>
                        <h4 class="font-weight-normal mb-3">Đơn hàng
                            <i class="mdi mdi-diamond mdi-24px float-right"></i>
                        </h4>
                        <h2 class="mb-5">{{ $totalOrder }}</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
