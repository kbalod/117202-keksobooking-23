function getRandomIntFromRange(min, max) {
  if (min >= 0 && max > min) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
  } else {
    console.log('error');
  }
}

console.log(getRandomIntFromRange(5, 10));

function rnd(min, max, precision) {
  if (min >= 0 && max >= min) {
  const value = Math.random();
  return value.toFixed(precision)
  }else{
    console.log('error');
  }
}

console.log(rnd(5, 10,2));

// https://basicweb.ru/javascript/js_math_random.php
