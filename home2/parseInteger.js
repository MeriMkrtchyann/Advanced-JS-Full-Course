function arseInteger(arr) {

  let nowArr = arr.map((value) => isNaN(+value) ? null : +value)

  return nowArr

}


console.log(arseInteger(["1", "2", "AB", "34"])); // [1, 2, 34]; 


