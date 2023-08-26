function createCounter(){

    let _number = 1

    return () => _number++;

}

const counter = createCounter()

console.log(counter()); // Output: 1
console.log(counter()); // Output: 2