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

const list = document.querySelectorAll('.list')
const items = document.querySelectorAll('.portfolio_item_wrapper')
const listItems = document.querySelector('.list_items')


listItems.addEventListener('click', e => {
    const targetId = e.target.id

    switch (targetId){
        case 'js':
            items.forEach(value => {
            if(value.classList.contains('js')){
                value.style.display = 'block'
            }else{
                value.style.display = 'none'
            }
        })
            break
        case 'lay':
            items.forEach(value => {
                if(value.classList.contains('lay')){
                    value.style.display = 'block'
                }else{
                    value.style.display = 'none'
                }
            })
            break
        case 'all' :
            items.forEach(value => {
                value.style.display = 'block'
            })
            break
        case 'port' :
            items.forEach(value => {
                value.style.display = 'block'
            })
            break
    }
})

//swiper
const swiper = new Swiper('.swiper', {
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
        0: {
            slidesPerView: 1,
        },
        767: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        }
    }
});






