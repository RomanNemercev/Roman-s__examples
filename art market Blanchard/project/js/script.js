// select
const multiSelect = () => {
  const elements = document.querySelectorAll('.header__select-tab');
  elements.forEach(el => {
    const choices = new Choices(el, {
      searchEnabled: false,
      itemSelectText: '',
      shouldSort: false,
    })
  });
};


multiSelect();


// scroll in select

Array.prototype.forEach.call(
  document.querySelectorAll('.choices__list'),
  (el) => new SimpleBar(el, {
    autoHide: false,
    scrollbarMaxSize: 28,
  })
)

// select from gallery-box

const element = document.querySelector('.gallery__select');
const choices = new Choices(element, {
  searchEnabled: false,
  itemSelectText: ''
});

// swiper at hero-box
new Swiper('.hero__swiper', {
  loop: true,
  autoplay: {
    delay: 5000,
  },
});

//swiper at gallery-box
new Swiper('.gallery__swiper', {
  slidesPerView: 'auto',
  spaceBetween: 10,
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction'
  },
  navigation: {
    nextEl: '.gallery-button-next',
    prevEl: '.gallery-button-prev',
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerGroup: 1,
      slidesPerView: 'auto',
      spaceBetween: 20
    },
    // when window width is >= 768px
    768: {
      slidesPerGroup: 2,
      slidesPerView: 'auto',
      spaceBetween: 39
    },
    // when window width is >= 1024px
    1024: {
      slidesPerGroup: 2,
      slidesPerView: 'auto',
      spaceBetween: 34
    },

    1920: {
      slidesPerGroup: 3,
      slidesPerView: 'auto',
      spaceBetween: 50,
    }
  }
});

// swiper at events
new Swiper('.events__swiper', {
  slidesPerView: 3,
  spaceBetween: 50,
  slidesPerGroup: 3,
  navigation: {
    nextEl: '.events-button-next',
  },
  pagination: {
    el: '.events-pagination-bullet',
    clickable: 'true'
  },
  breakpoints: {
    320: {
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerGroup: 1
    },

    768: {
      spaceBetween: 35,
      slidesPerView: 2,
      slidesPerGroup: 2
    },

    1024: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 27
    },

    1920: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 51
    }
  }
});

// swiper at partners
new Swiper('.partners', {
  slidesPerView: 3,
  spaceBetween: 50,
  slidesPerGroup: 3,
  navigation: {
    prevEl: '.partners-button-prev',
    nextEl: '.partners-button-next',
  },
  breakpoints: {
    320: {
      slidesPerGroup: 1,
      slidesPerView: 1,
      spaceBetween: 0
    },

    768: {
      slidesPerGroup: 2,
      slidesPerView: 2,
      spaceBetween: 11
    },

    1024: {
      slidesPerGroup: 2,
      slidesPerView: 2,
      spaceBetween: 29
    },

    1200: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 5
    },

    1920: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50
    }
  }
});


//accordion
new Accordion('.accordion__list', {
  elementClass: 'element-class',
  triggerClass: 'accordion__control',
  panelClass: 'accordion__content',
  activeClass: 'accordion--active',
  openOnInit: [0],
});


//tabs
let tabsBtn = document.querySelectorAll('.accordion__name');
let tabsItem = document.querySelectorAll('.magazine__content');

tabsBtn.forEach(function (element) {
  element.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function (btn) {
      btn.classList.remove('accordion__tab-active')
    });
    e.currentTarget.classList.add('accordion__tab-active')

    tabsItem.forEach(function (element) {
      element.classList.remove('magazine__content-active')
    });
    document.querySelector(`[data-target="${path}"]`).classList.add('magazine__content-active');
  })
});

//tooltip
document.querySelectorAll('button[data-template]').forEach(btn => {
  tippy(btn, {
    content(reference) {
      const id = reference.getAttribute('data-template');
      const template = document.getElementById(id);
      return template.innerHTML;
    },
    allowHTML: true,
    theme: 'pink',
    maxWidth: 274
  })
});

//map
// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);

function init() {
  // Создание карты.
  var myMap = new ymaps.Map("map", {
    // Координаты центра карты.
    // Порядок по умолчанию: «широта, долгота».
    // Чтобы не определять координаты центра карты вручную,
    // воспользуйтесь инструментом Определение координат.
    center: [55.75846806898367, 37.60108849999989],
    // Уровень масштабирования. Допустимые значения:
    // от 0 (весь мир) до 19.
    zoom: 17,
  });

  var myPlacemark = new ymaps.Placemark([55.75846806898367, 37.60108849999989], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/map_label.svg',
    iconImageSize: [20, 20],
  });

  myMap.geoObjects.add(myPlacemark);
  myMap.controls.remove('geolocationControl'); // удаляем геолокацию
  myMap.controls.remove('searchControl'); // удаляем поиск
  myMap.controls.remove('trafficControl'); // удаляем контроль трафика
  myMap.controls.remove('typeSelector'); // удаляем тип
  myMap.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  myMap.controls.remove('zoomControl'); // удаляем контрол зуммирования
  myMap.controls.remove('rulerControl'); // удаляем контрол правил
  myMap.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
//   спасибо verstaem.online=)
}


//gallery modal
document.getElementById("btn-slide-2").addEventListener("click", function () {
  document.getElementById("modal-slide-2").classList.add("gallery__modal--open");
  document.body.classList.toggle('stop-scroll');
})

document.getElementById("modal-slide-2-close").addEventListener("click", function () {
  document.getElementById("modal-slide-2").classList.remove("gallery__modal--open");
  document.body.classList.remove('stop-scroll');
})

window.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
    document.getElementById("modal-slide-2").classList.remove("gallery__modal--open");
    document.body.classList.remove('stop-scroll');
  }
});

document.querySelector("#modal-slide-2 .modal__content-wrapper").addEventListener('click', event => {
  event._isClickWithInModal = true;
});
document.getElementById("modal-slide-2").addEventListener('click', event => {
  if (event._isClickWithInModal) return;
  event.currentTarget.classList.remove('gallery__modal--open');
  document.body.classList.remove('stop-scroll');
});

//validate
document.addEventListener("DOMContentLoaded", function () {
  const validation = new JustValidate('.form');
  const selector = document.querySelector("input[type='tel']");
  const im = new Inputmask("+7 (999) 999-99-99");
  im.mask(selector);

  validation
    .addField('.name', [{
      rule: 'required',
      errorMessage: "Недопустимый формат"
    },
      {
        rule: 'minLength',
        value: 2,
        errorMessage: "Недопустимый формат"
      },
      {
        rule: 'maxLength',
        value: 10,
        errorMessage: "Недопустимый формат"
      }])
    .addField('.tel', [{
      rule: 'required',
      errorMessage: 'Недопустимый формат'
    },
      {
        rule: "function",
        validator: function (name, value) {
          const phone = selector.inputmask.unmaskedvalue();
          return phone.length === 10
        },
        errorMessage: 'Недопустимый формат'
      }]).onSuccess((event) => {
        console.log('Validation passes and form submited', event);

        let formData = new FormData(event.target);

        console.log(...formData);

        let xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {
              console.log('Отправлено');
            }
          }
        }

        xhr.open('POST', 'mail.php', true);
        xhr.send(formData);

        event.target.reset();
  });
})

//burger
let burger = document.querySelector('.header__toggle');
let menu = document.querySelector('.header__links');
let menuLinks = menu.querySelectorAll('.header__link');

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

//dropdown search-box
let searchBtn = document.querySelector('.header__search');
let searchOpen = document.querySelector('.header__search-bottom');
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

// scroll into block from button

// first way - not work.
// const acButton = document.getElementsByClassName('accordion__name');
// const magPic = document.getElementsByClassName('magazine__content');
//
// acButton.addEventListener('click', () => {
//   magPic.scrollIntoView({
//     block: 'nearest',
//     behavior: 'smooth',
//   })
// })

// second way - not work.
// let magPic = document.getElementsByClassName('magazine__content');
// let acButton = document.getElementsByClassName('accordion__name');
//
// function acButtonClick() {
//   magPic.scrollIntoView({ block: 'center', behavior: 'smooth'});
// };
//
// acButton.addEventListener('click', acButtonClick);

// third way - not work.
// var hiddenElement = document.getElementById("box");
// var btn = document.querySelector(".btn");
//
// function handleButtonClick() {
//   hiddenElement.scrollIntoView({ block: "center", behavior: "smooth" });
// }
//
// btn.addEventListener("click", handleButtonClick);

// fourth way - suxes!
const smoothLinks = document.querySelectorAll('.accordion__name');
for (let smoothLink of smoothLinks) {
  smoothLink.addEventListener('click', function (e) {
    e.preventDefault();
    const magPic = smoothLink.getElementsByClassName('magazine__content');

    document.querySelector('.magazine__content-active').scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
}
