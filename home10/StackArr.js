class Stack{

    constructor(){
        this.arr = []
    }

    push (value) { 
        this.arr.push(value)
    }

    pop () { // verevi elelementy jnjuma
        if (!this.isEmpty()){
            return this.arr.pop()  
        }else {
            return "Stack is empty"
        }
        
    }

    top () { // veradarcnuma verevi elementy bayc chi jnjum
        if (!this.isEmpty()){
            return this.arr[this.arr.length - 1]
        }  
        return "Stack is empty"
    }

    isEmpty () { // stuguma datarka te che
        return this.arr.length === 0
    }

    getSize () { // size 
        return this.arr.length
    }
}


const stack = new Stack(); 
stack.push(1); 
stack.push(2); 
console.log(stack.pop()); // Should print 2
console.log(stack.top()); // Should print 1
console.log(stack.isEmpty()); // Should print false
console.log(stack.getSize()); // Should print 1