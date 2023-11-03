function squarePromise(promise) {
    return new Promise(function(resolve, reject) {
        promise.then((value) => {
            if (!isNaN(value)) {
                resolve(value ** 2)
            }
            reject(new Error(`Cannot convert ${value} a number!`))
        })
    })
}

let promice1 = new Promise(function(resolve, reject) {
    resolve("2")
})

let promice2 = new Promise(function(resolve, reject) {
    resolve("aba")
})

squarePromise(promice1).then((value) => console.log(value))
                        .catch((err) => console.log(err.message))

squarePromise(promice2).then((value) => console.log(value))
                        .catch((err) => console.log(err.message))

