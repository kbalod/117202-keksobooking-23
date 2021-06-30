//Координаты карты
const MIN_X = 35;
const MAX_X = 35;
const MIN_Y = 139;
const MAX_Y = 139;
const NumZero = 5;
const TITLES = ['1', '2', '3'];
const APARTMENT_TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const MIN_ROOM_NUMBER = 1;
const MAX_ROOM_NUMBER = 5;
const MIN_GUAESTS_ALLOWED = 1;
const MAX_GUAESTS_ALLOWED = 5;
const CHECK_IN_TIMES = ['12:00', '13:00', '14:00'];
const CHECK_OUT_TIMES = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS_URL = ['https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg', 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'];
const MIN_PRICE = 1;
const MAX_PRICE = 100;
const object = [];

function rnd(min, max, precision) {
  if (min >= 0 && max >= min) {
    const value = Math.random();
    return value.toFixed(precision);
  }
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomArrayItem(array) {
  const index = random(0, array.length - 1);
  return array[index];
}

function shuffleArraySlice(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const swapIndex = random(0, i);
    const currentItem = array[i];
    array[i] = array[swapIndex];
    array[swapIndex] = currentItem;
  }
  return array.slice(0, random(0, array.length));
}

function getRandomApartment(index) {
  let avatarUrl = '';

  if (index < 10) {
    avatarUrl = 'img/avatars/user0' + index + '.png';
  } else {
    avatarUrl = 'img/avatars/user' + index + '.png';
  }
  const result = {
    'author': {
      'avatar': avatarUrl,
    },
    'offer': {
      'title': getRandomArrayItem(TITLES),
      'address': '',
      'price': random(MIN_PRICE, MAX_PRICE),
      'type': getRandomArrayItem(APARTMENT_TYPES),
      'rooms': random(MIN_ROOM_NUMBER, MAX_ROOM_NUMBER),
      'guests': random(MIN_GUAESTS_ALLOWED, MAX_GUAESTS_ALLOWED),
      'checkin': getRandomArrayItem(CHECK_IN_TIMES),
      'checkout': getRandomArrayItem(CHECK_OUT_TIMES),
      'features': shuffleArraySlice(FEATURES),
      'description': '',
      'photos': shuffleArraySlice(PHOTOS_URL),
    },
    'location': {
      lat: rnd(MIN_X, MAX_X, NumZero),
      lng: rnd(MIN_Y, MAX_Y, NumZero),
    },
  };
  result.offer.address = result.location.lat + ', ' + result.location.lng;

  return result;
}

for (let i = 1; i <= 10; i++) {
  const apartment = getRandomApartment(i);
  object.push(apartment);
}
