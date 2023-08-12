function shift(arr) {

  const firstValue = arr[0]

  for (let i = 0; i < arr.length - 1; i++) {

    arr[i] = arr[i + 1]

  }

  arr.length = arr.length - 1

  return firstValue
}

const arr = [1, 2, 3, 4]
console.log(shift(arr));
console.log(arr)