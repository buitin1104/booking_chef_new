$.ajaxSetup({
    headers: {
        "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
    },
});

// $(".form-submit-order").validate({
//     rules: {
//         name: {
//             required: true,
//         },
//         phone: {
//             required: true,
//             minlength: 10,
//             maxlength: 11,
//         },
//         address: {
//             required: true,
//         },
//     },
//     messages: {
//         name: {
//             required: "Trường này không được để trống",
//         },
//         email: {
//             required: "Trường này không được để trống",
//             email: "Địa chỉ email không đúng định dạng",
//         },
//         phone: {
//             required: "Trường này không được để trống",
//             minlength: "Số điện thoại tối thiểu 10 ký tự",
//             maxlength: "Số điện thoại tối đa 11 ký tự",
//         },
//         address: {
//             required: "Trường này không được để trống",
//         },
//     },
//     submitHandler: function () {
//         $.ajax({
//             url: "/order/store",
//             method: "POST",
//             data: {
//                 name: $('.form-submit-order input[name="name"]').val(),
//                 phone: $('.form-submit-order input[name="phone"]').val(),
//                 email: $(".form-submit-order #email").val(),
//                 address: $(".form-submit-order #address").val(),
//                 payment_method: $('input[name="payment_method"]:checked').val(),
//             },
//             success: function (response) {
//                 if (response.code === 200) {
//                     window.location = response.url;

//                     if (response.message) {
//                         Toast.fire({
//                             icon: "success",
//                             title: "Thành công",
//                         });
//                     }
//                 }

//                 if (response.code === 400) {
//                     Toast.fire({
//                         icon: "error",
//                         title: "Thất bại",
//                     });
//                 }
//             },
//             error: function (err) {
//                 console.log(err);
//             },
//         });
//     },
// });

$(".btn-submit-checkout-user").on("click", function () {
    if (address_default) {
        $.ajax({
            url: "/order/store",
            method: "POST",
            data: {
                name: address_default.name,
                phone: address_default.phone,
                email: address_default.user.email,
                address: address_default.address,
                payment_method: $('input[name="payment_method"]:checked').val(),
            },
            success: function (response) {
                if (response.code === 200) {
                    window.location = response.url;

                    if (response.message) {
                        Toast.fire({
                            icon: "success",
                            title: response.message,
                        });
                    }
                }
            },
            error: function (err) {
                console.log(err);
            },
        });
    }
});

$(".btn-search-order").on("click", function () {
    let status = $(this).data("status");
    getProductByStatus(status);
});

function getProductByStatus(type) {
    let keyword = $("#input-keyword").val();
    $(".order-status").find("li").removeClass("active");
    $(".order-status")
        .find("li." + type)
        .addClass("active");
    $(".btn-search").attr("data-status", type);

    $.ajax({
        url: "/order/get-product-by-type",
        method: "POST",
        data: {
            status: type,
            keyword: keyword,
        },
        beforeSend: function () {
            $(".cart-page-area").html(`<div class="loading-order">
                                        <img src="/images/loading-02.gif" alt="" class="w-100">
                                    </div>`);
        },
        success: function (response) {
            if (response.code === 200) {
                let obj = response.countProduct;
                $(".cart-page-area").html(response.html);
                if (obj) {
                    Object.keys(obj).forEach(function (key) {
                        $(`li.${key}`).find(".count").text(obj[key]);
                    });
                }
            }
        },
        error: function (err) {
            console.log(err);
        },
    });
}
