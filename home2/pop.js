function pop(arr, fun) {

  if (arr.length === 0) {
    return undefined
  }

  lastValue = arr[arr.length - 1]

  arr.length = arr.length - 1

  return lastValue

}

const array = [1, 2, 3, 4]

console.log(pop(array))
console.log(array)