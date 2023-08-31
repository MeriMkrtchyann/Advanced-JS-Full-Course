function binarySearch(arr , number){

    

    if (arr[arr.length-1] === number){
        return arr.length - 1
    } 

    if (arr.length === 0){
        return -1
    }
    
    arr.pop()
    
    return binarySearch ( arr, number )

}


const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17]; 

console.log(binarySearch(sortedArray, 9)); // Output: 4
console.log(binarySearch(sortedArray, 20));