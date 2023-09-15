/*
Create a deep clone of an object while preserving property descriptors. Ensure that the cloned object
has the same property attributes as the original.
*/
let obj = { }

Object.defineProperties(obj , {
    name : {
        "value" : "Meri",
        "writable" : false,
        "enamerable" : true,
        "configurable" : true,
    },
    age : {
        "value" : 24,
        "writable" : false,
        "enamerable" : true,
        "configurable" : true,
    }
})

let clone = Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj))

console.log(Object.getOwnPropertyDescriptor(clone , "name"))
console.log(Object.getOwnPropertyDescriptor(clone , "age"))




