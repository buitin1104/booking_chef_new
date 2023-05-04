const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const forgotLink = document.querySelector('.forgot-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
const newLink = document.querySelector('.new');



// Switch to the Forgot Password form
forgotLink.addEventListener('click',()=>{
    wrapper.classList.add('active');
});

newLink.addEventListener('click',()=>{
    wrapper.classList.add('active');
})


// Switch to Login form
loginLink.addEventListener('click',()=>{
    wrapper.classList.remove('active');
});


// Click the login button to display the login form
btnPopup.addEventListener('click',()=>{
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click',()=>{
    wrapper.classList.remove('active-popup');
});

// document.getElementById("button").addEventListener("click", function(){
//     document.querySelector(".newpassword").style.display = "flex";
// })

