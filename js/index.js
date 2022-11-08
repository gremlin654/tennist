import './slider.js';

const descriptionBtn = document.querySelector('#description-btn');
const descriptionText = document.querySelector('#description-text');
const descriptionBtn2 = document.querySelector('#description-btn2');
const descriptionText2 = document.querySelector('#description-text2');
const descriptionBtn3 = document.querySelector('#description-btn3');
const descriptionText3 = document.querySelector('#description-text3');

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
