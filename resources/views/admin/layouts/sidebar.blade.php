<!-- SIDEBAR -->
<nav class="sidebar sidebar-offcanvas" id="sidebar">
    <ul class="nav">
        <li class="nav-item nav-profile">
            <a href="#" class="nav-link">
                <div class="nav-profile-image">
                    <img src="{{ asset(auth('admin')->user()->avatar ?? 'modules/admin/images/default.png') }}" alt="profile">
                    <span class="login-status online"></span>
                </div>
                <div class="nav-profile-text d-flex flex-column">
                    <span class="font-weight-bold mb-2">{{ auth('admin')->user()->name }}</span>
                </div>
                <i class="mdi mdi-bookmark-check text-success nav-profile-badge"></i>
            </a>
        </li>
        <li class="nav-item {{ request()->segment(2) === 'dashboard' ? 'active' : '' }}">
            <a class="nav-link" href="{{ route('admin.dashboard') }}">
                <span class="menu-title">Trang quản trị</span>
                <i class="mdi mdi-home menu-icon"></i>
            </a>
        </li>
        <li class="nav-item {{ request()->segment(2) === 'product' ? 'active' : '' }}">
            <a class="nav-link" href="{{ route('admin.product.index') }}">
                <span class="menu-title">Món ăn</span>
                <i class="fa fa-product-hunt menu-icon"></i>
            </a>
        </li>
        <li class="nav-item {{ request()->segment(2) === 'order' ? 'active' : '' }}">
            <a class="nav-link" href="{{ route('admin.order.index') }}">
                <span class="menu-title">Đơn hàng</span>
                <i class="fa fa-shopping-cart menu-icon"></i>
            </a>
        </li>
        <li class="nav-item {{ request()->segment(2) === 'chef' ? 'active' : '' }}">
            <a class="nav-link" href="{{ route('admin.chef.index') }}">
                <span class="menu-title">Đầu bếp</span>
                <i class="fa fa-users menu-icon"></i>
            </a>
        </li>
    </ul>
</nav>
<!-- END SIDEBAR -->
