function Car (model , milesPerGallon) {
    this.tank = 0
    this.odometer = 0
    this.milesPerGallon = milesPerGallon
}

Car.prototype.fill = function (gallons){
    this.tank += gallons
}

Car.prototype.drive = function (distance){
    if ( this.milesPerGallon * this.tank >= distance){ 
        this.odometer += distance
        this.tank -= distance / this.milesPerGallon
        return `I ran out of fuel at ${distance} miles`
    }
    return `I can't run that distance
I ran out of fuel at ${distance} miles`    
}

const car1 = new Car ("BMW" , 3)
car1.fill(70)
console.log(car1.drive(1547))
