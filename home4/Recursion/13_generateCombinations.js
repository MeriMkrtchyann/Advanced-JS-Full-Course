function generateCombinations(arr, n  , nowArr = [] , investedArr = [] , start = 0) {


    if (investedArr.length === n) {
        return nowArr.push([...investedArr])          
    }

    for (let i = start ; i < arr.length; i++) {
        investedArr.push(arr[i])
        generateCombinations(arr, n , nowArr , investedArr , i + 1  )
        investedArr.pop()    
    }

    return nowArr
    
}

console.log (JSON.stringify(generateCombinations([1, 2, 3, 4], 2)));


