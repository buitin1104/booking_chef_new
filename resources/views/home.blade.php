@extends('layouts.app')

@section('content')
<div>
    <!-- <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif
                noi dung trang chu
                </div>
            </div>
        </div>
    </div> -->


    <section id="hero">

    </section>
    <section id="product1" class="section-p1">
        <h2>Chef Service</h2>
        <p>Select the desired chef</p>
        <div class="pro-container">
            @foreach ($chefs as $chef)
                @include('chef.item', [
                    'chef' => $chef
                ])
            @endforeach
        </div>
    </section>
    <section id="banner" class="section-m1">
        <h4>Featured News</h4>
    </section>

    <section id="sm-banner" class="section-p1">
        <div class="banner-box">
            <button class="white">lear more</button>
        </div>
         <div class="banner-box banner-box2">

            <button class="white">lear more</button>
        </div>
    </section>
    <section id="banner3">
        <div class="banner-box">
        </div>
         <div class="banner-box banner-box2">
        </div>
         <div class="banner-box banner-box3">
        </div>
    </section>
    <section id="newsletter" class="section-p1 section-m1" >
        <div class="newstext">
            <!-- <h3>asdadadas</h3>
            <p>hueanhad <span>asddyay</span></p> -->
        </div>
        <div class="form">
            <input type="text" placeholder="email?">
            <button class="nomal">sign up</button>
        </div>
    </section>
</div>
@endsection
