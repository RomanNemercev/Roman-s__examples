//swiper
const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  a11y: {
    paginationBulletMessage: 'Тут название слайда {{index}}',
  }
});


//tabs
let tabsBtn = document.querySelectorAll('.services__link-null');
let tabsItem = document.querySelectorAll('.services__content');

tabsBtn.forEach(function (element) {
  element.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function (btn) {
      btn.classList.remove('tabs-nav__btn--active')
    });
    e.currentTarget.classList.add('tabs-nav__btn--active')

    tabsItem.forEach(function (element) {
      element.classList.remove('services__active')
    });
    document.querySelector(`[data-target="${path}"]`).classList.add('services__active');
  })
});


//accordion
new Accordion('.accordion-list', {
  elementClass: 'accordion',
  triggerClass: 'accordion__control',
  panelClass: 'accordion__content',
  activeClass: 'accordion--active'
});


//burger
let burger = document.querySelector('.burger_bar');
let menu = document.querySelector('.header__navigation');
let menuLinks = menu.querySelectorAll('.header__link-item');

burger.addEventListener('click',
  function () {
    burger.classList.toggle('burger--active');

    menu.classList.toggle('header-nav--active');

    document.body.classList.toggle('stop-scroll');
  })

menuLinks.forEach(function (el) {
  el.addEventListener('click',
    function () {
    burger.classList.remove('burger--active');

    menu.classList.remove('header-nav--active');

    document.body.classList.remove('stop-scroll');
    })
});

//search_bar
let searchBtn = document.querySelector('.header__search-icon');
let searchOpen = document.querySelector('.header__search-form');
let searchClose = document.querySelector('.header__search-close');

searchBtn.addEventListener('click',
  function () {
  searchBtn.classList.toggle('icon--hide');
  searchOpen.classList.toggle('form--block');
  })

searchClose.addEventListener('click', () => {
  searchBtn.classList.remove('icon--hide');
  searchOpen.classList.remove('form--block');
});
