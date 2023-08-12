function map(arr, fun) {

  const nowArr = []

  for (let i = 0; i < arr.length; i++) {
    nowArr.push(fun(arr[i], i, arr))
  }

  return nowArr
}

const arr = [1, 2, 3, 4]

console.log(map(arr, (value, index) => value * 2))