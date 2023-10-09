class Node  {

    constructor(data){
        this.data = data
        this.next = null
    }
}

class Stack {

    constructor (){
        this.head = null
        this.size = 0
    }

    push (nowDate) { 
        if (this.head === null){
            this.head = nowDate
        } else {
            let nextDate = this.head
            this.head = nowDate
            this.head.next = nextDate
        }
        this.size += 1
        return this
    }

    pop () { 
        if (this.head === null){
            return "Stack is empty"
        }
        let out = this.head.data
        this.head = this.head.next
        this.size -= 1

        return out
    }

    top () { 
        return this.head.data
    }

    isEmpty () { // stuguma datarka te che
       return this.size === 0
    }

    getSize () { // size 
        return this.size
    }
}

const stack = new Stack(); 
const node1 = new Node(1)
const node2 = new Node(2)
stack.push(node1); 
stack.push(node2); 
console.log(stack.pop()); // Should print 2
console.log(stack.top()); // Should print 1
console.log(stack.isEmpty()); // Should print false
console.log(stack.getSize());