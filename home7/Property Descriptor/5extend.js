function extend (obj , obj2 ) {
  for (let key in obj2){
    Object.defineProperty( obj, key , obj2[key])
  }
}

const myObj = { prop1: "value1" };

extend(myObj, {
  prop2: { value: "value2", writable: false },

  prop3: {
    get() {
      return "computed";
    },
  },
});


console.log(myObj)
console.log(Object.getOwnPropertyDescriptors(myObj))
