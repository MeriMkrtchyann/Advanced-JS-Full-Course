function unshift(arr , ...value){


    for(let j = arr.length - 1 ; j >= 0 ; j--){

        for (let i = arr.length ; i >= 0; i--){

            arr[i] = arr[i - 1]
        }
        
        arr[0] = value[j]
        value.length--

    }

    return arr.length

}

const arr = [1,2,3,4]
console.log(unshift(arr , 5,6,7,8))
console.log(arr)

