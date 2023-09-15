function isPositive (a) {
    if (a > 0){
        console.log("Yes")
        return
    }
    try {
        if (a === 0){
           throw new Error("Zero Error")
        }
        throw new Error("Negative Error")
    }catch(err){
        console.error(`Error with message = ${err.message}`)   
    }
}

isPositive(-1)

