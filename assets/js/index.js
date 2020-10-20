const header= document.querySelector('header');
const logo = document.querySelector('.logo');
const navBurgerButton = document.querySelector('.nav__btn');
const navBurgerIcon = document.querySelector('.btn--burger');
const navItems = document.querySelector('.nav__list');
const prevButton = document.querySelector('.btn--left');
const nextButton = document.querySelector('.btn--right');

navBurgerButton.addEventListener('click', () => {
    header.classList.toggle('header--active')
    logo.classList.toggle('hidden');
    navBurgerIcon.classList.toggle('btn--close');
    navItems.classList.toggle('visible');
})