const hamburguerMenu = document.querySelector('#hamburguerMenu');
const menuOptionsMobile = document.querySelector('.menu-mobile-options');
hamburguerMenu.addEventListener('click', () => {
  menuOptionsMobile.classList.toggle('active')
})