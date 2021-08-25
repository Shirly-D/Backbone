var menu = document.querySelector('.menu');
var bar = document.querySelector('.bar');
var navUl = menu.querySelector('ul');
menu.addEventListener('click', function(e){
    menu.classList.toggle('active');
    bar.classList.toggle('ham-active');
    navUl.classList.toggle('active');
})


var form = document.querySelector('.form');
var fname = document.querySelector('.name');
var email = document.querySelector('.email');
var message = document.querySelector('.message');
var nameLength = /^[A-Za-z. ]{3,30}$/;

form.addEventListener('submit', function(e){
    e.preventDefault();
    inputValue();
})

function inputValue() {
    if(!nameLength.test(fname.value)) {
        errorMsg(fname, '*This field is required');
    } else {
        successMsg(fname);
    }
    if(!nameLength.test(email.value)) {
        errorMsg(email, '*This field is required');
    } else if (!isEmail(emailInput)) {
        errorMsg(email, 'Email is invalid');
    } else {
        successMsg(email);
    } 
    if(!nameLength.test(message.value)) {
        errorMsg( message, '*This field is required');
    } else {
        successMsg(message);
    }
}

function errorMsg(input, message) {
    var formControl = input.parentElement;
    var small = formControl.querySelector('small');
    small.innerText = message;
    formControl.className += ' form-control error';
}

function successMsg(input) {
    var formControl = input.parentElement;
    formControl.className = ' form-control success';
}

function isEmail(emailInput) {
    return /^[A-Za-z_]{3,}[0-9]{2,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/.test(emailInput);
}



















