@extends('layouts.app')

@section('content')
    <div>
        <section id="page-header">
            <h2>StayHome</h2>
            <p>Save more with coupons & up to <span>30% off!</span></p>
        </section>

        <section id="product1" class="section-p1">
            <div class="pro-container">
                @foreach ($chefs as $chef)
                    @include('chef.item', ['chef' => $chef])
                @endforeach
            </div>
        </section>
    </div>


    <section id="newsletter" class="section-p1 section-m1" >
        {{-- <div class="newstext">
            <h3>Liên hệ</h3>
            <p>hueanhad <span>asddyay</span></p>
        </div>
        <div class="form">
            <input type="text" placeholder="email?">
            <button class="nomal">sign up</button>
        </div> --}}
    </section>

    <footer class="section-p1"></footer>
@endsection
