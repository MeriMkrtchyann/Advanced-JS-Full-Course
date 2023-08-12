function push(arr, ...value) {


  for (let i = 0; i < value.length; i++) {

    arr[arr.length] = value[i];

  }

  return arr.length

}

const arr = [1, 2, 3, 4]
console.log(push(arr, 5, 6, 7, 8))
console.log(arr)


