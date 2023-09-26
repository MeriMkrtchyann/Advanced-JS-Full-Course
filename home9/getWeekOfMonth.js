function getWeekOfMonth(date) {
    const startOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    const dayOfWeek = startOfMonth.getDay();
    const adjustedDate = date.getDate() + dayOfWeek ;
    return Math.ceil(adjustedDate / 7);
  }
  
  const result = getWeekOfMonth(new Date(2017, 10, 9)); 
  console.log(result); 