
function Person (name , age) {
    this.name = name
    this.age = age
    this.stomach = []
}

Person.prototype.eat = function (foods) {
    if (this.stomach.length < 10){
        this.stomach.push(foods)
        return this
    }  
}

Person.prototype.poop = function () {
    this.stomach.length = 0
}

Person.prototype.toString = function () {
    return this.name + "," + this.age
}

const player = new Person("Meri" , 24)

player.eat("apple").eat("banana")
player.poop("apple")

console.log(player.toString())








