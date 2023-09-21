class University {

    constructor (){
        this.teachers = []
        this.students = []
    }
    
    addMember(person){
        if (person instanceof Student){
            this.students.push(person)
        }else if (person instanceof Teacher){
            this.teachers.push(person)
        }else {
            console.error("It is not possible to add a participant because he is not a student or a teacher.")
        }
    }

    removeMember(person){
        if (this.teachers.includes(person)){
            this.teachers = this.teachers.filter((_ ,index ) => index !== this.teachers.indexOf(person))
        }else if (this.students.includes(person)){
            this.students = this.students.filter((_ ,index ) => index !== this.students.indexOf(person))
        }else {
            console.error("No person was found in our database with that data")
        }

    }
    
    startLesson(){
        for (const student of this.students){
            student.energy -= 2
        } 
        for (const teacher of this.teachers){
            teacher.energy -= 5
        } 

    }
}

class UniversityMember {

    constructor (name ,age ,role , energy = 24){
        this.name = name
        this.age = age
        this.role = role
        this.energy = energy
    }

    info() {
        return `name : ${this.name} age : ${this.age} role : ${this.role} energy : ${this.energy}`
    }

}

class Teacher extends UniversityMember {
    constructor (name ,age){
        super (name ,age ,"teacher" , 24)
    }
}

class Student extends UniversityMember{
    constructor (name ,age){
        super (name ,age ,"student" , 24)
    }
}

const university = new University();

const teacher1 = new Teacher("Hayk Petrosyan", 45 , "teacher");
const teacher2 = new Teacher("Anahit Karapetyan", 42, "teacher" );
const teacher3 = new Teacher("Anahit Sargstyan", 41, "teacher" );

const student1 = new Student("Aram Isahakyan", 20, "student");
const student2 = new Student("Ani Xachatryan", 19, "student");
const student3 = new Student("Anahit Sargstyan", 18, "student");

university.addMember(teacher1)
university.addMember(teacher2)
university.addMember(teacher3)
university.addMember(student1)
university.addMember("HA")
university.addMember(student2)
university.addMember(student3)
university.removeMember(teacher2)
university.removeMember(student3)
university.startLesson()

console.log(teacher1.info())
console.log(student1.info())






