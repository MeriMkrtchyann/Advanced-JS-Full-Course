function countOccurrences( arr , number){

    if (arr.length === 0){
        return 0
    }
    
    if (arr[0] === number){
        return 1 + countOccurrences(arr.slice(1) , number)
    }
    
    return countOccurrences(arr.slice(1) , number)
    

}


const numbers = [2, 3, 4, 2, 5, 2, 6, 2]; 

console.log(countOccurrences(numbers, 2)); // Output: 4