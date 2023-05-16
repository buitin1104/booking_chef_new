
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <title>Admin - @yield('title')</title>
        <meta name="csrf-token" content="{{ csrf_token() }}"/>
        <link rel="stylesheet" href="{{ asset('modules/admin/lib/iconfonts/mdi/css/materialdesignicons.min.css') }}">
        <link rel="stylesheet" href="{{ asset('modules/admin/css/vendor.bundle.base.css') }}">
        <link rel="stylesheet" href="{{ asset('modules/admin/css/style.css') }}">
        <link rel="stylesheet" href="{{ asset('modules/admin/css/sidebar.css') }}">
        <link rel="stylesheet" href="{{ asset('modules/admin/css/common.css') }}">
        @yield('css')
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"/>
        <script src="{{ asset('modules/admin/js/jquery.min.js') }}"></script>
        <script src="{{ asset('modules/admin/js/sweetalert2@10.js') }}"></script>
        <script src="https://cdn.jsdelivr.net/npm/jquery-validation@1.19.3/dist/jquery.validate.js"></script>

        <script>
            const BASE_URL = "{{ url('/') }}";
            const BASE_API_URL = "{{ url('/api') }}";
        </script>
    </head>
    <body>
        <div class="container-scroller">
            @include('admin.layouts.header')

            <div class="container-fluid page-body-wrapper">
                @include('admin.layouts.sidebar')

                <div class="main-panel">
                    @yield('content')
                </div>
            </div>
        </div>

        <script src="{{ asset('/js/bootstrap.min.js') }}"></script>
        <script src="{{ asset('plugins/select2/select2.min.js') }}"></script>
        <script src="{{ asset('modules/admin/js/common.js') }}"></script>

        @yield('script')

        <script type="text/javascript">
            var sidebar = document.getElementById('navbar-toggler');
            var menu = document.getElementById('sidebar');
            sidebar.addEventListener('click',function(){
                menu.classList.toggle('active');
            });

            @if(Session::has('alert-success'))
            Toast.fire({
                icon: 'success',
                title: "{{ Session::get('alert-success') }}"
            })
            @endif

            @if(Session::has('alert-danger'))
            Toast.fire({
                icon: 'error',
                title: "{{ Session::get('alert-danger') }}"
            })
            @endif
        </script>
    </body>
</html>
