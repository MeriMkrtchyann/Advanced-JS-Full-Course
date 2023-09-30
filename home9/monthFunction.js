function month(number){

    const months = ["January", "February", "March", "April", "May", "June", "July", 
                    "August", "September", "October", "November", "December", ];

    return months[number - 1]
}

console.log(month(3))