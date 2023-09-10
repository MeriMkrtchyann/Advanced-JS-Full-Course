function myNew (constructor , ...args) {

    const nowObj = {} 

    Object.setPrototypeOf(nowObj , constructor.prototype)

    const result = constructor.call(nowObj , ...args)

    return typeof result === "object" ? result : nowObj
}

 function Constructor (...args) {
    [this.name , this.age ] = args
}

const myArray = myNew ( Constructor , "Meri" , "24")
console.log(myArray)










