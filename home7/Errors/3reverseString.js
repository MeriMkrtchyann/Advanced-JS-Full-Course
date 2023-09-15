function reverseString(s) {
    try {
        if (typeof s === "string"){
            return s.split("").reverse().join("")
        }
        throw new Error("s.split is not a function")
    } catch (err){
        console.error(err.message)
        return s
    }
}

console.log(reverseString("barev"))
console.log(reverseString(24))