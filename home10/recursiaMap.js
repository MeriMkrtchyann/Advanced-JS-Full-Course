const map = new Map()

function isPalindrome(text){

    if (map.has(text)){
        return map.get(text)
    }

    if (text.length < 2){
        return true
    }

    if (text[0] !== text[text.length - 1]){
        return false
    } 
    
    return isPalindrome(text.slice(1, -1))
     
}

let text1 = "baab"
let text2 = "faba"
let text3 = "baab"
map.set(text1 , isPalindrome(text1))
map.set(text2 , isPalindrome(text2))
map.set(text3 , isPalindrome(text3))
console.log(map)
