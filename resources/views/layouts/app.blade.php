<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}"/>

    <title>Booking Chef</title>
    <link rel="stylesheet" href="{{ asset('modules/user/css/bootstrap.min.css') }}" type="text/css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"/>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.bunny.net/css?family=Nunito" rel="stylesheet">
    <link rel="stylesheet" href="{{ asset('modules/user/css/custom.css') }}">
    <!-- Scripts -->
    <script src="{{ asset('vendor/js/jquery-3.3.1.min.js') }}"></script>
    <script src="https://cdn.jsdelivr.net/npm/jquery-validation@1.19.3/dist/jquery.validate.js"></script>
    <script src="{{ asset('vendor/js/sweetalert2@10.js') }}"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js" integrity="sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4" crossorigin="anonymous"></script>
    <script src="{{ asset('vendor/js/bootstrap.min.js') }}"></script>
    <script src="{{ asset('modules/user/js/common.js') }}"></script>
    @vite(['resources/sass/app.scss', 'resources/js/app.js'])
</head>
<body>
    <div id="app">
        @include('layouts.header')
        <main id="content-cntr">
            @yield('content')
        </main>
         @include('layouts.footer')
    </div>

    <script>
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
    @yield('script')

    <script src="https://kit.fontawesome.com/e9c9e96563.js" crossorigin="anonymous"></script>
</body>
</html>
