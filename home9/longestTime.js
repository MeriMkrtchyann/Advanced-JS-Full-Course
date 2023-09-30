
function longestTime(h, m, s){

    const hours = h * 60 * 60
    const minutes = m * 60
    const seconds = s 

    switch (Math.max(hours, minutes, seconds)){
        case  hours :
            return h ;
        case  minutes :
            return m ;
        case  seconds :
            return s ;
    }
}

console.log(longestTime(1, 59, 3598))
console.log(longestTime(2, 300, 15000))
console.log(longestTime(15, 955, 59400))
