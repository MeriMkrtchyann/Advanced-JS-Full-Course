
function createPerson(name , age){

    let _name = name 
    let _age = age

    const person = {

        getName () {
            return _name ;
        },
        getAge () {
            return _age;
        },

        setName (name) {
            return _name = name ;
        },
        setAge (age) {
            return _age = age;
        },
    }

    return person

}

const person = createPerson("Alice", 30);
console.log(person.getName()); // Output: "Alice"
console.log(person.getAge()); // Output: 30
person.setName("Bob");
person.setAge(25);
console.log(person.getName()); // Output: "Bob"
console.log(person.getAge()); // Output: 25
