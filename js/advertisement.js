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
  if (adv.offer.price !== undefined){
    advElement.querySelector('.popup__text--price').textContent = `${adv.offer.price  } ₽/ночь`;
  }
  advElement.querySelector('.popup__type').textContent = typesMap[adv.offer.type];
  if (adv.offer.rooms !== undefined){
    advElement.querySelector('.popup__text--capacity').textContent = `${adv.offer.rooms  } комнаты для ${  adv.offer.guests  } гостей`;
  }
  if (adv.offer.checkin !== undefined || adv.offer.checkout !== undefined){
    advElement.querySelector('.popup__text--time').textContent = `Заезд после ${  adv.offer.checkin  }, выезд до ${  adv.offer.checkout}`;
  }
  if (adv.offer.features !== undefined){
    const modifiers = adv.offer.features.map((feature) => `popup__feature--${feature}`);
    advElement.querySelectorAll('.popup__features').forEach((item)=>{
      if (! modifiers.includes(item.classList[1])){
        item.remove();
      }
    });
  }
  advElement.querySelector('.popup__description').textContent = adv.offer.description;
  if (adv.offer.photos !== undefined){
    advElement.querySelector('.popup__photos').innerHTML = adv.offer.photos.map((photo) => `<img src='${photo}' class="popup__photo" width="45" height="40"`).join('');
    advElement.querySelector('.popup__avatar').src = adv.author.avatar;
    document.querySelector('#map-canvas').appendChild(advElement);
  }
}
