/*. Write a function that caches the duplication of result of a calculation using closure*/

function createCachingFunction() {

    let obj = {}
  
    return function callBack(number) {
  
      if (obj.hasOwnProperty(number)) {
        return (`${obj[number]} (cached)`)
      } 

      obj[number] = number * 2
      return (`${obj[number]} (calculated)`)
      
    }
  }
  
  const cachedCalculation = createCachingFunction();
  console.log(cachedCalculation(5)); // Output: 10 (calculated)
  console.log(cachedCalculation(5)); // Output: 10 (cached)
  