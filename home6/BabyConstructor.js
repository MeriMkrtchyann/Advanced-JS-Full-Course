/*
Write a Baby constructor subclassing Person.
Besides name and age, Baby takes a third argument to initialize favoriteToy.
Besides the methods on Person.prototype, babies have the ability to .play():
Should return a string "Playing with x", x being the favorite toy.
*/

function Baby (name , age , favoriteToy){

    this.name = name;
    this.age = age;
    this.favoriteToy = favoriteToy;

}

Baby.prototype.play = function (){
    return `Playing with ${this.favoriteToy}`
}

const baby1 = new Baby("Meri" , "23" , "dog")
console.log(baby1.play())
