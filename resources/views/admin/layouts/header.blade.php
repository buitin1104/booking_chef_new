<!-- HEADER -->
<nav class="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
    <div class="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
        <a class="navbar-brand brand-logo" href="#">
            <h4>
                <img src="{{ Vite::asset('resources/images/IMG/logo.png') }}" alt="">
            </h4>
        </a>
        <a class="navbar-brand brand-logo-mini" href="#">
            <h4>
                <img src="{{ Vite::asset('resources/images/IMG/logo.png') }}" alt="">
            </h4>
        </a>
    </div>
    <div class="navbar-menu-wrapper d-flex align-items-stretch">
        <ul class="navbar-nav">
            <li>
                <a href="{{ route('home') }}" style="color: #000; text-decoration: none; font-size: 14px" target="_blank">
                    <i class="fa fa-globe"></i>
                    View website
                </a>
            </li>
        </ul>
        <ul class="navbar-nav navbar-nav-right">
            <li class="nav-item nav-profile dropdown">
                <a class="nav-link dropdown-toggle" id="profileDropdown" href="#" data-toggle="dropdown" aria-expanded="false">
                    <div class="nav-profile-img">
                        <img src="{{ asset(auth('admin')->user()->avatar ?? 'modules/admin/images/default.png') }}" alt="image">
                        <span class="availability-status online"></span>
                    </div>
                    <div class="nav-profile-text">
                        <p class="mb-1 text-black">{{ auth('admin')->user()->name }}</p>
                    </div>
                </a>
                <div class="dropdown-menu navbar-dropdown" aria-labelledby="profileDropdown">
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="{{ route('admin.logout') }}">
                        <i class="mdi mdi-power mr-2 text-primary"></i>
                        Đăng xuất
                    </a>
                </div>
            </li>
        </ul>
        <button id="navbar-toggler" class="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
            <span class="mdi mdi-menu"></span>
        </button>
    </div>
</nav>
<!-- END HEADER -->
