const arr = [1, 2, 3, 4, 5]

function reduce(arr, fun, start) {

  let i = 0

  if (start === undefined) {
    start = arr[0]
    i++
  }

  while ( i < arr.length) {
    start = fun(start, arr[i])
    i++
  }

  return start

}

function callBack(acc, value) {

  return acc + value

}

console.log(reduce(arr, (callBack), 1))


