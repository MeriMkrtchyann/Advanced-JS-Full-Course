"use strict"

function Immutable (obj){

    return Object.freeze(obj)

}

const obj = {
    name : "Meri",
    age : 24
}

let a = new Immutable (obj)

a.surName = "Mkrtchyan"

console.log(a)