// hamburger menu
var menu = document.querySelector('.menu');
var bar = document.querySelector('.bar');
var navUl = menu.querySelector('ul');
menu.addEventListener('click', function(e){
    menu.classList.toggle('active');
    bar.classList.toggle('ham-active');
    navUl.classList.toggle('active');
})

// form validation
var form = document.querySelector('.form');
var fname = document.querySelector('.name');
var email = document.querySelector('.email');
var message = document.querySelector('.message');
var nameLength = /^[A-Za-z. ]{6,30}$/;

form.addEventListener('submit', function(e){
    e.preventDefault();
    inputValue();
})

function inputValue() {
    if(fname.value.length < 1) {
        errorMsg(fname, '*This field is required');
    }
    if(!nameLength.test(fname.value)) {
        errorMsg(fname, 'Enter valid name');
    } else {
        successMsg(fname);
    }
    if(!nameLength.test(email.value)) {
        errorMsg(email, '*This field is required');
    } else if (!isEmail(email.value)) {
        errorMsg(email, 'Email is invalid');
    } else {
        successMsg(email);
    } 
    if(!nameLength.test(message.value)) {
        textareaErr( message, '*This field is required');
    } else {
        successTextarea(message);
    }
}

function errorMsg(input, message) {
    var formControl = input.parentElement;
    var small = formControl.querySelector('span');
    small.innerText = message;
    formControl.className += ' form-control error';
}

function textareaErr(textarea, message) {
    var formControl = textarea.parentElement;
    var span = formControl.querySelector('span');
    span.innerText = message;
    formControl.className += ' form-control error';

}

function successMsg(input) {
    var formControl = input.parentElement;
    formControl.className = ' form-control success';
}

function successTextarea(textarea) {
    var formControl = textarea.parentElement;
    formControl.className = ' form-control success';
}

function isEmail(emailInput) {
    return /^[\w]{1,}[\w.+-]{0,}@[\w-]{1,}([.][a-zA-Z]{2,3}|[.][\w-]{2,3}[.][a-zA-Z]{2,3})$/.test(emailInput);
}

// filter function

var filterElem = document.querySelector('.portfolio-list');
var filterList = filterElem.querySelectorAll("li");
for (var i = 0; i < filterList.length; i++){
    filterList[i].addEventListener('click', function(e){
        if (this == e.target) {
            var elem = e.target.innerHTML;
            for (var k = 0; k < filterList.length; k++){
                filterList[k].classList.remove("active-filter");
            }
            e.target.classList.add("active-filter");
            filter(elem);
        }
    })
}

function filter(elemFilter) {
    var element = document.querySelectorAll('.filter-image');
    for (var j = 0; j < element.length; j++) {
        var a = element[j].getAttribute("data-gallery");
        element[j].classList.remove('active');
        element[j].classList.remove('none');
        if (elemFilter == a || elemFilter == "all") {
            element[j].className += " active";
        } else {
            element[j].className += " none";
        }
    }
}

// slick slider 

var slider = document.querySelector('.slider');

if (slider) {
	$(document).ready(function() {
		$('.slider').slick({    
			dots: true,
			autoplay: true,
            arrows:true,
            prevArrow:'<button type="button" class="slick-prev"></button>',
            nextArrow:'<button type="button" class="slick-next"></button>',
            slidesToShow:1,
            slidesToScroll:1
		});
	});
    $('.slider').click(function() {
        $slideshow.slick('slickNext');
    });
}

// scroll top

var scrollTop = document.querySelector('.arrow');
scrollTop.addEventListener('click', function(e){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
})



















