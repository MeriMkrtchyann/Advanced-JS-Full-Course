const nestedArray = [1, [2, [3, 4], 5], 6]; 


function flattenArray(arr){

    return arr.reduce((sum , element) =>  sum.concat(Array.isArray(element) ? flattenArray(element) : element ), [])

}


console.log(flattenArray(nestedArray)); // Output: [1, 2, 3, 4, 5, 6]
