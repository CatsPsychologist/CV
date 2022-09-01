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


const allBtn = document.querySelectorAll(".drop_button")
const allDrop = document.querySelectorAll(".drop_navbar")
const allArrows = document.querySelectorAll(".header_arrow")
console.log(allBtn)
console.log(allDrop)
console.log(allArrows)
window.onclick = function(event) {

    for (let i = 0; i < allDrop.length; i++) {
        // console.log(event.target.classList.contains('header_arrow')) - дает true, но на 74 строке не работает почему-то хз
        for (let j = 0; j < allBtn.length; j++) {
            if(event.target === allBtn[i]){
                allDrop[i].classList.toggle("header_nav_show");
            }
            if (event.target !== allBtn[i]) {
                if (allDrop[i].classList.contains('header_nav_show')) {
                    allDrop[i].classList.remove('header_nav_show');
                }
            }
        }
        if(allDrop[i].classList.contains('header_nav_show')){
            allArrows[i].classList.add('arrow_rotate')
        }else{
            allArrows[i].classList.remove('arrow_rotate')
        }
    }

}



