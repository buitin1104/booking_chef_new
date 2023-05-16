<?php

use App\Http\Controllers\AboutController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ShopController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\CartController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\AdminAuthController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\MediaController;
use App\Http\Controllers\Admin\OrderController as AdminOrderController;
use App\Http\Controllers\Admin\ProductController as AdminProductController;
use App\Http\Controllers\Admin\ChefController as AdminChefController;
use App\Http\Controllers\ChefController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Auth::routes();


Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/trang-chu', [HomeController::class, 'index'])->name('home');
Route::get('/dau-bep', [ChefController::class, 'index'])->name('chef');
Route::get('/tin-tuc', [BlogController::class, 'index'])->name('blog');
Route::get('/ve-chung-toi',[AboutController::class, 'index'])->name('about');
Route::get('/lien-he',[ContactController::class, 'index'])->name('contact');
Route::get('/checkout', [OrderController::class, 'checkout'])->name('checkout');

// Trang người dùng
Route::group(['middleware' => 'web'], function () {
    Route::get('/logout', [UserController::class, 'logout'])->name('logout');

    Route::group(['prefix' => 'gio-hang'], function () {
        Route::get('/', [CartController::class, 'index'])->name('cart.index'); // danh sách giỏ hàng
        Route::post('/add-to-cart/{id}', [CartController::class, 'addToCart'])->name('cart.add'); // thêm vào giỏ hàng
        Route::post('/update/{product_id}', [CartController::class, 'updateCart'])->name('cart.update'); // cập nhật giỏ hàng
        Route::post('/remove-from-cart/{product_id}', [CartController::class, 'removeFromCart']); // xóa chef khỏi giỏ hàng
    });

    Route::group(['prefix' => 'order'], function () {
        Route::get('/danh-sach', [OrderController::class, 'index'])->name('order.index'); // lịch sử đã đặt hàng
        Route::post('/store', [OrderController::class, 'store'])->name('order.store'); // tạo mới đơn hàng (lưu vào Database)
        Route::post('/get-product-by-type', [OrderController::class, 'getProductByType']); // tìm kiếm đơn hàng theo trạng thái (Menu: Lịch sử)
        Route::get('{code}/success', [OrderController::class, 'orderSuccess'])->name('order.success'); // đặt hàng thành công
        Route::get('/{code}', [OrderController::class, 'detail'])->name('order.detail');
        Route::post('{code}/cancel', [OrderController::class, 'cancel'])->name('order.cancel'); // hủy bỏ đơn hàng từ phía người dùng
    });
});

Route::group(['middleware' => 'auth', 'prefix' => 'profiles', 'as' => 'profiles.'], function () {
    Route::get('/', [ProfileController::class, 'index'])->name('index');
    Route::post('/', [ProfileController::class, 'update'])->name('store');
    Route::post('/change-password', [ProfileController::class, 'changePassword'])->name('changePassword');
});

Route::get('forget-password', [ForgotPasswordController::class, 'showForgetPasswordForm'])->name('forget.password.get');
Route::post('forget-password', [ForgotPasswordController::class, 'submitForgetPasswordForm'])->name('forget.password.post');
Route::get('reset-password/{token}', [ForgotPasswordController::class, 'showResetPasswordForm'])->name('reset.password.get');
Route::post('reset-password', [ForgotPasswordController::class, 'submitResetPasswordForm'])->name('reset.password.post');






// Phần dưới này là cho trang Admin (Quản trị viên)
Route::get('/admin/login', [AdminAuthController::class, 'showLogin'])->name('admin.show-login');
Route::post('/admin/login', [AdminAuthController::class, 'login'])->name('admin.login');

Route::group(['prefix' => 'admin', 'as' => 'admin.', 'middleware' => 'admin'], function () {
    Route::get('/', [DashboardController::class, 'index'])->name('dashboard');
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
    Route::get('/logout', [AdminAuthController::class, 'logout'])->name('logout');

    // Màn hình sản phẩm
    Route::group(['prefix' => 'product'], function () {
        Route::get('/', [AdminProductController::class, 'index'])->name('product.index');

        Route::get('/create', [AdminProductController::class, 'create'])->name('product.create');
        Route::post('/create', [AdminProductController::class, 'store'])->name('product.store');

        Route::get('/edit/{id}', [AdminProductController::class, 'edit'])->name('product.edit');
        Route::post('/update/{id}', [AdminProductController::class, 'update'])->name('product.update');

        Route::get('/delete/{id}', [AdminProductController::class, 'delete'])->name('product.delete');
    });

    // Màn hình đầu bếp
    Route::group(['prefix' => 'chef'], function () {
        Route::get('/', [AdminChefController::class, 'index'])->name('chef.index');

        Route::get('/create', [AdminChefController::class, 'create'])->name('chef.create');
        Route::post('/create', [AdminChefController::class, 'store'])->name('chef.store');

        Route::get('/edit/{id}', [AdminChefController::class, 'edit'])->name('chef.edit');
        Route::post('/update/{id}', [AdminChefController::class, 'update'])->name('chef.update');

        Route::get('/delete/{id}', [AdminChefController::class, 'delete'])->name('chef.delete');
    });

    // Màn hình đơn hàng
    Route::group(['prefix' => 'order'], function () {
        Route::get('/', [AdminOrderController::class, 'index'])->name('order.index');

        Route::get('/edit/{id}', [AdminOrderController::class, 'edit'])->name('order.edit');
        Route::post('/update/{id}', [AdminOrderController::class, 'update'])->name('order.update');
    });
});

Route::group(['prefix' => 'api', 'as' => 'api.'], function () {
    Route::get('/medias', [MediaController::class, 'index'])->name('medias.index');
    Route::post('/medias/upload', [MediaController::class, 'upload'])->name('medias.upload');
    Route::post('/medias/delete', [MediaController::class, 'delete'])->name('medias.delete');
});
