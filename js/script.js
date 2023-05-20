const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')
const darkToggle = document.querySelector('.toggle-dark')

btn.addEventListener('click',() =>
{
    btn.classList.toggle('open')
    nav.classList.toggle('flex')
    nav.classList.toggle('hidden')

})
darkToggle.addEventListener('click', (event) => {
    event.preventDefault();
    document.documentElement.classList.toggle('dark');
})