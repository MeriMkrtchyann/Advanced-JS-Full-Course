/*Given an array, return the sum of numbers that are 18 or over.*/

function filterNumbers(arr) {

  return arr.filter(value => value >= 18).reduce((value, sum) => sum + value)
}

const arr = [1, 22, 55, 166, 5, 366, 11, 205, 333, 95, 62, 10, 43];

console.log(filterNumbers(arr));
