export default function headerShowBg(){
    const header = document.getElementById("header") as HTMLElement;
    window.addEventListener('scroll', function() {
        if (window.scrollY >= header.clientHeight) { header.classList.add("header_primary") }
        else { header.classList.remove("header_primary")}
    })
}

