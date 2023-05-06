<header id="header-cntr">
    <div class="header-box">
        <div class="logo-box">
            <a href="{{ route('home') }}" class="logo-inner">
                <img src="{{ Vite::asset('resources/images/IMG/logo.png') }}" alt="" class="logo">
            </a>
        </div>
        <div class="search-box">
            <div class="input-group mb-0">
                <input type="text" class="form-control" placeholder="Tim kiem" name="search">
                <div class="input-group-append">
                    <button class="btn btn-outline-success" type="button">
                        <i class="fas fa-search"></i>
                    </button>
                </div>
            </div>
        </div>
        <div class="menu-box">
            <ul class="nav-menu">
                <li class="nav-menu__item">
                    <a class="active" href="{{ route('home') }}">Home</a>
                </li>
                <li class="nav-menu__item">
                    <a href="{{ route('shop') }}">Shop</a>
                </li>
                <li class="nav-menu__item">
                    <a href="{{ route('blog') }}">Blog</a>
                </li>
                <li class="nav-menu__item">
                    <a href="">About</a>
                </li>
                <li class="nav-menu__item">
                    <a href="">Contact</a>
                </li>

                @guest
                    @if (Route::has('login'))
                        <li class="nav-menu__item">
                            <a href="{{ route('login') }}">Dang nhap</a>
                        </li>
                    @endif

                    @if (Route::has('register'))
                        <li class="nav-menu__item">
                            <a href="{{ route('register') }}">dang ki</a>
                        </li>
                    @endif
                @else
                    <li class="nav-menu__item">
                        <a href="#">
                            {{ Auth::user()->name }}
                        </a>
                    </li>
                    <li class="nav-menu__item">
                        <a href="{{ route('logout') }}"
                            onclick="event.preventDefault();
                                            document.getElementById('logout-form').submit();">
                            Log out
                        </a>

                        <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                            @csrf
                        </form>
                    </li>
                @endguest
                <li class="nav-menu__item">
                    <a href="#">
                        <i class="fa-solid fa-bag-shopping"></i>
                    </a>
                </li>
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
