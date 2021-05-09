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

