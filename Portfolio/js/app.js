// header feature that attaches header to the page after making a scroll that equals to headers height
// and returning it back if you get to the top of the page

const header = document.querySelector('.header')
let lastScroll = 0;
const defaultOffset = header.clientHeight;
console.log(defaultOffset)
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

const items = document.querySelectorAll('.portfolio_item_wrapper')
const listItems = document.querySelector('.list_items')

function removeHide (){
    return  items.forEach(value => {
        value.classList.remove('hide')
    })
}

listItems.addEventListener('click', e => {
    const targetId = e.target.id

    switch (targetId){
        case 'js':
            items.forEach(value => {
                removeHide ()
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
                    value.classList.add('hide')
                    value.style.display = 'block'
                }else{
                    value.style.display = 'none'
                }
            })
            break
        case 'all' :
            items.forEach(value => {
                removeHide ()
                value.style.display = 'block'
            })
            break
        case 'port' :
            items.forEach(value => {
                removeHide ()
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

// contact validation and sending to email

const inputs = document.forms["contact_inputs"];
const button = document.getElementById("button");

const inputArr = Array.from(inputs)
const validInputArr = [];

inputArr.forEach(value => {
    if(value.hasAttribute("data-reg")){
        value.setAttribute("is-valid", '0');
        validInputArr.push(value);
    }
})

inputs.addEventListener("input", inputHandler);
button.addEventListener("click", buttonHandler);

function inputHandler({target}){
    if(target.hasAttribute("data-reg")){
        inputCheck(target);
    }
}

function inputCheck(el){
    const inputValue = el.value;
    const inputReg = el.getAttribute("data-reg");
    const reg = new RegExp(inputReg);
    if(reg.test(inputValue)){
        el.style.boxShadow = '0 0 0 0.25rem rgb(13 110 253 / 25%)';
        el.style.background = 'rgb(232, 240, 254)';
        el.setAttribute("is-valid", '1');
    }
    else if(inputValue === ''){
        el.style.boxShadow = 'none';
        el.style.background = '#efefef';
    }
    else {
        el.style.boxShadow = '0 0 0 0.25rem rgb(255 0 0 / 25%)';
        el.style.background = 'rgb(248,213,217)';
        el.setAttribute("is-valid", '0');
    }
}

function buttonHandler(e) {
    const isAllValid = [];
    validInputArr.forEach(value => {
        isAllValid.push(value.getAttribute("is-valid"))
    })
    isAllValid.length = 3;

    let isValid = isAllValid.reduce((a, b) =>{
        return +a + +b;
    })
    if(isValid === 3){
        button.disabled = false;
        formSend ();
        console.log('успех');
        document.querySelector('.contact_preload').style.display = 'flex';

    }else{
        formNotSend()
        alert('Make sure you filled everything correctly');
    }
}

function formNotSend(){
    button.disabled = true;
    setTimeout(function (){
        button.disabled = false;
    },2000)
}

function formSend (){
    inputs.addEventListener('submit', function (e){
        let elem = e.target;
        let formData = {
            name: elem.querySelector('[name = "name"]').value,
            email: elem.querySelector('[name = "email"]').value,
            telegram: elem.querySelector('[name = "telegram"]').value,
            message: elem.querySelector('[name = "message"]').value,
        };
        inputArr.length = 4;
        inputArr.forEach(value => {
            value.style.boxShadow = 'none';
            value.style.background = '#efefef';
        })

        offValid(inputArr)
    })
}

function offValid(arr){
    return arr.map(value => value.setAttribute("is-valid", '0') )
}

