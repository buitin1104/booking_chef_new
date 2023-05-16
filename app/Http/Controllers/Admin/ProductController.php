<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\ProductImage;
use App\Models\Chef;
use App\Http\Requests\Admin\ProductCreateRequest;
use App\Http\Requests\Admin\ProductUpdateRequest;
use DB;

class ProductController extends Controller
{
    private $product;
    private $product_images;

    public function __construct(Product $product, ProductImage $product_images)
    {
        $this->product = $product;
        $this->product_images = $product_images;
    }

    const COLUMN_PRODUCT = [
        'id', 'name', 'slug', 'content', 'status', 'is_hot', 'price', 'sale_price', 'quantity'
    ];

    public function index(Request $request) {
        $query = Product::query();

        if ($request->has('keyword')) {
            $query = $query->where('name', 'like', '%'.$request->keyword.'%');
        }

        $query->with('product_images');

        $result = $query->paginate(10);

        $viewData = [
            'result' => $result,
            'keyword' => $request->keyword,
        ];

        return view('admin.product.index', $viewData);
    }

    public function create() {
        $chefs = Chef::all();

        $viewData = [
            'chefs' => $chefs,
            'dataEdit' => '',
        ];
        return view('admin.product.create', $viewData);
    }

    public function store(ProductCreateRequest $request) {
        DB::beginTransaction();
        $data = $request->all();
        unset($data['_token']);
        unset($data['value-id']);

        $params = array_merge($data, [
            'price' => removeComma($data['price']),
            'sale_price' => removeComma($data['sale_price']),
            'quantity' => removeComma($data['quantity']),
        ]);
        $product = Product::create($params);
        if ($product) {
            $this->saveProductCommon($data, $product->id);

            DB::commit();
            return redirect()->route('admin.product.index')->with('alert-success', __('Thêm thành công'));
        } else {
            DB::rollback();
            return redirect()->back()->with('alert-danger', __('Thêm thất bại'));
        }
    }

    public function edit($id) {
        $product = Product::findOrFail($id);
        $chefs = Chef::all();
        $productImages = $this->product_images->where('product_id', $id)->pluck('url');

        $viewData = [
            'dataEdit' => $product,
            'chefs' => $chefs,
            'product_images' => $productImages,
        ];
        return view('admin.product.edit', $viewData);
    }

    public function update(ProductUpdateRequest $request, $id) {
        DB::beginTransaction();
        $data = $request->all();
        unset($data['_token']);
        unset($data['value-id']);
        $product = Product::findOrFail($id);

        $dataUpdate = array_merge($data, [
            'is_hot' => isset($data['is_hot']) ? $data['is_hot'] : NULL,
            'price' => removeComma($data['price']),
            'sale_price' => removeComma($data['sale_price']),
            'quantity' => removeComma($data['quantity']),
        ]);
        $updated = $product->update($dataUpdate);

        if ($updated) {
            $this->saveProductCommon($data, $id);

            DB::commit();

            return redirect()->route('admin.product.index')->with('alert-success', __('Cập nhật thành công'));
        } else {
            DB::rollback();
            return redirect()->back()->with('alert-danger', __('Cập nhật thất bại'));
        }
    }

    public function delete($id) {
        $product = Product::findOrFail($id);
        $deleted = $product->delete();
        if ($deleted) {
            $this->product_images->where('product_id', $id)->delete();

            return redirect()->back()->with('alert-success', __('Xóa thành công'));
        } else {
            return redirect()->back()->with('alert-danger', __('Xoá thất bại'));
        }
    }

    private function saveProductCommon($data, $product_id) {
        $dataImages = [];
        $this->product_images->where('product_id', $product_id)->delete();
        if (isset($data['images']) && count($data['images']) > 0) {
            foreach ($data['images'] as $url) {
                array_push($dataImages, [
                    'product_id' => $product_id,
                    'url' => $url
                ]);
            }
        }
        ProductImage::insert($dataImages);
    }
}
