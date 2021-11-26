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




document.querySelector("form").addEventListener("submit", handleSubmit);

const handleSubmit = (e) => {
  e.preventDefault()
  let myForm = document.getElementById('form');
  let formData = new FormData(myForm)
  fetch('/', {
    method: 'POST',
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString()
  }).then(() => console.log('Form successfully submitted')).catch((error) =>
    alert(error))
}
