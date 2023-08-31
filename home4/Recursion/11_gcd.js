function gcd(num1 , num2){

    if (num1 < num2){
        num1 = num1 + num2
        num2 = num1 - num2
        num1 = num1 - num2
    }

    if (num2 === 0 ){
        return num1
    }

    return gcd (num2 , num1 % num2)

}

console.log(gcd(18,48)); // Output: 6

