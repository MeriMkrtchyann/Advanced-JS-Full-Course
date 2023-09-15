let object = {
    name : "Meri" ,
    age : 24
}

const descripornerObject = {

    name : {
        "value" : object.name,
        "writable": false,
        "enumerable": false,
        "configurable": false,
    },

    age : {
        "value" : object.age,
        "writable": true,
        "enumerable": true,
        "configurable": true,
    }
}

function change(object , descripornerObject){

    const nowObject = {}

    for (let key in object) {
        Object.defineProperty(nowObject, `${key}`, descripornerObject[key]) 
    }

    return nowObject
}


console.log(JSON.stringify(Object.getOwnPropertyDescriptors(change(object ,descripornerObject))))