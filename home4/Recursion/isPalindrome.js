function isPalindrome(text){

    if (text.length < 2){
        return true
    }

    if (text[0] !== text[text.length - 1]){
        return false;
    } 
    
    return isPalindrome(text.slice(1, -1) )
    
}


console.log(isPalindrome("raccar")); // Output: true
console.log(isPalindrome("hello")); // Output: false