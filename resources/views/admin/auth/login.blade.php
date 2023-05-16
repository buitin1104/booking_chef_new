
<!DOCTYPE html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Admin</title>
    <link rel="stylesheet" href="{{ asset('modules/admin/lib/iconfonts/mdi/css/materialdesignicons.min.css') }}">
    <link rel="stylesheet" href="{{ asset('modules/admin/css/vendor.bundle.base.css') }}">
    <link rel="stylesheet" href="{{ asset('modules/admin/css/style.css') }}">
</head>

<body>
<div class="container-scroller">
    <div class="container-fluid page-body-wrapper full-page-wrapper">
        <div class="content-wrapper d-flex align-items-center auth">
            <div class="row w-100">
                <div class="col-lg-4 mx-auto">
                    <div class="auth-form-light text-left p-5">
                        <h4>Xin chào!</h4>
                        <h6 class="font-weight-light">Đăng nhập để tiếp tục</h6>
                        @if(\Session::has('alert-danger'))
                            <div class="alert alert-danger">
                                {{ \Session::get('alert-danger') }}
                            </div>
                        @endif
                        <form class="pt-3" action="{{ route('admin.login') }}" method="post">
                            @csrf
                            <div class="form-group">
                                <input type="email" name="email" class="form-control form-control-lg" placeholder="example@mail.com">
                            </div>
                            <div class="form-group">
                                <input type="password" name="password" class="form-control form-control-lg" placeholder="******">
                            </div>
                            <div class="mt-3">
                                <button type="submit" class="btn btn-block btn-gradient-primary btn-lg font-weight-medium auth-form-btn">ĐĂNG NHẬP</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<script src="../../vendors/js/vendor.bundle.base.js"></script>
<script src="../../js/misc.js"></script>
</body>
</html>
