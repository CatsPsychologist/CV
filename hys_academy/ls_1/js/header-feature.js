const header = document.getElementById("header")
window.addEventListener('scroll', function() {
    if (window.scrollY >= header.clientHeight) { header.classList.add("header_primary") }
    else { header.classList.remove("header_primary")}
})