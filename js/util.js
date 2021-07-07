export function rnd(min, max, precision) {
  if (min >= 0 && max >= min) {
    const value = Math.random();
    return value.toFixed(precision);
  }
}

export function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function getRandomArrayItem(array) {
  const index = random(0, array.length - 1);
  return array[index];
}

export function shuffleArraySlice(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const swapIndex = random(0, i);
    const currentItem = array[i];
    array[i] = array[swapIndex];
    array[swapIndex] = currentItem;
  }
  return array.slice(0, random(0, array.length));
}
