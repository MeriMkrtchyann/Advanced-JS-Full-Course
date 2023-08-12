function some(arr, fun) {

  const nowArr = []

  for (let i = 0; i < arr.length; i++) {
    if (fun(arr[i]) === true) {
      return true
    }
  }

  return false

}

const arr = [5, 6, 7, 8, 9]

console.log(some(arr, (value => value > 7)))