const header = document.querySelector('.header')
let lastScroll = 0;
const defaultOffset = header.clientHeight;
console.log(defaultOffset)
const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => header.classList.contains('header_primary');

window.addEventListener('scroll', () => {
    if(scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) header.classList.add('header_primary');
    if(scrollPosition() === 0)header.classList.remove('header_primary');
    lastScroll = scrollPosition();
})