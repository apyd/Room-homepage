const header= document.querySelector('.header');
const navBurgerBtn = document.querySelector('.btn--burger');
const prevBtns = document.querySelectorAll('.btn--left');
const nextBtns = document.querySelectorAll('.btn--right');
const slides = document.querySelectorAll('.slide');
let initialSlide = 0;
let currentSlide = initialSlide;
let numberOfSlides = slides.length - 1;

function changeSlide(activeSlideIndex) {
    slides.forEach((slide, index) => {
        index === activeSlideIndex ? setTimeout(function() { slides[index].classList.add('slide--active');},100) : slides[index].classList.remove('slide--active');
    })
}

document.addEventListener('DOMContentLoaded', changeSlide(initialSlide));

window.addEventListener('scroll', () => {
    window.scrollY > 0 ? header.classList.add('header--half-transparent') : header.classList.remove('header--half-transparent');
});

navBurgerBtn.addEventListener('click', () => {
    header.classList.toggle('header--active');
});

prevBtns.forEach(prevBtn => {
    prevBtn.addEventListener('click', () => {
        currentSlide <= 0 ? currentSlide = numberOfSlides : --currentSlide;
        changeSlide(currentSlide);
    });
});

nextBtns.forEach(nextBtn => {
    nextBtn.addEventListener('click', () => {
        currentSlide >= numberOfSlides ? currentSlide = 0 : ++currentSlide;
        changeSlide(currentSlide);
    });
});
