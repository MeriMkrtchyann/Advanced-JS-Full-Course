/*Given an array, return a new array that only includes the numbers*/

const arr = [1, 2, "a", true, {}, undefined, 55, false, "hi", null, 166, NaN];//[1, 2, 55, 166]

function onlyNumber(arr) {

  let nowArr = arr.filter(value => {
    return typeof (value) === "number" && !(isNaN(value))
  })

  return nowArr

}

console.log(onlyNumber(arr))