// actually the whole menu was written without ts, but it has to be closed as soon as user click to navigation
export default function burgerMenu(){
    const headerNav = document.getElementById('header_list')as HTMLElement;
    headerNav.addEventListener('click', () => {(document.getElementById('menu-toggle')as HTMLInputElement).checked = false});
}

