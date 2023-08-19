/*Տրված է տողերի մատրիցա (nxm) եւ բառ: Հայտնաբերել արդյոք բառը գոյթյն նի
մատրիցայմ թե ոչ*/

const myMatric = [
                ["m", "c", "a"],
                ["x", "y", "a"],
                ["y", "oc", "t"]
               ]

const myWord = "cat"

function serchWord (matric , myWord) {

    let out  = false

    for (let i = 0 ; i < matric.length ; i++) {
        for (let j = 0 ; j < matric[i].length ; j++){
            if (matric[i][j] === myWord[0] && checkLength(i , j , myWord.length , matric.length , matric[i].length) ){
                for (let myWordIndex = 1 ; myWordIndex < myWord.length ; myWordIndex++){
                    let tar = myWord[myWordIndex]
                    if (matric[i+1][j] === tar ){
                        
                        out = true
                        break
                    }else if (matric[i][j + 1] === myWord[myWordIndex] ){
                        out = true

                    }
                }
            }
        }
    }
    return out 
}

function checkLength (i , j , myWordLength , iLength , jLength) {
    if (i + myWordLength - 1 <= iLength || j + myWordLength - 1 <= jLength ){
        return true
    }
}

console.log(serchWord(myMatric, myWord))