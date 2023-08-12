function find (arr , fun){

    for (let i = 0; i < arr.length; i++){
        if (fun(arr[i]) === true){
            return arr[i]
        }
    }

    return undefined

}

const arr = [1,5,8,12,13,7]

console.log(find(arr , (value) => value > 10))