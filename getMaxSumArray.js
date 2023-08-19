/* Տրված է թվերի մատրիցա(զանվածների երկարթյնը կարող է տարբեր լինել) 
գտնել ամենամեծ գմարը նեցող array-ի ինդեքսը:*/

const arr = [[1,2],[3,4],[1,3]]

function getMaxSumArray(arr){

    let max = -Infinity
    let maxIndex = 0

   for (let i = 0 ; i < arr.length ; i++){

        let sum = 0

        for (let j = 0 ; j < arr[i].length; j++){
            sum += arr[i][j]
        }

        if (max < sum){
            max = sum
            maxIndex = i
        }
   }
    
   return maxIndex
}

console.log(getMaxSumArray(arr))

