function every(arr, fun) {

  const nowArr = []

  for (let i = 0; i < arr.length; i++) {
    if (fun(arr[i]) === true) {
      nowArr.push(arr[i])
    }
  }

  if (nowArr.length === arr.length) {
    return true
  }

  return false

}

const arr = [5, 6, 7, 8, 9]

console.log(every(arr, (value => value >= 5)))