function removeDuplicates(arr){

    const nowArr = new Set (arr)
    return nowArr

}

const arr = [1,2,3,4,1,2,9]

console.log(removeDuplicates(arr))