// due to my email is so long so its not enough space to fit in one string
// this function will copy my email after clicking and you don't need to copy by yourself
let email = document.getElementById('email_copy')

email.onclick = () => {
    navigator.clipboard.writeText('artem.cherednychenko.k@gmail.com')
}


// header feature that attaches header to the page after making a scroll that equals to headers height
// and returning it back if you get to the top of the page
const header = document.querySelector('.header')

console.log(header.clientHeight)

let lastScroll = 0;
const defaultOffset = header.clientHeight;


const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => header.classList.contains('hide');

window.addEventListener('scroll', () => {
    if(scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
        //scroll down
        header.classList.add('hide');
    }


    // else if(scrollPosition() < lastScroll && containHide()){
    //     //scroll up
    //     header.classList.remove('hide');
    // }
    if(scrollPosition() === 0){
        header.classList.remove('hide');
    }
    // console.log(lastScroll)
    // console.log(defaultOffset)
    lastScroll = scrollPosition();
    // console.log(scrollPosition())
})