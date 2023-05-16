@extends('layouts.app')

@section('content')
<div class="container">
  <div class="profile-page p-4">
    <div class="card mb-4">
      <h4 class="card-header">Thông tin cá nhân</h4>
      <div class="card-body">
        <form action="{{ route('profiles.store') }}" method="post">
          @csrf
          <div class="row">
            <div class="col-md-6">
              <div class="mb-3">
                <label for="">Họ tên</label>
                <input type="text" name="name" class="form-control {{ $errors->has('name') ? 'is-invalid' : '' }}" value="{{ old('name', $user->name) }}">

                @if($errors->has('name'))
                  <div class="invalid-feedback">
                    {{ $errors->first('name') }}
                  </div>
                @enderror
              </div>
            </div>
            <div class="col-md-6">
              <div class="mb-3">
                <label for="">Địa chỉ email</label>
                <input type="email" readonly name="email" class="form-control {{ $errors->has('email') ? 'is-invalid' : '' }}" value="{{ old('email', $user->email) }}">
                @if($errors->has('email'))
                  <div class="invalid-feedback">
                    {{ $errors->first('email') }}
                  </div>
                @enderror
              </div>
            </div>
            <div class="col-md-6">
              <div class="mb-3">
                <label for="">Giới tính</label>
                <select name="gender" id="" class="form-control {{ $errors->has('gender') ? 'is-invalid' : '' }}">
                  <option value="Male" {{ old('gender', data_get($user->detail, 'gender')) == 'Male' ? 'selected' : '' }}>nam</option>
                  <option value="Female" {{ old('gender', data_get($user->detail, 'gender')) == 'Female' ? 'selected' : '' }}>nu</option>
                </select>
                @if($errors->has('gender'))
                  <div class="invalid-feedback">
                    {{ $errors->first('gender') }}
                  </div>
                @enderror
              </div>
            </div>
            <div class="col-md-6">
              <div class="mb-3">
                <label for="">Sinh nhật</label>
                <input type="date" name="birthday" class="form-control {{ $errors->has('birthday') ? 'is-invalid' : '' }}" value="{{ old('birthday', data_get($user->detail, 'birthday') ? data_get($user->detail, 'birthday')->format('Y-m-d') : '' ) }}">
                @if($errors->has('birthday'))
                  <div class="invalid-feedback">
                    {{ $errors->first('birthday') }}
                  </div>
                @enderror
              </div>
            </div>
            <div class="col-md-6">
              <div class="mb-3">
                <label for="">Mật khẩu</label>
                <input type="password" name="password" class="form-control {{ $errors->has('password') ? 'is-invalid' : '' }}">
                @if($errors->has('password'))
                  <div class="invalid-feedback">
                    {{ $errors->first('password') }}
                  </div>
                @enderror
              </div>
            </div>
            <div class="col-md-6">
              <div class="mb-3">
                <label for="">Nhập lại mật khẩu</label>
                <input type="password" name="password_confirmation" class="form-control">
              </div>
            </div>
          </div>
          <div class="text-center mt-4">
            <button class="btn btn-success btn-sm w-auto px-4">Luu</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
@endsection
