const body = document.querySelector('body');

const burger = document.querySelector('.burger');
const headerMenu = document.querySelector('.header_menu');
const headerLinkAll = document.querySelectorAll('.header_menu__item');

burger.addEventListener('click', function () {
	headerMenu.classList.toggle('active');
});

AOS.init();