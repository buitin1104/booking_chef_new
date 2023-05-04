const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');


// Switch to the Registration form
registerLink.addEventListener('click',()=>{
    wrapper.classList.add('active');
});

// Switch to Login form
loginLink.addEventListener('click',()=>{
    wrapper.classList.remove('active');
});

// // Click the login button to display the login form
// btnPopup.addEventListener('click',()=>{
//     wrapper.classList.add('active-popup');
// });

iconClose.addEventListener('click',()=>{
    wrapper.classList.remove('active-popup');
});