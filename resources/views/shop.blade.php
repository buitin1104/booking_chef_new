@extends('layouts.app')

@section('content')
<div>
    <section id="page-header">
        <h2>StayHome</h2>
        <p>Save more with coupons & up to <span>30% off!</span></p>
        
    </section>
    <section id="product1" class="section-p1">
        <div class="pro-container">
            <div class="pro" onclick="window.location.href='sproduct.html'">
                <img src="{{ Vite::asset('resources/images/IMG/img1.webp') }}" alt="">
                <div class="des">
                    <span>Đầu Bếp 2 sao</span>
                    <h5> Mai Phương</h5>
                    <div class="star">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <h4>$100</h4>   
                                 
                </div>
               <a href="#"><i class="fa-solid fa-bag-shopping cart"></i></a>
            </div>
            <div class="pro">
                <img src="{{ Vite::asset('resources/images/IMG/img2.jpg') }}" alt="">
                <div class="des">
                    <span>Đầu bếp 4 sao</span>
                    <h5>Jacky Nguyễn</h5>
                    <div class="star">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <h4>$200</h4>
                </div>
                <a href="#"><i class="fa-solid fa-bag-shopping cart"></i></a>
            </div>
            <div class="pro">
                <img src="{{ Vite::asset('resources/images/IMG/img3.jpg') }}" alt="">
                <div class="des">
                    <span>Đầu bếp 1 sao</span>
                    <h5>Odin</h5>
                    <div class="star">
                        <i class="fas fa-star"></i>
                    </div>
                    <h4>$50</h4>
                </div>
                <a href="#"><i class="fa-solid fa-bag-shopping cart"></i></a>
            </div>
            <div class="pro">
                <img src="{{ Vite::asset('resources/images/IMG/img4.png') }}" alt="">
                <div class="des">
                    <span>Đầu bếp 5 sao</span>
                    <h5>Tần Nguyễn</h5>
                    <div class="star">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <h4>$230</h4>
                </div>
                <a href="#"><i class="fa-solid fa-bag-shopping cart"></i></a>
            </div>
            <div class="pro">
                <img src="{{ Vite::asset('resources/images/IMG/img5.jpg') }}" alt="">
                <div class="des">
                    <span>Đầu bếp 3 sao</span>
                    <h5>Hương Trần</h5>
                    <div class="star">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <h4>$150</h4>
                </div>
                <a href="#"><i class="fa-solid fa-bag-shopping cart"></i></a>
            </div>
            <div class="pro">
                <img src="{{ Vite::asset('resources/images/IMG/img6.jpg') }}" alt="">
                <div class="des">
                    <span>Đầu bếp 4 sao</span>
                    <h5>Tuấn Hải, Phạm</h5>
                    <div class="star">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
        
                    </div>
                    <h4>$170</h4>
                </div>
                <a href="#"><i class="fa-solid fa-bag-shopping cart"></i></a>
            </div>
            
            
        </div>
    </section>
        </div>
    </section>
    <section id="pagination" class="section-p1">
        <a href="#">1</a>
        <a href="#">2</a>
        <a href="#"><i class="fa-solid fa-arrow-right"></i></a>
    </section>
    <section id="newsletter" class="section-p1 section-m1" >
        <div class="newstext">
            <h3>asdadadas</h3>
            <p>hueanhad <span>asddyay</span></p>
        </div>
        <div class="form">
            <input type="text" placeholder="email?">
            <button class="nomal">sign up</button>
        </div>
    </section>
    <footer class="section-p1">
    </footer>
@endsection