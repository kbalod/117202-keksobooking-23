//На месте карты отображается серый прямоугольник.
//Форма заполнения информации об объявлении .ad-form содержит класс ad-form--disabled;
//Все интерактивные элементы формы .ad-form должны быть заблокированы с помощью атрибута disabled, добавленного на них или на их родительские блоки fieldset;
//Форма с фильтрами .map__filters заблокирована так же, как и форма .ad-form — на форму добавлен специальный класс, а на её интерактивные элементы атрибуты disabled;

const adform = document.querySelector('.ad-form');
const fieldset = document.querySelectorAll('.fieldset');
const mapfilter = document.querySelector('.map__filters');
const select = document.querySelectorAll('.select');

function inactiveState(){
  adform.classList.add('ad-form--disabled');
  fieldset.setAttribute('disabled', 'disabled');
  mapfilter.classList.add('map__filters--disabled');
  select.setAttribute('disabled', 'disabled');
}

function activateState(){
  adform.classList.remove('ad-form--disabled');
  fieldset.removeAttribute('disabled');
  mapfilter.classList.remove('map__filters--disabled');
  select.removeAttribute('disabled');
}

console.log(inactiveState, activateState);
