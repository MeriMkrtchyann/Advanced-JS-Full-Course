function monthsInterval (date1 , date2){

    let arrManth = ["Jenuary" , 
                    "Febuary" , "Mar" , "Apr", 
                    "May", "Jun", "Jul", "Aug", 
                    "Sep", "Oct", "Nov",
                    "December"]

    let nowArrManths = []

    let dateStart = date1 < date2 ? date1 : date2
    let dateEnd = date1 > date2 ? date1 : date2

    const startManth = dateStart.getMonth()
    const endManth = dateEnd.getMonth()
    const yearStart = dateStart.getFullYear()
    const yearEnd = dateEnd.getFullYear()

    if ((yearEnd - yearStart > 1 ) || (yearEnd - yearStart === 1 && endManth >= startManth) ){
        nowArrManths.push(...arrManth)
        return nowArrManths
    }

    if (yearEnd === yearStart){
        if (startManth === endManth){
            nowArrManths.push(arrManth[startManth])
            return nowArrManths
        } else if (startManth > endManth){
            let max = startManth
            startManth = endManth
            endManth = max
        }
        nowArrManths = arrManth.slice(startManth , endManth + 1)
        return nowArrManths
    }

    if (yearEnd - yearStart === 1 && startManth > endManth){
        let newManth = arrManth.slice(startManth)
        nowArrManths.push(arrManth[endManth] , ...newManth)
        return nowArrManths
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