function reverseString (s){
    try {
        return s.split('').reverse().join("") 
    } catch (err) {
        console.error(`An exception occurred: ${err.message}`)
        return s
    }  
}

console.log(reverseString("Meri Mkrtchyan"))