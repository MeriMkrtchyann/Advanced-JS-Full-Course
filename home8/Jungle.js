class Jungle{

    constructor(){
        this.animals = []
    }

    add(newAnimal){
        if (newAnimal instanceof Animal){
            this.animals.push(newAnimal)
        }
    }

    soundOff(){
        for (let animal of this.animals){
            animal.sound();
            console.log(`${animal.constructor.name} my energy is ${animal.energy}`)
        }
       
    } 
}

class Animal {

    energy = 10

    sound(){
        if (this.energy >= 3){
            this.energy -= 3
        }else {
            return `I’m too tired`
        }
        
    } 
    eat(){
        this.energy += 5
    } 
    sleep(){
        this.energy += 10
    }
}


class Tiger extends Animal {
    sleep (){
        this.energy += 5
    }
    
    eat(food){
        if (!(food instanceof Grain)){
            super.eat()
        }else {
            console.log(`I can’t eat that`)
            return 
        }
    }
}

class Monkey extends Animal {
    eat(){
        this.energy += 2
    }

    sound(){
        if (this.energy >= 4){
            this.energy -= 4
        }else {
            console.log (`I’m too tired`)
            return this.energy
        }
    }

    play (){
        if (this.energy >= 8){
            this.energy -= 8
            console.log ("Oooo Oooo")
            return
        }else {
            console.log (`I’m too tired`)
            return
        }
        
    }
    
}

class Snake extends Animal {
    
}

class Food {

}


class Fish extends Food {
    
}

class Grain extends Food {
    
}

class Meat extends Food {
    
}


const jungle = new Jungle();
const tiger = new Tiger();
const monkey = new Monkey();
const snake = new Snake();
const fish = new Fish();
const grain = new Grain();
const meat = new Meat();

jungle.add(tiger);
jungle.add(monkey);
jungle.add(snake);

console.log(jungle.animals)

tiger.eat(grain)
tiger.eat(fish)
monkey.play()
monkey.sound()
jungle.soundOff()



