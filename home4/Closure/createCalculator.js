function createCalculator(command){

    let _command = command

     function callBack (num1 , num2){

        const obj = {

            add ()  {
                return num1 + num2
            },
            multiply ()  {
                return num1 * num2
            },
            subtract ()  {
                return num1 - num2
            },
            divide ()  {
                return num1 / num2
            },

        }

        return obj[_command]()
        
    }
    return callBack
    
}


const add = createCalculator("add");
console.log(add(3, 5)); // Output: 8

const multiply = createCalculator("multiply");
console.log(multiply(1, 4)); // Output: 8

const subtract = createCalculator("subtract");
console.log(subtract(5, 3)); // Output: 

const divide = createCalculator("divide");
console.log(divide(10, 2)); // Output: 