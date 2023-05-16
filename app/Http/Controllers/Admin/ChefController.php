<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Chef;
use App\Http\Requests\Admin\CreateChefRequest;
use App\Http\Requests\Admin\UpdateChefRequest;

class ChefController extends Controller
{
    private $chef;

    public function __construct(Chef $chef) {
        $this->chef = $chef;
    }

    public function index(Request $request) {
        $query = $this->chef->query();

        if ($request->has('keyword')) {
            $query = $query->where('name', 'like', '%'.$request->keyword.'%');
        }

        $result = $query->paginate(10);

        $viewData = [
            'result' => $result,
            'keyword' => $request->keyword,
        ];

        return view("admin.chef.index", $viewData);
    }

    public function create() {
        return view('admin.chef.create');
    }

    public function store(CreateChefRequest $request) {
        $data = $request->all();
        unset($data['_token']);
        unset($data['value-id']);

        if (isset($data['password']) && $data['password']) {
            $data = array_merge($data, [
                'password' => $data['password']
            ]);
        }

        $created = $this->chef->create($data);
        if ($created) {
            return redirect()->route('admin.chef.index')->with('alert-success', __('Tạo thành công'));
        }
        return redirect()->back()->with('alert-danger', __('Tạo thất bại'));
    }

    public function edit($id) {
        $dataEdit = $this->chef->find($id);

        $viewData = [
            'dataEdit' => $dataEdit,
        ];
        return view('admin.chef.edit', $viewData);
    }

    public function update(UpdateChefRequest $request, $id) {
        $data = $request->all();
        unset($data['_token']);
        unset($data['value-id']);

        $user = $this->chef->find($id);
        if (isset($data['password']) && $data['password']) {
            $data = array_merge($data, [
                'password' => bcrypt($data['password'])
            ]);
        } else {
            unset($data['password']);
        }
        $updated = $user->update($data);
        if ($updated) {
            return redirect()->route('admin.chef.index')->with('alert-success', __('Cập nhật thành công'));
        }
        return redirect()->back()->with('alert-danger', __('Cập nhật thất bại'));
    }

    public function delete($id) {
        $user = $this->chef->findOrFail($id);

        $deleted = $user->delete();
        if ($deleted) {
            return redirect()->back()->with('alert-success', __('Xóa thành công'));
        } else {
            return redirect()->back()->with('alert-danger', __('Xoá thất bại'));
        }
    }
}
