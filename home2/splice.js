function splice(arr, startIndex, count, ...value) {

  const saveArrValue = []
  const deleteValue = []

  if (count < 0) {
    count = 0
  }

  if (startIndex < 0 && startIndex >= -arr.length) {
    startIndex = arr.length + startIndex
  } else if (startIndex < -arr.length) {
    startIndex = 0
  } else if (startIndex > arr.length) {
    startIndex = arr.length
  }

  for (let i = 0; i < arr.length; i++) {
    if (i >= startIndex && i < startIndex + count) {
      deleteValue.push(arr[i])
    }
    if (i >= startIndex + count) {
      saveArrValue.push(arr[i])
    }
  }

  arr.length = startIndex

  arr.push(...value)
  arr.push(...saveArrValue)

  return arr

}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let arr1 = ["a", "b"]

console.log(splice(arr, -5, 2, "a", "b"))


