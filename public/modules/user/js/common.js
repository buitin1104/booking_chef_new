$.ajaxSetup({
    headers: {
        "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
    },
});

function formatNumber(nStr) {
    nStr += "";
    x = nStr.split(".");
    x1 = x[0];
    x2 = x.length > 1 ? "." + x[1] : "";
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, "$1" + "," + "$2");
    }
    return x1 + x2;
}

const Toast = Swal.mixin({
    toast: true,
    position: "bottom-end",
    showConfirmButton: false,
    timer: 5000,
    timerProgressBar: true,
    onOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
});

$(".cart-plus-minus");
$(".qtybutton").on("click", function () {
    var $button = $(this);
    var oldValue = $button.parent().find("input").val();
    var maxLength = $button.parent().find("input").attr("max");
    var newVal = 0;
    if ($button.text() == "+") {
        if (oldValue < maxLength) {
            newVal = parseFloat(oldValue) + 1;
        } else {
            newVal = parseFloat(oldValue);
        }
    } else {
        // Don't allow decrementing below zero
        if (oldValue > 0) {
            newVal = parseFloat(oldValue) - 1;
        } else {
            newVal = 0;
        }
    }
    $button.parent().find("input").val(newVal);
});

// add product to cart
function addProductToCart(e, product_id) {
    let element = $(e.srcElement);
    $.ajax({
        url: "/add-to-cart/" + product_id,
        method: "POST",
        beforeSend: function () {
            element.attr("disabled", true);
        },
        success: function (response) {
            // if (response.code == 200) {
            //     Toast.fire({
            //         icon: "success",
            //         title: response.message,
            //     });
            //     $(".cart-item_count").html(response.countProduct);
            //     $(".cart-item-wrapper").html(response.html);
            //     element.attr("disabled", false);
            // }
        },
        error: function (err) {
            console.log(err);
        },
    });
}

function removeProductFromCart(product_id) {
    Swal.fire({
        text: "Bạn có chắc chắn muốn xóa món ăn này?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#30d6d2",
        cancelButtonColor: "#d33",
        confirmButtonText: "Có",
        cancelButtonText: "Không",
    }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                url: "/gio-hang/remove-from-cart/" + product_id,
                method: "POST",
                success: function (response) {
                    if (response.code == 200) {
                        $("table.cart")
                            .find(`tr.cart_item[productid=${product_id}]`)
                            .remove();
                        if (response.isEmpty) {
                            $(".cart-checkout-area .cart-page-area").html(
                                response.html
                            );
                        }
                        $(".countProduct").html(response.countProduct);
                        $(".cart-item-wrapper").html(response.html);
                    }
                },
                error: function (err) {
                    console.log(err);
                },
            });
        }
    });
}

$("body").on("click", ".btn-increment", function () {
    let parent = $(this).closest("tr");
    let quantity = parseInt(parent.find("#input-quantity").val());
    quantity += 1;
    updateCartProduct(parent, quantity);
});

$("body").on("click", ".btn-decrement", function () {
    let parent = $(this).closest("tr");
    let quantity = parseInt(parent.find("#input-quantity").val());
    quantity -= 1;
    updateCartProduct(parent, quantity);
});

function updateCartProduct(parent, quantity) {
    parent.find("#input-quantity").val(quantity);
    let product_id = parent.attr("productId");
    let price = parseInt(
        parent.find(".item-price .number").text().replaceAll(",", "")
    );

    let total_price = price * quantity;
    parent.find(".total-price .number").text(formatNumber(total_price));

    let cart_items = $("table.cart tr.cart_item");
    let sum_price = parseInt($(".sum-price .number").text());
    $.each(cart_items, function () {
        let total = $(this)
            .find(".total-price .number")
            .text()
            .replaceAll(",", "");
        sum_price += parseInt(total);
    });
    $(".sum-price .number").text(formatNumber(sum_price));

    $.ajax({
        url: "/cart/update/" + product_id,
        method: "POST",
        data: {
            quantity: quantity,
        },
        success: function (response) {
            if (response.code == 200) {
                $(".cart-item_count").html(response.countProduct);
                $(".cart-item-wrapper").html(response.html);

                // cart page
                $(".cart-page-area").html(response.table);
            }
        },
        error: function (err) {
            console.log(err);
        },
    });
}

function showModalUser(param) {
    if (param === "register") {
        $(".tab-register").addClass("active");
        $(".tab-login").removeClass("active");

        $(".tab-content-register").addClass("active");
        $(".tab-content-register").addClass("show");
        $(".tab-content-login").removeClass("active");
        $(".tab-content-login").removeClass("show");
    }
    if (param === "login") {
        $(".tab-login").addClass("active");
        $(".tab-register").removeClass("active");

        $(".tab-content-register").removeClass("active");
        $(".tab-content-register").removeClass("show");
        $(".tab-content-login").addClass("active");
        $(".tab-content-login").addClass("show");
    }
    $("#modal-register-login").modal("show");
}

// preview image
$("#choose-file").change(function () {
    $("#preview-avatar").attr(
        "src",
        URL.createObjectURL(event.target.files[0])
    );
});

// show search mobile
$("#show_search_mobile").on("click", function () {
    $(".box_search_mobile").css("display", "block");
});

$(".cancel_search").on("click", function () {
    $(".box_search_mobile").css("display", "none");
});

$("#scrollUp").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 400);
});

if ($(".minicart-wrap").length) {
    var $body = $("body"),
        $cartWrap = $(".minicart-wrap"),
        $cartContent = $cartWrap.find(".cart-item-wrapper");

    $cartWrap.on("click", ".minicart-btn", function (e) {
        e.preventDefault();
        var $this = $(this);
        if (!$this.parent().hasClass("show")) {
            $this
                .parent()
                .find(".cart-item-wrapper")
                .addClass("show")
                .parent()
                .addClass("show");
        } else {
            $this
                .parent()
                .find(".cart-item-wrapper")
                .removeClass("show")
                .parent()
                .removeClass("show");
        }
    });
    /*Close When Click Outside*/
    $body.on("click", function (e) {
        var $target = e.target;
        if (
            !$($target).is(".minicart-wrap") &&
            !$($target).parents().is(".minicart-wrap") &&
            $cartWrap.hasClass("show")
        ) {
            $cartWrap.removeClass("show");
            $cartContent.removeClass("show");
        }
    });
}

$(".btn-search-header").on("click", function () {
    let keyword = $(".input-search-header").val();
    window.location = "/tim-kiem?keyword=" + keyword;
});

$("#select-city").on("change", function () {
    let city_code = $(this).val();
    $.ajax({
        url: "/address/city/" + city_code,
        method: "GET",
        beforeSend: function () {
            $("#box-district select").html(`<option>--Quận huyện--</option>`);
            $("#box-district").append(`<div class="loading loading-district">
                                            <img src="/images/loading-02.gif" style="width: 25px !important; top: 20%; left: 50%">
                                        </div>`);
        },
        success: function (response) {
            if (response.code === 200) {
                let html = "";
                response.data.forEach(function (item, index) {
                    html += `<option value="${item.code}" id="${item.code}">${item.name}</option>`;
                });

                setTimeout(function () {
                    $("#box-district").find(".loading-district").remove();
                    $("#box-district select").append(html);
                }, 500);
            }
        },
        error: function (err) {
            console.log(err);
        },
    });
});

function addProductToCart01(maxQuantity, product_id) {
    let btnAddCart = $(".btn-add-cart");
    if (maxQuantity < 1) {
        Swal.fire("", "Món ăn tạm thời hết hạn!", "warning");
    } else {
        $.ajax({
            url: "/cart/add-to-cart/" + product_id,
            method: "POST",
            data: {
                quantity: 1,
            },
            beforeSend: function () {
                btnAddCart.attr("disabled", true);
                btnAddCart.addClass("btn-disabled");
            },
            success: function (response) {
                if (response.code == 200) {
                    Toast.fire({
                        icon: "success",
                        title: response.message,
                    });
                    $(".cart-item_count").html(response.countProduct);
                    $(".cart-item-wrapper").html(response.html);
                    btnAddCart.attr("disabled", false);
                    btnAddCart.removeClass("btn-disabled");
                }
            },
            error: function (err) {
                btnAddCart.attr("disabled", false);
                btnAddCart.removeClass("btn-disabled");
                console.log(err);
            },
        });
    }
}

function addChefToCart(chefId) {
    let btnAddCart = $(".btn-add-cart");
    $.ajax({
        url: "/gio-hang/add-to-cart/" + chefId,
        method: "POST",
        data: {
            quantity: 1,
        },
        beforeSend: function () {
            btnAddCart.attr("disabled", true);
            btnAddCart.addClass("btn-disabled");
        },
        success: function (response) {
            if (response.code == 200) {
                Toast.fire({
                    icon: "success",
                    title: response.message,
                });
                $(".countProduct").html(response.countProduct);
                btnAddCart.attr("disabled", false);
                btnAddCart.removeClass("btn-disabled");
            }
        },
        error: function (err) {
            btnAddCart.attr("disabled", false);
            btnAddCart.removeClass("btn-disabled");
            console.log(err);
        },
    });
}

if ($(".product-related-slider").length > 0) {
    $(".product-related-slider").slick({
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
        prevArrow:
            '<a href="#" title="" class="prev"><i class="fa fa-angle-left" aria-hidden="true"></i></a>',
        nextArrow:
            '<a href="#" title="" class="next"><i class="fa fa-angle-right" aria-hidden="true"></i></a>',
    });
}
