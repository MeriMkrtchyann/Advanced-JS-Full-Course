/*
/*Տրված է տողերի մատրիցա (nxm) եւ բառ: Հայտնաբերել արդյոք բառը գոյթյն նի
մատրիցայմ թե ոչ

*/



const myMatric = [
    ["", "a", "t"],
    ["x", "c", "a"],
    ["y", "b", "t"]
   ]

const myWord = "cat"

function serchWord(arr , word){

    let text = ""

    for (let i = 0 ; i < arr.length ; i++){
        for (let j = 0 ; j < arr[i].length ; j++){
        let wordIndex = 0
            if (arr[i][j] === word[0]){
                text += arr[i][j]
                wordIndex++
                let s = 0
                while (wordIndex < word.length){
                
                    if (arr[i][j+1] === word[wordIndex]){
                        text += word[wordIndex]
                        j++
                        wordIndex++
                        s++
                    }else if(arr[i + 1][j] === word[wordIndex]){
                        if (s > 0){
                            text = ""
                        }
                        text += word[wordIndex]
                        i++
                        wordIndex++
                    }else {
                        text = ""
                        break
                    }     
                }
            return text === word
            }
        }
    }
    return false
}



console.log(serchWord(myMatric, myWord))