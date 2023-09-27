const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');
const header = document.getElementById('header');

menuToggle.addEventListener('click', () => {
   menuToggle.classList.toggle('close');
   navMenu.classList.toggle('show');
})

window.addEventListener('scroll', () => {
   console.log(window.scrollY)
   if (window.scrollY >= 100) {
      header.classList.add('fix');
   } else {
      header.classList.remove('fix');
   }
})

/* scroll to top button */
const scrollTop = document.getElementById('scroll-to-top');
window.addEventListener('scroll', () => {
   console.log(window.scrollY)
   if (window.scrollY >= 500) {
      scrollTop.classList.add('show-button');
   } else {
      scrollTop.classList.remove('show-button');
   }
})