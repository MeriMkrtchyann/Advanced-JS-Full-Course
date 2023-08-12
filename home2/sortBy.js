function sortBy(arr, sortType) {

  if (sortType === "Desc") {
    return arr.sort((a, b) => { return b - a })
  } else {
    return arr.sort((a, b) => { return a - b })
  }

}

console.log(sortBy([4, 3, 222, 1], "Asc")); // [1, 2, 3, 4] 
console.log(sortBy([7, 8, 11, 66])); // [7, 8, 11, 66] 
console.log(sortBy([7, 8, 11, 66], "Desc")); // [66, 11, 8, 7]