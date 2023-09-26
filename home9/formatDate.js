const formatDate = (date) => {

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        
        "December",
      ];

      return date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear()
    
}
    
console.log("Actual output: ", formatDate(new Date("2020-05-14")));
console.log("Expected output", "14 May 2020");