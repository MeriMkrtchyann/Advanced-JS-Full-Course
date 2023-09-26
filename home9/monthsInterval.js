function monthsInterval (date1 , date2){

    let arrMonth = ["Jenuary" , "Febuary" , "Mar" , "Apr", "May", 
                    "Jun", "Jul", "Aug", "Sep", "Oct", "Nov","December"]

    let nowArrMonths = []

    let dateStart = date1 < date2 ? date1 : date2
    let dateEnd = date1 > date2 ? date1 : date2

    const startMonth = dateStart.getMonth()
    const endMonth = dateEnd.getMonth()
    const yearStart = dateStart.getFullYear()
    const yearEnd = dateEnd.getFullYear()

    if ((yearEnd - yearStart > 1 ) || (yearEnd - yearStart === 1 && endMonth >= startMonth) ){
        nowArrMonths.push(...arrMonth)
        return nowArrMonths
    }

    if (yearEnd === yearStart){
        if (startMonth === endMonth){
            nowArrMonths.push(arrMonth[startMonth])
            return nowArrMonths
        } else if (startMonth > endMonth){
            let max = startMonth
            startMonth = endMonth
            endMonth = max
        }
        nowArrMonths = arrMonth.slice(startMonth , endMonth + 1)
        return nowArrMonths
    }

    if (yearEnd - yearStart === 1 && startMonth > endMonth){
        let newMonth = arrMonth.slice(startMonth)
        nowArrMonths.push(arrMonth[endMonth] , ...newMonth)
        return nowArrMonths
    }

}

let january = new Date(2017, 7, 1); 
let march = new Date(2017, 0, 1); 
console.log(monthsInterval(january, march))

let december = new Date(2017, 11, 1); 
let january1 = new Date(2018, 0, 1); 
console.log(monthsInterval(december, january1))

let january2017 = new Date(2017, 0, 1); 
let january2018 = new Date(2018, 0, 1);
console.log(monthsInterval(january2017, january2018))