function findIndex (arr , fun){

    for (let i = 0; i < arr.length; i++){
        if (fun(arr[i]) === true){
            return i
        }
    }

    return -1

}

const arr = [1,5,8,12,13,7]

console.log(findIndex(arr , (value) => value === 0))