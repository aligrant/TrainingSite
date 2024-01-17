// Mobile navigation toggle
const navLinks = document.querySelector('.nav-links');
const hamburgerMenu = document.querySelector('.hamburger-menu');

hamburgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});