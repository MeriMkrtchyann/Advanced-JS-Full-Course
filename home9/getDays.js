function getDays(day){

    const arrDay = ["Sunday", "Monday", "Tuesday","Wednesday", "Thursday", "Friday",  "Saturday"]
    const myDay = new Date(day)
    return(arrDay[myDay.getDay()])
    
}

console.log(getDays("12/07/2016"))