function privateVariable(number){

    let _number = number

    const obj = {
    
        get () {
            return _number ;
        },

        set (value){
            return _number = value
        }
       
    };

    return obj

}

const secretValue = privateVariable(42);

console.log(secretValue.get()); // Output: 42
secretValue.set(100);
console.log(secretValue.get()); // Output: 100
