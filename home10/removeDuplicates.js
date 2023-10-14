function removeDuplicates(arr){

    return [...new Set (arr)]

}

const arr = [1,2,3,4,1,2,9]

console.log(removeDuplicates(arr))