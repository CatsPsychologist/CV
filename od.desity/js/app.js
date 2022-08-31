// header feature that attaches header to the page after making a scroll that equals to headers height
// and returning it back if you get to the top of the page

const header = document.querySelector('.header')
// const header_wrp = document.querySelector('.header_wrapper')
let lastScroll1 = 0;
const defaultOffset = 70;

const scrollPosition2 = () => window.pageYOffset || document.documentElement.scrollTop;
const fix_head = () => header.classList.contains('fix_head')

window.addEventListener('scroll', () => {
    if(scrollPosition2() > lastScroll1 && !fix_head() && scrollPosition2() > defaultOffset) header.classList.add('fix_head');
    if(scrollPosition2() === 0)header.classList.remove('fix_head');
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
// up.style.display = "none";
// down.style.display = 'block'
const dropItems = document.querySelectorAll('a')

for (let i = 0; i < dropItems.length; i++) {
    dropItems[i].addEventListener('click', evt => {
        evt.preventDefault()
    })
}




const chProgram = document.querySelector('.checkbox_program')
// const navProgram = document.querySelector('.mobile_nav_program')
const chAbout = document.querySelector('.checkbox_about')
// const navAbout = document.querySelector('.mobile_nav_about')
const chLang = document.querySelector('.checkbox_language')
const chLangMobile = document.querySelector('.checkbox_language_mobile')

function dropDown (chBox){
    window.addEventListener('click', e => {
        if(e.target !== chBox){
            chBox.checked = false
        }
    })
}

dropDown(chProgram);
dropDown(chAbout);
dropDown(chLang);
dropDown(chLangMobile);