// header feature that attaches header to the page after making a scroll that equals to headers height
// and returning it back if you get to the top of the page

const header = document.querySelector('.header')
const header_wrp = document.querySelector('.header_wrapper')
let lastScroll = 0;
let lastScroll1 = 0;
const defaultOffset = 70;

const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => header.classList.contains('hide');

window.addEventListener('scroll', () => {
    if(scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) header.classList.add('hide');
    if(scrollPosition() === 0)header.classList.remove('hide');
    lastScroll = scrollPosition();
})

const scrollPosition2 = () => window.pageYOffset || document.documentElement.scrollTop;
const fix_head = () => header.classList.contains('fix_head')

window.addEventListener('scroll', () => {
    if(scrollPosition2() > lastScroll1 && !fix_head() && scrollPosition2() > defaultOffset) header_wrp.classList.add('fix_head');
    if(scrollPosition2() === 0)header_wrp.classList.remove('fix_head');
    lastScroll1 = scrollPosition2();
})

//swiper
const swiper = new Swiper('.swiper', {
    loop: true,

    grabCursor: true,
    touchRatio: 1.25,
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
    mousewheel: {
        invert: true,
    },
    slidesPerView: 1,
    autoplay: {
        delay: 1500,
        disableOnInteraction: true,
    },
    speed: 1500,

    breakpoints: {
        0: {
            slidesPerView: 1.5,
        },
        420: {
            slidesPerView: 2.5,
        },
        567: {
            slidesPerView: 1.7,
        },
        767: {
            slidesPerView: 2.5,
        }
    }
});
// const item = document.querySelector('.item')
// const width = item.clientWidth;
// console.log(width)
//
// item.style.height = width'px' ;