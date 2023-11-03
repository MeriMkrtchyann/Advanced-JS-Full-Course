function stringUpper(value){
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            if (typeof value === "string"){
                resolve(value.toUpperCase())
            }
            reject(value) 
        },500)
    })
}

stringUpper("string").then((value) => console.log(value))
                .catch((err) => console.log(err))

stringUpper(22).then((value) => console.log(value))
                .catch((err) => console.log(err))