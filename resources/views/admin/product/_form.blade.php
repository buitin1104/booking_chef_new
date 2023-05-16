{!! csrf_field() !!}
<div class="row">
    <div class="col-md-9">
        <div class="card-box">
            @include('admin.includes.form-title', ['title_name' => 'Tên Món ăn'])

            <div class="row box-input-common">
                <div class="col-md-4">
                    <div class="form-group">
                        <label for="price">{{ __('Giá') }} <span class="required">*</span></label>
                        <input
                            type="text"
                            id="price"
                            class="form-control form-control-custom input-number mask-money"
                            name="price"
                            value="{{ $dataEdit->price ?? old('price', '') }}"
                            required
                        >
                        {!! $errors->first('price', '<span class="help-block error">:message</span>') !!}
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="form-group">
                        <label for="sale_price">{{ __('Giá giảm') }}</label>
                        <input
                            type="text"
                            id="sale_price"
                            class="form-control form-control-custom input-number mask-money"
                            name="sale_price"
                            value="{{ $dataEdit->sale_price ?? old('sale_price', '') }}"
                        >
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="form-group">
                        <label for="quantity">{{ __('Số lượng') }} <span class="required">*</span></label>
                        <input
                            type="number"
                            id="quantity"
                            class="form-control form-control-custom input-number"
                            name="quantity"
                            min="0"
                            value="{{ $dataEdit->quantity ?? old('quantity', '') }}"
                            required
                        >
                        {!! $errors->first('quantity', '<span class="help-block error">:message</span>') !!}
                    </div>
                </div>
            </div>
        </div>

        <div class="card-box box-render-image-common">
            <div class="form-group product-avatar">
                <label class="mb-0">{{ __('Hình ảnh') }} </label>
                {!! $errors->first('images', '<span class="help-block error">:message</span>') !!}
                <div class="upload-list-img" id="uploadListImg">
                    @php
                        $images = old('images',  $product_images ?? []);
                    @endphp
                    @foreach ($images as $item)
                        <div class="item">
                            <img class="img-thumbnail" src="{{ $item }}">
                            <input type="hidden" name="images[]" value="{{ $item }}">
                            <span onclick="removeImgUpload(this)" class="remove-img">
                                <i class="fa fa-times"></i><span></span>
                            </span>
                        </div>
                    @endforeach
                </div>
                <div class="text-center">
                    <a class="btn-choose-image-produce" href="javascript:void(0)" onclick="initMediaDiv('uploadListImg')"><b>{{ __('Chọn ảnh') }}</b></a>
                </div>
            </div>
        </div>

        <div class="card-box">
            @include('admin.includes.form-content', ['contentTitle' => __('Mô tả')])
        </div>
    </div>

    <div class="col-md-3">
        <div class="card-box">
            @include('admin.includes.form-action', ['routeIndex' => route('admin.product.index')])
        </div>

        <div class="card-box">
            @include('admin.includes.form-status')
        </div>

        <div class="card-box widget-category">
            <div class="widget__title">
                <label>{{ __('Đầu bếp') }}</label>
            </div>
            <div class="widget__body">
                <select name="chef_id" id="chef" class="form-control">
                    <option value=""></option>
                    @foreach ($chefs as $chef)
                        <option
                            value="{{ $chef->id }}"
                            @if ($routeType === 'edit' && $dataEdit->chef_id == $chef->id)
                                selected
                            @endif
                        >{{ $chef->name }}</option>
                    @endforeach
                </select>
                {!! $errors->first('chef_id', '<span class="help-block error">:message</span>') !!}
            </div>
        </div>
    </div>
</div>

@include('commons.media', ['page' => 'product'])

@section('script')
    <script src="{{ asset('plugins/jquery-mask/jquery.mask.min.js') }}"></script>

    <script>
        $('.mask-money').mask('000,000,000,000,000', {reverse: true});

        $(".form-product").validate({
            rules: {
                name: "required",
                slug: "required",
                price: "required",
                quantity: "required",
            },
            messages: {
                name: {required: "Trường này không được để trống"},
                slug: {required: "Trường này không được để trống"},
                price: {required: "Trường này không được để trống"},
                quantity: {required: "Trường này không được để trống"},
            }
        });
    </script>
@endsection
