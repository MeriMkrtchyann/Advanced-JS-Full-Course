function forEach(arr, fun) {

  for (let i = 0; i < arr.length; i++) {
    fun(arr[i], i, arr)
  }

}

const arr = [1, 2, 3, 4]


forEach(arr, (value, index) => {
  console.log(index, value)
})





