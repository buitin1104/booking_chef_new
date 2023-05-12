@extends('layouts.app')

@section('content')
</section>
<section id="page-header">
    <h2>StayHome</h2>
    <p>Save more with coupons & up to <span>30% off!</span></p>
    
</section>
<section id="cart" class="section-p1">
    <table with="100%">
        <thead>
            <tr>
                <td>Remove</td>
                <td>Image</td>
                <td>Product</td>
                <td>Price</td>
                <td>Quantily</td>
                <td>Subtotal</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><a href="#  ">
                        <i class="far fa-times-circle"></i>
                    </a></td>
                <td><img src="{{ Vite::asset('resources/images/IMG/img4.png') }}" alt="">
                <td>Chef</td>
                <td>$250</td>
                <td><input type="number" value="1"></td>
                <td>$250</td>
            </tr>
        </tbody>
    </table>
</section>
<section id="cart-add" class="section-p1">
    <div id="coupon">
        <h3>Apply coupon</h3>
        <div>
            <input type="text" placeholder="Enter your coupon">
            <button class="normal">Apply</button>
        </div>
    </div>
    <div id="subtotal">
        <h3>dasdasd</h3>
        <table>
            <tr>
                <td></td>
            </tr>
        </table>
    </div>
</section>