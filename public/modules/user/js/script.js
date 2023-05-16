// Slider
var Slider = function() {
    if ($('.slider').length > 0) {
        $('.slider').slick({
            infinite: true,
            speed: 500,
            arrows: true,
            dots: false,
            prevArrow: '<a href="#" title="" class="prev"><i class="fa fa-angle-left" aria-hidden="true"></i></a>',
            nextArrow: '<a href="#" title="" class="next"><i class="fa fa-angle-right" aria-hidden="true"></i></a>'
        });
    }
};

// Menu
var Menu = function() {
    $('.btn-menu').click(function() {
        $('.menu-mb').addClass('open');
        $('.menu-mb').removeClass('close');
    });

    $('.menu-mb').find("ul li").each(function() {
        if ($(this).find("ul>li").length > 0) {
            $(this).append('<i class="fa fa-angle-down btn-drop1" aria-hidden="true"></i>');
        }
    });

    $('.btn-drop1').click(function() {
        $(this).toggleClass('fa-angle-down').toggleClass('fa-angle-up');
        $('.btn-drop1').parent('li').children('ul').toggleClass('active1');
    });

    $('.btn-close').click(function() {
        $(this).parent('.menu-mb').removeClass('open');
        $(this).parent('.menu-mb').addClass('close');
    });
};

// Lọc theo giá
var Sliderfilter = function() {
    if ($("#slider-range").length > 0) {
        var numMin;
        var numMax;
        $("#slider-range").slider({
            range: true,
            min: 100000,
            max: 5000000,
            step: 100000,
            values: [100000, 5000000],
            slide: function(event, ui) {
                numMin = ui.values[0].toLocaleString();;
                numMax = ui.values[1].toLocaleString();;
                $("#amount").val(numMin + " - " + numMax);


            }
        });
        var numMin1 = $("#slider-range").slider("values", 0).toLocaleString();
        var numMax1 = $("#slider-range").slider("values", 1).toLocaleString();
        $("#amount").val(numMin1 + " - " + numMax1);
    }
};


var Sliderbookdetail = function() {
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        asNavFor: '.slider-for',
        dots: true,
        focusOnSelect: true,
        arrows: false,
        dots: false
    });
};
// Backtotop
var Backtotop = function() {
    $('.back-to-top').click(function() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });
};

// Input number
var Inputnumber = function() {
    var number = $('.input-number').val();
    $('.plus').click(function() {
        var val = parseInt(number);
        val = val + 1;
        number = val;
        $('.input-number').val(val);
    });
    $('.minus').click(function() {
        var val = parseInt(number);
        if (number == 1) {
            val = 1;
        } else {
            val = val - 1;
        }
        $('.input-number').val(val);
        number = val;
    });
};

$(function() {
    Slider();
    Menu();
    Sliderbookdetail();
    Sliderfilter();
    Inputnumber();
    Backtotop();
});

if ($('.search').length) {
    $cartWrap = $('.search');
    $cartContent = $cartWrap.find('.cart-item-wrapper');

    $cartWrap.on('click', '.icon-cart', function(e) {
        e.preventDefault();
        var $this = $(this);
        if (!$this.parent().hasClass('show')) {
            $this.parent().find('.cart-item-wrapper').addClass('show').parent().addClass('show');
        } else {
            $this.parent().find('.cart-item-wrapper').removeClass('show').parent().removeClass('show');
        }
    });

    $('body').on('click', function(e) {
        var $target = e.target;
        if (!$($target).is('.search') && !$($target).parents().is('.search') && $cartWrap.hasClass('show')) {
            $cartWrap.removeClass('show');
            $cartContent.removeClass('show');
        }
    });
}