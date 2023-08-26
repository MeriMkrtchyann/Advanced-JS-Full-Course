function memoize(callBack) {

    const obj = {}

    return function fun(number){

        if (obj.hasOwnProperty(number)) {
            return (`${obj[number]} (cached)`)
          } 
        obj[number] =  callBack(number)
        return (`${obj[number]} (calculated)`)
        
    }     
}

function fibonacci (number){

    let ferst = 0
    let second = 1
    let sum = 0

    for (let i = 2 ; i <= number ; i++){
        sum = ferst + second
        ferst = second
        second = sum
    }

    return sum
}

const memoizedFibonacci = memoize(fibonacci);
console.log(memoizedFibonacci(10)); // Output: 55 (calculated)
console.log(memoizedFibonacci(10)); // Output: 55 (cached)