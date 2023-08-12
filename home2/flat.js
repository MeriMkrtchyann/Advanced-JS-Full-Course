
function flat(arr, value = 1) {

  let resultArr = Array.from(arr)

  for (let valueIndex = 0; valueIndex < value; valueIndex++) {

    const copyArr = []
    let isArray = false

    for (let i = 0; i < resultArr.length; i++) {

      if (Array.isArray(resultArr[i])) {

        copyArr.push(...resultArr[i])
        isArray = true

      } else {
        copyArr.push(resultArr[i])
      }
    }

    if (!isArray) {
      return resultArr
    }

    resultArr.length = 0

    resultArr = copyArr
  }

  return resultArr

}

const arr = [1, 2, [[[6, 7, 8, 9]]]]

console.log(JSON.stringify(flat(arr, Infinity)))


