const typesMap = {
  flat: 'Квартира',
  bungalo: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};

const advTemplate = document.querySelector('#card').content;

export function similarAdv(adv) {
  const advElement = advTemplate.cloneNode(true);
  advElement.querySelector('.popup__title').textContent = adv.offer.title;
  advElement.querySelector('.popup__text--address').textContent = adv.offer.address;
  advElement.querySelector('.popup__text--price').textContent = `${adv.offer.price  } ₽/ночь`;
  advElement.querySelector('.popup__type').textContent = typesMap[adv.offer.type];
  advElement.querySelector('.popup__text--capacity').textContent = `${adv.offer.rooms  } комнаты для ${  adv.offer.guests  } гостей`;
  advElement.querySelector('.popup__text--time').textContent = `Заезд после ${  adv.offer.checkin  }, выезд до ${  adv.offer.checkout}`;
  const modifiers = adv.offer.features.map((feature) => `popup__feature--${feature}`);
  advElement.querySelectorAll('.popup__features').forEach((item)=>{
    if (! modifiers.includes(item.classList[1])){
      item.remove();
    }
  });
  advElement.querySelector('.popup__description').textContent = adv.offer.description;
  advElement.querySelector('.popup__photos').textContent = adv.offer.photos.map((photo) => `<img src = '${photo}'>`);
  advElement.querySelector('.popup__avatar').src = adv.author.avatar;
  document.querySelector('#map-canvas').appendChild(advElement);
}

