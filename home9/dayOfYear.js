function dayOfYear(date){

    const myDate = new Date(date)

    let year = myDate.getFullYear()

    let lastYearLastDay = new Date("12/31/" + (year - 1))
    let mayDay = myDate.getTime()

    let defferents = mayDay - lastYearLastDay.getTime() 
    
    defferents = Math.floor(defferents / 1000 / 60 / 60 / 24)

    return ( defferents )
}

console.log(dayOfYear("12/13/2020"))// 348