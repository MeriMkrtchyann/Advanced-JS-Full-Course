const Airplane = {

    name : "",

    set (nowName) {
        return this.name = nowName
    },

    get () {
        return this.name
    },

    isFlying : false,
    
    takeOff () {
       return this.isFlying = true
    },

    land () {
        return this.isFlying = false
    }
}


let person = (Airplane.get())
let typeAirplane = (Airplane.land())

console.log(person + " " + typeAirplane)