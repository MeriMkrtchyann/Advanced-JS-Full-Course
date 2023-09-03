/*
1) stexci Car constructor, vory stanuma model u milesPerGallon argumentner u initializacnuma
2) bolor instance-nery vor stexcvum en qaric, petqa
        * unenan tank = 0
        * unenan odometer = 0
3) meqenanery zapravka linelu hnaravorutyun petqa unenan .fill(gallons) method
        Avelacru gallons-y tank-in
4) avelacru hnaravorutyun varelu .drive(distance) methodov
        Heravorutyuny vor qshvuma petqa
        * odometer-y avelacni
        * tank-y pakasacni hadhvi arnelov milesPerGallon-y
Bayc qsheluc araj petqa hashvi arnvi fuel-y (vareliq) kheriqi distanciayin te che
Drive method-y petqa veradardzni "I ran out of fuel at x miles" artahaytutyuny, vortex x-y odometer-na
Nayi miles per gallon, aysinqn orinak 1 gallon gaz-ov (gazi chapman miavora), gnuma 2 mile
*/

function Car (model , milesPerGallon) {

    this.tank = 0
    this.odometer = 0
    this.milesPerGallon = milesPerGallon
    // milesPerGallon = this.tank * 2

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

    return `I can't run that distance\nI ran out of fuel at ${distance} miles`    
   
}

const car1 = new Car ("BMW" , 3)
car1.fill(70)
console.log(car1.drive(120))
