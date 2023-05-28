<header id="header-cntr">
    <div class="header-box">
        <div class="logo-box">
            <a href="{{ route('home') }}" class="logo-inner">
                <img src="{{ Vite::asset('resources/images/IMG/logo.png') }}" alt="" class="logo">
            </a>
        </div>
        <div class="search-box">
            <form action="{{ route('chef') }}" method="GET" class="input-group mb-0">
                <input type="text" class="form-control" value="{{ old('tu-khoa', request()->get('tu-khoa')) }}" placeholder="Tim Kiếm" name="tu-khoa">

                <div class="input-group-append">
                    <button class="btn btn-outline-success" type="button">
                        <i class="fas fa-search"></i>
                    </button>
                </div>
            </form>
        </div>
        <div class="menu-box">
            <ul class="nav-menu">
                <li class="nav-menu__item">
                    <a class="active" href="{{ route('home') }}">Trang chủ</a>
                </li>
                <li class="nav-menu__item">
                    <a href="{{ route('chef') }}">Đầu bếp</a>
                </li>
                <li class="nav-menu__item">
                    <a href="{{ route('blog') }}">Tin tức</a>
                </li>
                <li class="nav-menu__item">
                    <a href="{{ route('about') }}">Về chúng tôi</a>
                </li>

                <li class="nav-menu__item">
                    <a href="{{ route('contact') }}">Liên hệ</a>
                </li>

                <li class="nav-menu__item">
                    <a href="{{ route('cart.index') }}" class="cart-menu">
                        <span class="countProduct">{{ Session::get('countProduct') ? Session::get('countProduct') : 0 }}</span>
                        <span>Giỏ hàng</span>
                    </a>
                </li>

                @if (auth()->user())
                    <div class="dropdown dropdown-user">
                        <button type="button" class="btn dropdown-toggle" data-toggle="dropdown">
                            {{ Auth::user()->name }}
                        </button>
                        <div class="dropdown-menu">
                            @if (auth()->user()->role === 1)
                                <a class="dropdown-item" href="{{ route('admin.dashboard') }}">Trang quản trị</a>
                            @endif
                            <a class="dropdown-item" href="{{ route('order.index') }}">Lịch sử</a>
                            <a class="dropdown-item" href="{{ route('logout') }}">Đăng xuất</a>
                        </div>
                    </div>
                @else
                    <div class="dropdown dropdown-user">
                        <button type="button" class="btn dropdown-toggle" data-toggle="dropdown">
                            Tài khoản
                        </button>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="{{ route('register') }}">Đăng ký</a>
                            <a class="dropdown-item" href="{{ route('login') }}">Đăng nhập</a>
                        </div>
                    </div>
                @endif
            </ul>

        </div>
    </div>
</header>

<!-- <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
    <div class="container">
        <a class="navbar-brand" href="{{ url('/') }}">
            {{ config('app.name', 'Laravel') }}
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto">

            </ul>

            <ul class="navbar-nav ms-auto">
                @guest
                    @if (Route::has('login'))
                        <li class="nav-item">
                            <a class="nav-link" href="{{ route('login') }}">{{ __('Login') }}</a>
                        </li>
                    @endif

                    @if (Route::has('register'))
                        <li class="nav-item">
                            <a class="nav-link" href="{{ route('register') }}">{{ __('Register') }}</a>
                        </li>
                    @endif
                @else
                    <li class="nav-item dropdown">
                        <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                            {{ Auth::user()->name }}
                        </a>

                        <div class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="{{ route('logout') }}"
                                onclick="event.preventDefault();
                                                document.getElementById('logout-form').submit();">
                                {{ __('Logout') }}
                            </a>

                            <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                                @csrf
                            </form>
                        </div>
                    </li>
                @endguest
            </ul>
        </div>
    </div>
</nav> -->
