import {getRandomApartment} from './data.js';
import {similarAdv} from './advertisement.js';
const object = [];

for (let i = 1; i <= 10; i++) {
  const apartment = getRandomApartment(i);
  object.push(apartment);
}

similarAdv(object);

