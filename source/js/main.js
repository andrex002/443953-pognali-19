const mainNav = document.querySelector('.main-nav');
const mainNavToogle = document.querySelector('.main-nav__toogle');
const showTariffs = document.querySelector('.add-yourself__business-tariff');
const businessModal = document.querySelector('.business-modal');
const businessModalClose = document.querySelector('.business-modal__close-btn');
const selectCountryToogle = document.querySelectorAll('.select-country__arrow-block');
const selectCountryBlock = document.querySelectorAll('.select-country__head');
const filterCountry = document.querySelector('.filter-country');
const filterCountryToggle = document.querySelector('.filter-country__toogle');
const btnCloseCountryFilter = document.querySelector('.list-countries__btn-close');
const filterTitle = document.querySelectorAll('.filter__title');
const filter = document.querySelectorAll('.filter');
let openedMenu = true;
mainNav.classList.remove('main-nav--no-js');
mainNavToogle.addEventListener('click', function() {
  document.body.style.overflow = openedMenu ? 'hidden' : '';
  mainNav.classList.toggle('main-nav--opened');
  mainNav.classList.toggle('main-nav--closed');
  openedMenu = !openedMenu;
});
window.onscroll = function() {
  if(window.scrollY > mainNav.clientHeight) {
      mainNav.classList.add('main-nav--scrolled');
  } else {
      mainNav.classList.remove('main-nav--scrolled');
  }
};
if(showTariffs) {
    showTariffs.addEventListener('click', function(evt) {
    evt.preventDefault();
    document.body.style.overflow = 'hidden';
    businessModal.style.display = 'block';
  });
  businessModalClose.addEventListener('click', closeTariffs);
  window.addEventListener('keydown', function(evt) {
    if(evt.keyCode === 27) {
      closeTariffs(evt);
    }
  });
}
if(selectCountryBlock) {
  for(let i = 0; i < selectCountryToogle.length; i++) {
    selectCountryToogle[i].addEventListener('click', function() {
      selectCountryBlock[i].classList.toggle('select-country__head--opened');
    });
  }
}
if(filterCountryToggle || btnCloseCountryFilter) {
  filterCountryToggle.addEventListener('click', closeFilterCountry);
  btnCloseCountryFilter.addEventListener('click', closeFilterCountry);
}
let filterClickHandler = function(toggler, filter) {
  toggler.addEventListener('click', function() {
    filter.classList.toggle('filter--closed');
  });
};
if(filter) {
  for(let i = 0; i < filter.length; i++) {
    filterClickHandler(filterTitle[i], filter[i]);
  }
}
function closeTariffs(evt) {
  evt.preventDefault();
  businessModal.style.display = 'none';
  document.body.style.overflow = '';
}
function closeFilterCountry(evt) {
  evt.preventDefault();
  filterCountry.classList.toggle('filter-country--opened');
  filterCountry.classList.toggle('filter-country--closed');
}
