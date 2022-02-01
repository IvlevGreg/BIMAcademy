let page = document.querySelector('.nav-list__input');
let page2 = document.querySelector('.btn-reset');
let page3 = document.querySelector('.closed-btn');
let page4 = document.querySelectorAll ('.nav-list__item-link');
let themeButton = document.querySelector('.search-btn');
  themeButton.onclick = function() {
  page.classList.toggle('nav-list__input--active');
  page2.classList.toggle('search-btn--active');
  page3.classList.toggle('search-btn--active');
  page4.classList.add('.nav-list__item-link--search');

  // page.classList.remove('nav-list__input--active');
  // page.classList.toggle('nav-list__input');
};

let themeButton2 = document.querySelector('.closed-btn');
  themeButton2.onclick = function() {
  page.classList.toggle('nav-list__input--active');
  page2.classList.toggle('search-btn--active');
  page3.classList.toggle('search-btn--active');
  page4.classList.remove('.nav-list__item-link--search');
// let page2 = document.querySelector('.btn-reset');
// let themeButton2 = document.querySelector('.btn-reset');
// themeButton2.onclick = function() {
//   page2.classList.toggle('search-btn--active');
};
