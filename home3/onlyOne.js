/*Տրված է քառակսաձեւ մատրիցա (nxn) բաղկացած զրոներից եւ մեկերից. գտնել միայն
մեկերից բաղկացած ամենամեծ ներդրված քառակսաձեւ(kxk) մատրիցայի երկարթյնը
(k).
*/

const matric = [
    [0,1,1,1],
    [0,1,1,1],
    [0,1,1,1],
    [1,0,1,1]
]

function onlyOne(arr){

    const copy = [
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0]
    ]

    let max = 0

    for (let j = 0 ; j < arr.length ; j++){
        if (arr[0][j] === 1 ){
            copy[0][j] = 1
        }
        if (arr[j][0] === 1 ){
            copy[j][0] = 1
        }
    }

    for (let i = 1 ; i < arr.length ; i++){
        for (let j = 1 ; j < arr.length ; j++){
            if (arr[i][j]!== 0 ){
                copy[i][j] = (Math.min(copy[i-1][j-1] , copy[i-1][j] ,copy[i][j-1]) + 1)
                if (max < copy[i][j]){
                    max = copy[i][j]
                }
            } 
        }
    }

    return max

}

console.log(JSON.stringify(onliOne(matric)))