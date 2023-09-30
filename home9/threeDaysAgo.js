function threeDaysAgo (nowDate){

   const modifiedDate = new Date((nowDate.setDate(nowDate.getDate() - 3)))

   const year = modifiedDate.getFullYear()
   const month = (modifiedDate.getMonth() + 1 ).toString().padStart(2, '0')
   const day = modifiedDate.getDate()

   return (`${year}-${month}-${day}`) 
}

console.log(threeDaysAgo(new Date(2018,0,1)))
console.log(threeDaysAgo(new Date(2015,5,17)))