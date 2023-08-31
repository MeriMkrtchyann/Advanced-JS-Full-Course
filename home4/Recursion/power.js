function power(num1 , num2){

    if (num2 < 2){
        return 2
    }
    
    return num1 * power(num1, num2 - 1)
    
}


console.log(power(2, 3)); // Output: 8