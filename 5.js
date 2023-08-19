/*Տրված է քառակսաձեւ մատրիցա(nxn), վերադարձնել նորը, որտեղ կլինեն միայն այն
տողերն  սյները որոնց գմարը չի գերազանցի նշված k թիվը*/

const array =[[1,2,3], [4,5,6],[7,8,9]]

function check(arr , number){
    
    return (loop2(arr , number) )
    
}

/*
function loop (arr , number){

    let nowArr = []
    for (let i = 0 ; i < arr.length ; i++){
        for (let j = 0 ; j < arr[i].length ; j++){
            loop2(x[j][i] , number)
        }
    }
    return nowArr
   
}
*/
function loop2(value , number){

        let sum = 0
        let row = []

        
        row.push(value)
        sum += value
        

        if (comparison(sum , number)){
            nowArr.push(row)
        }

        return row
   
}

function comparison(sum , number){

    return sum > number
         
}

/*
function loop1(arr , number){

    let nowArr = []

    for (let i = 0 ; i < arr.length ; i++){
     
        let sum = 0

        for (let j = 0 ; j < arr[i].length ; j++){
            sum += arr[i][j]
        }

        if (comparison(sum , number)){
            nowArr.push(arr[i])
        }

    }
    return nowArr
   
}
*/


console.log(JSON.stringify(check(array , 10)))
