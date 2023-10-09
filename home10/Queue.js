
class Queue {

    constructor(){
        this.arr = []
    }

    enqueue (value) { 
        this.arr.push(value)
    }

    dequeue () { 
        if (!this.isEmpty()){
            console.log (this.arr.shift())
            return this.arr
        }
        return "Queue is empty"
    }

    front () { 
        if (!this.isEmpty()){
            return this.arr[0]
        }
        return "Queue is empty"
    }

    isEmpty () { 
        return this.arr.length === 0
    }

    size () {
        return this.arr.length
    }

    print () { 
        if (!this.isEmpty()){
            let out = "" 
            for (let i of this.arr){
                out += i + " "
            }
            console.log(`Output: ${out.trim()}`)
        }
        return "Queue is empty"
    }
}

const queue = new Queue(); 
 
queue.enqueue(1); 
queue.enqueue(2); 
queue.enqueue(3); 
 
queue.print(); // Output: 1 2 3 
 
console.log("Front element: " + queue.front()); // Output: Front element: 1 
 
queue.dequeue(); 
queue.print(); // Output: 2 3 
 
console.log("Queue size: " + queue.size()); // Output: Queue size: 2