import {getRandomApartment} from './data';

const object = [];

for (let i = 1; i <= 10; i++) {
  const apartment = getRandomApartment(i);
  object.push(apartment);
}
