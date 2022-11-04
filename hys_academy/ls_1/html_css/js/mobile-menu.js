// actually the whole menu was written without js, but it has to be closed as soon as user click to navigation
export default function burgerMenu(){
    const headerNav = document.getElementById('header_list');
    headerNav.addEventListener('click', () => {document.getElementById('menu-toggle').checked = false});
}

