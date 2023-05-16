@section('css')
    <style>
        .media-avatar-preview .img-preview {
            width: 150px;
            margin: 0 auto;
        }

        .media-avatar-preview .img-preview img {
            width: 100%;
        }
    </style>
@endsection

<div class="box-info {{ $errors->has('avatar') ? 'box-error' : '' }}">
    <div class="box-header with-border">
        <label class="box-title">{{ isset($title_name) ? $title_name : __('Avatar') }}</label>
    </div>
    <div class="">
        @php
            if(!empty(old('avatar', $dataEdit->avatar ?? null))) {
                $avatarCheck = true;
            } else {
                $avatarCheck = false;
            }
        @endphp

        @include('commons.avatar', [
            'avatarCheck' => $avatarCheck,
            'avatarKey' => 'avatar',
            'avatarValue' => old('avatar', $dataEdit->avatar ?? null),
        ])
    </div>
</div>

<script src="{{ asset('assets/media/js/fileuploadmulti.js') }}"></script>
<script src="{{ asset('assets/media/js/media.js') }}"></script>