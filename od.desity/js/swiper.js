// /swiper
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