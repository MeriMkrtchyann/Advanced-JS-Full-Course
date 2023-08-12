function filter(arr, fun) {

  const copyArr = []

  for (let i = 0; i < arr.length; i++) {
    if (fun(arr[i]) === true) {
      copyArr.push(arr[i])
    }
  }

  return copyArr

}

const arr = [1, 2, 3, 4, 6, 8]

console.log(filter(arr, (value) => value % 2 === 0))
console.log(arr)