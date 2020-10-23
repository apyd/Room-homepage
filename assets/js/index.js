const header= document.querySelector('.header');
const navBurgerButton = document.querySelector('.btn--burger');
const prevButton = document.querySelector('.btn--left');
const nextButton = document.querySelector('.btn--right');

window.addEventListener('scroll', () => {
    window.scrollY > 0 ? header.classList.add('header--half-transparent') : header.classList.remove('header--half-transparent');
})

navBurgerButton.addEventListener('click', () => {
    header.classList.toggle('header--active');
});

prevButton.addEventListener('click', () => {

})

nextButton.addEventListener('click', () => {

})

