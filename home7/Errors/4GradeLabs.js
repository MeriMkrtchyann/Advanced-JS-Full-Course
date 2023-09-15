function gradeLabs(studentLabs2){
    for (let lab of studentLabs2){
        try {
            const solution = lab.runLab(4)
            solution === correctAnswer ? console.log (`${lab.student} : Pass`) : console.log  (`${lab.student} : Fail`)
                
        } catch (err) {
            console.error(`${lab.student} : Error thrown`)
        }
    }
}

const correctAnswer = 256

let studentLabs2 = [
    {
        student: "Blake",
        myCode: function (num) {
            return Math.pow(num, num);
        },
    },
    {
        student: "Jessica",
        runLab: function (num) {
            return Math.pow(num, num);
        },
    },
        {
        student: "Mya",
        runLab: function (num) {
            return num * num;
        },
    },
];
    
gradeLabs(studentLabs2);