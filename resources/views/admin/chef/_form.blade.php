{!! csrf_field() !!}
<div class="row">
    <div class="col-md-9">
        <div class="card-box">
            <div class="form-group">
                <label>
                    Họ tên <span class="required">*</span>
                </label>
                <input type="text" id="name" name="name" value="{{ old('name', $dataEdit->name ?? null) }}" class="form-control" required>
                {!! $errors->first('name', '<span class="help-block error">:message</span>') !!}
            </div>
            <div class="form-group">
                <label>
                    Email <span class="required">*</span>
                </label>
                <input type="email" name="email" value="{{ old('email', $dataEdit->email ?? null) }}" class="form-control" required>
                {!! $errors->first('email', '<span class="help-block error">:message</span>') !!}
            </div>
            <div class="form-group">
                <label>
                    Số điện thoại <span class="required">*</span>
                </label>
                <input type="text" name="phone" value="{{ old('phone', $dataEdit->phone ?? null) }}" class="form-control" required>
                {!! $errors->first('phone', '<span class="help-block error">:message</span>') !!}
            </div>
            <div class="form-group">
                <label>
                    Địa chỉ
                </label>
                <input type="text" name="address" value="{{ old('address', $dataEdit->address ?? null) }}" class="form-control">
                {!! $errors->first('address', '<span class="help-block error">:message</span>') !!}
            </div>
            {{-- <div class="form-group">
                <label>
                    Mật khẩu
                </label>
                <input type="password" name="password" value="{{ old('password') }}" class="form-control">
                {!! $errors->first('password', '<span class="help-block error">:message</span>') !!}
            </div> --}}
        </div>
    </div>

    <div class="col-md-3">
        <div class="card-box">
            @include('admin.includes.form-action', ['routeIndex' => route('admin.chef.index')])
        </div>

        <div class="form-group">
            <label>
                Số năm kinh nghiệm <span class="required">*</span>
            </label>
            <input type="number" name="experience_year" value="{{ old('experience_year', $dataEdit->experience_year ?? null) }}" class="form-control" required>
            {!! $errors->first('experience_year', '<span class="help-block error">:message</span>') !!}
        </div>

        <div class="form-group">
            <label>
                Đơn giá ($) <span class="required">*</span>
            </label>
            <input type="string" name="price" value="{{ old('price', $dataEdit->price ?? null) }}" class="form-control input-number mask-money" required>
            {!! $errors->first('price', '<span class="help-block error">:message</span>') !!}
        </div>

        <div class="card-box">
            @include('admin.includes.box-avatar')
        </div>
    </div>
</div>

@include('commons.media')

@section('script')
    <script src="{{ asset('plugins/jquery-mask/jquery.mask.min.js') }}"></script>

    <script>
        $('.mask-money').mask('000,000,000,000,000', {reverse: true});

        $(".form-chef").validate({
            rules: {
                name: "required",
                email: "required",
                phone: "required",
                experience_year: "required",
                price: "required",
            },
            messages: {
                name: {required: "Trường này không được để trống"},
                email: {required: "Trường này không được để trống"},
                phone: {required: "Trường này không được để trống"},
                experience_year: {required: "Trường này không được để trống"},
                price: {required: "Trường này không được để trống"},
            }
        });
    </script>
@endsection
