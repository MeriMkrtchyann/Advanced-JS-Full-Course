/*Տրված է հավասարաչափ մատրիցա (nxm). շրջել մատրիցան այնպես որ տողերը դառնան
սյներ, իսկ սյները՝ տողեր*/

const arr = [[1,2,3], 
              [4,5,6],
              [7,8,9]]

let nowArr = []


function fun(arr){

    for (let i = 0 ; i < arr.length; i++) {
        let myArr =[]
        for (let j = 0 ; j < arr[i].length; j++) {
            
            myArr.push(arr[j][i])
        }
        nowArr.push(myArr)
    }
    
    return nowArr
}

console.log(JSON.stringify(fun(arr)))
