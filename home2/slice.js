function slice(arr, start, end) {

  const nowArr = []

  const startValue = start === undefined ? arr[0] : start
  const endValue = end === undefined ? arr[arr.length - 1] : end

  for (let i = startValue; i < endValue; i++) {
    nowArr.push(arr[i])
  }

  return nowArr

}

const arr = [1, 2, 3, 4, 5, 6]

console.log(slice(arr, 2, 5))
