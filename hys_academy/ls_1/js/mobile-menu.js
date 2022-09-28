// actually the whole menu was written without js, but it has to be closed as soon as user click to navigation
const header_nav = document.getElementById('header_nav')
header_nav.addEventListener('click', () => {document.getElementById('menu-toggle').checked = false});