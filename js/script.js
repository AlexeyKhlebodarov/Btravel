//BurgerMenu

function burgerMenu(selector) {
    let menu = document.querySelector(selector);
    let button = document.querySelector('.burger-menu__button');
    let links = document.querySelectorAll('.burger-menu__link');

    button.addEventListener('click', (e) => {
        e.preventDefault();
        toggleMenu();
    });

    links.forEach(link => link.addEventListener('click', () => toggleMenu()));

    function toggleMenu() {
        menu.classList.toggle('burger-menu_active');
        if (menu.classList.contains('burger-menu_active')) {
            document.querySelector('body').style.overflow = "hidden";
        } else {
            document.querySelector('body').style.overflow = "visible";
        }
    }
}

burgerMenu('.burger-menu');

//Slider

let slider = document.querySelector('.slider');
let inner = document.querySelector('.slider-inner');
let slides = document.querySelectorAll('.slider-inner__item');
let total = document.querySelector('.slider-nav__total');
let current = document.querySelector('.slider-nav__current');
let counter = 0;
let offset;

function init() {
    width = slider.offsetWidth;
    inner.style.width = width * slides.length + 'px';
    slides.forEach(item => {
        item.style.width = width + 'px';
        item.style.height = 'auto';
        item.style.padding = '0 10px';
    });
}

init();
window.addEventListener('resize', init);

document.querySelector('.fa-chevron-left').addEventListener('click', function () {
    counter--;
    if (counter < 0) {
        counter = slides.length - 1;
    }
    current.textContent = counter + 1;
    inner.style.transform = `translate(-${counter * width}px)`;
});

document.querySelector('.fa-chevron-right').addEventListener('click', function () {
    counter++;
    if (counter >= slides.length) {
        counter = 0;
    }
    current.textContent = counter + 1;
    inner.style.transform = `translate(-${counter * width}px)`;
});
