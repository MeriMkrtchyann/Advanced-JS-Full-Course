function mapPromise(myPromise , calBack){
    return new Promise(function(resolve, reject){
        myPromise.catch(err => reject(err))
                 .then(value => resolve(calBack(value)))
    })  
}

const timesTwo = (val) => val * 2

const myPromise1 = new Promise((resolve, reject) => { resolve(4) })
const myPromise2 = new Promise((resolve, reject) => { reject(new Error("Invalid promise")) })

mapPromise(myPromise1, timesTwo).then(result => console.log(result))
                                .catch(err => console.log(err.message))

mapPromise(myPromise2, timesTwo).then(result => console.log(result))
                                .catch(err => console.log(err.message))

