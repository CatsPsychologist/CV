// my email is so long so its not enough space to fit in one string
// this function will copy my email after clicking and you don't need to copy by yourself
// let email = document.getElementById('email_copy')
//
// email.onclick = () => {
//     navigator.clipboard.writeText('artem.cherednychenko.k@gmail.com')
// }

// header feature that attaches header to the page after making a scroll that equals to headers height
// and returning it back if you get to the top of the page
const header = document.querySelector('.header')
let lastScroll = 0;
const defaultOffset = header.clientHeight;

const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => header.classList.contains('hide');

window.addEventListener('scroll', () => {
    if(scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) header.classList.add('hide');
    if(scrollPosition() === 0)header.classList.remove('hide');
    lastScroll = scrollPosition();
})

//preloader feature

window.onload = function() {
    let preloader = document.getElementById('preloader');
    preloader.classList.add('hide-preloader');

    setInterval(function() {
        preloader.classList.add('preloader-hidden');
    }, 2990);
}


// Once my IT teacher said "Everything you can do without using js do it using css"
// and I did a "burger" menu with only css but I have to hide a pop up after pushing an anchor link so lets do it

const header_nav = document.getElementById('header_nav')

header_nav.addEventListener('click', () => {
    document.getElementById('menu-toggle').checked = false
});

// portfolio sort


const all = document.querySelector('.all')
const port = document.querySelector('.port')
const layouts = document.querySelector('.layouts')
const js_proj = document.querySelector('.js_proj')

const allElements = document.querySelectorAll('.portfolio_item_wrapper')
const allJs = document.querySelectorAll('.js')
const allLayouts = document.querySelectorAll('.lay')


const removeClass = () =>{
    allElements.forEach(value => {
        value.classList.remove('hide_it')
    })
}

all.addEventListener('click', () => {

    removeClass()

});

port.addEventListener('click', () => {

    removeClass()

});

layouts.addEventListener('click', () => {

    removeClass()

    allJs.forEach(value => {
        value.classList.add('hide_it')
    })
});

js_proj.addEventListener('click', () => {

    removeClass()

    allLayouts.forEach(value => {
        value.classList.add('hide_it')
    })
});

//swiper
const swiper = new Swiper('.swiper', {
    // spaceBetween: 40,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
        type: 'progressbar',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    grabCursor: true,
    touchRatio: 1.25,

    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },

    mousewheel: {
        invert: true,
    },

    slidesPerView: 3,
    autoplay: {
        delay: 1500,
        disableOnInteraction: true,
    },
    speed: 800,

    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            // spaceBetween: 20
        },
        // when window width is >= 576px
        576: {
            slidesPerView: 1,
            // spaceBetween: 30
        },
        // when window width is >= 640px
        767: {
            slidesPerView: 2,
            // spaceBetween: 40
        },
        1024: {
            slidesPerView: 3,
            // spaceBetween: 40
        }
    }
});






