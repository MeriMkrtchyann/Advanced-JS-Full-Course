const nestedObject = { 
    a: 1, 
    b: { 
      c: 2, 
      d: { 
        e: 3, 
        f: 4, 
      }, 
    }, 
    g: 5, 
  }; 
   
function flattenObject(nestedObject , parentKey = "" , newKey = ""){

    let nowObject = {}

    for (let key in nestedObject){

        if (parentKey !== ""){
            newKey = parentKey + "." + key
        }else {
            newKey = key
        }

        if (typeof(nestedObject[key]) === "object"){

            parentKey = newKey
            const SubObject = flattenObject(nestedObject[key] , parentKey , newKey)
            nowObject = { ...nowObject, ...SubObject }

        }else {
            
            nowObject[newKey] =  nestedObject[key]
        }
    }
    return nowObject
}

const flattenedObject = flattenObject(nestedObject); 
console.log(flattenedObject);