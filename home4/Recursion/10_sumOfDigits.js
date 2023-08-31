function sumOfDigits(number){

    if (number >= 0 && number <= 9){
        return number
    }

    let nowNumber = number % 10
    number = (number - nowNumber) / 10
    return nowNumber + sumOfDigits(number)

    
}
