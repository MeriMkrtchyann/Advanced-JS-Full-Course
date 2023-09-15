function validate(obj ,schem){
    
    for (let key in schem) {
        const propertyDescriptor = schem[key]
        if (!(propertyDescriptor.validate(obj[key]))){
            return `You have not passed validation`
        }
    }
    return `You have passed the validation`
}

const schema = {
    name: {
    value: "",
    writable: true,
    validate: (value) => typeof value === "string",
},
    age: {
    value: 0,
    writable: true,
    validate: (value) => typeof value === "number" && value >= 18,
    },
};

const user1 = {
    name : "Meri",
    age : 24
}

const user2 = {
    name : 2,
    age : 10
}

console.log(validate(user1 ,schema))
console.log(validate(user2 ,schema))