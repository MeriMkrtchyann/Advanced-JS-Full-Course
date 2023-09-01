function permutations (text){

    if (text.length < 2){
        return text
    }

    const permutationsArray = []

    for (let i = 0 ; i < text.length ; i++){

        let firts = text[i]
        
        if (text.indexOf(firts) !== i){
            continue
        }

        let otherLetters = text.slice(0 , i) + text.slice(i + 1)

        for (let permutation of permutations(otherLetters)){
            permutationsArray.push(firts + permutation)
        }
    }

    return permutationsArray

}

console.log(permutations("hello"));