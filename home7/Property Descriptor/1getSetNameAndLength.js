const obj = {
    _name : "",

   get name (){
        return this._name
   },

   set name (value){
        const arr = value.split(", ")
        const arr2 = []
        for (let i = 0 ; i < arr.length ; i++){
            arr2.push([arr[i] , arr[i].length])
        }
        this._name = arr2
   } 
};

obj.name = "Hamlet, Artavazd";

console.log(JSON.stringify(obj.name)); // [['Hamlet', 6], ['Artavazd', 8]]