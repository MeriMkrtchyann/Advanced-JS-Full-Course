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
