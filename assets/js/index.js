const header= document.querySelector('.header');
const navBurgerButton = document.querySelector('.btn--burger');
const prevButton = document.querySelector('.btn--left');
const nextButton = document.querySelector('.btn--right');
const slides = document.querySelectorAll('.slide');
let initialSlide = 0;
let maxSlides = slides.length - 1;

window.addEventListener('scroll', () => {
    window.scrollY > 0 ? header.classList.add('header--half-transparent') : header.classList.remove('header--half-transparent');
})

document.addEventListener('DOMContentLoaded', () => {
    slides.forEach((slide, index) => {
        index !== initialSlide ? slides[index].classList.add('slide--inactive') : null;
    })
})

navBurgerButton.addEventListener('click', () => {
    header.classList.toggle('header--active');
});

prevButton.addEventListener('click', () => {

})

nextButton.addEventListener('click', () => {

})

