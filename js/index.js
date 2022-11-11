import './slider.js';

const descriptionBtn = document.querySelector('#description-btn');
const descriptionText = document.querySelector('#description-text');
const descriptionBtn2 = document.querySelector('#description-btn2');
const descriptionText2 = document.querySelector('#description-text2');
const descriptionBtn3 = document.querySelector('#description-btn3');
const descriptionText3 = document.querySelector('#description-text3');
const header = document.querySelector('.header');
const iconMenu = document.querySelector('.burger__menu');
const menuHeader = document.querySelector('.menu__list');
const menuOverlay = document.querySelector('.burger__menu-overlay');
const buttonCallback = document.querySelectorAll('[data-call]');
const modalCallback = document.querySelector('.modal__form-callback');
const closeButtons = document.querySelectorAll('[data-close]');
const buttonRequest = document.querySelectorAll('[data-request]');
const modalRequest = document.querySelector('.modal__form-request');

const addClassDescriptions = (btn, text) => {
  text.classList.toggle('descriptional-more');
  text.classList.contains('descriptional-more')
    ? (btn.innerHTML = `
  <p>Скрыть</p>
  <p>▲</p>`)
    : (btn.innerHTML = `
  <p>Подробнее</p>
  <p>▼</p>`);
};

descriptionBtn.addEventListener('click', () =>
  addClassDescriptions(descriptionBtn, descriptionText)
);

descriptionBtn2.addEventListener('click', () =>
  addClassDescriptions(descriptionBtn2, descriptionText2)
);

descriptionBtn3.addEventListener('click', () =>
  addClassDescriptions(descriptionBtn3, descriptionText3)
);

document.addEventListener('scroll', () => {
  if (scrollY > 0) {
    header.classList.add('active');
  } else header.classList.remove('active');
});

if (iconMenu) {
  iconMenu.addEventListener('click', () => {
    document.body.classList.toggle('lock');
    iconMenu.classList.toggle('active-burger');
    menuHeader.classList.toggle('active');
    menuOverlay.classList.toggle('burger__menu-overlay-active');
    header.classList.toggle('active-menu-burger');
  });
}

buttonCallback.forEach((button) =>
  button.addEventListener('click', () => {
    modalCallback.classList.toggle('active');
  })
);

closeButtons.forEach((button) =>
  button.addEventListener('click', (e) => {
    modalCallback.classList.remove('active');
    modalRequest.classList.remove('active');
  })
);

buttonRequest.forEach((button) =>
  button.addEventListener('click', () => {
    modalRequest.classList.toggle('active');
  })
);

modalCallback.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal__form-callback')) {
    modalCallback.classList.toggle('active');
  }
});

modalRequest.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal__form-request')) {
    modalRequest.classList.toggle('active');
  }
});
