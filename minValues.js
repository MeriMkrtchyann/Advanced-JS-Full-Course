/*Տրված է թվերի մատրիցա (nxm), դրս բերել բոլոր տողերի մինիմմներից բաղկացած զանգվածը*/

const arr = [[1,2],[3,4],[1,3]]

function minMax(arr){

    let minArr = []

    for (let i = 0 ; i < arr.length ; i++){
        
        min = checkMin(arr[i])
        minArr.push(min)
        
   }
   return minArr
}

 
function checkMin ( index ){

    let minValue = Infinity

    for (let j = 0 ; j < index.length; j++){ 
        if (minValue > index[j]){
            minValue = index[j]
        } 
    }

    return minValue
}

console.log(minMax(arr))

