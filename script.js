const menuButton = document.querySelector('.menuButton');
const navUL = document.querySelector('.navItems');
let menuOpen = false;


menuButton.addEventListener('click', ()=>{
    if(!menuOpen) {
        menuButton.classList.add('open')
        menuOpen = true
    } else {
        menuButton.classList.remove('open')
        menuOpen = false
    }
    navUL.classList.toggle('show');
});
