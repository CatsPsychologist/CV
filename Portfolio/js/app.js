// due to my email is so long so its not enough space to fit in one string
// this function will copy my email after clicking and you don't need to copy by yourself
let email = document.getElementById('email_copy')

email.onclick = () => {
    navigator.clipboard.writeText('artem.cherednychenko.k@gmail.com')
}