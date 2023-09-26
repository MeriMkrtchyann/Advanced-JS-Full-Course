function monthsInterval (date1 , date2){

    const months = ["Jenuary" , "Febuary" , "Mar" , "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov","December"]
    let nowArr = []

    let first = date1.getMonth()
    let last = date2.getMonth()
    
    if (Math.abs(date1.getFullYear() - date2.getFullYear()) === 1 && first === last){
            nowArr.push(...months)
            return nowArr
    }else if (date1.getFullYear() === date2.getFullYear() && first <= last){
          return  nowArr = months.slice(first , last - first + 1)
    } else if (Math.abs(date1.getFullYear() - date2.getFullYear()) === 1  && first >= last){
            nowArr.push(months[last],months[first])
    }else {
        nowArr.push(...months)
    }
    return nowArr 
}


let january = new Date(2017, 0, 1); 
let march = new Date(2017, 2, 1); 
console.log(monthsInterval(january, march))//2

let december = new Date(2017, 11, 1); 
let january1 = new Date(2018, 0, 1); 
console.log(monthsInterval(december, january1))//3

let january2017 = new Date(2017, 0, 1); 
let january2018 = new Date(2018, 0, 1);
console.log(monthsInterval(january2017, january2018))//

let ba = new Date(2016, 11, 1);
let ab = new Date(2020, 3, 1);
console.log(monthsInterval(ba, ab))//3
