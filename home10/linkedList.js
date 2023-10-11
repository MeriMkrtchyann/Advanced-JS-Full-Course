

class Node  {
    constructor(data){
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor(){
        this.head = null
        this.size = 0
    }

    append(data){ //verjic avelacnuma

        const newNode = new Node(data)

        if (!this.head){
            this.head = newNode
        }else{
            let currentNode = this.head
            while (currentNode.next){
                currentNode = currentNode.next
            }

            currentNode.next = newNode
        }
        this.size++  
        return this
    } 

    prepend(data){

        const newNode = new Node(data)

        if (!this.head){
            this.head = newNode
        }else {
            let currentNode = this.head
            this.head = newNode
            this.head.next = currentNode
        }

        this.size++ 
        return this
    } 

    insert(data, index){

        const newNode = new Node(data)

        let counter = 0

        if (index > this.size || index < 0){
            return "false"
        }

        if (index === this.size) {
            this.append(data)
            return this
        }

        if (index === 0){
            this.prepend(date)
            return this
        }

        let currentNode = this.head

        while (counter !== index - 1) {
            currentNode = currentNode.next
            counter++
        }

        let oldcurrentNode = currentNode.next
        currentNode.next = newDota
        newDota.next = oldcurrentNode

        this.size++

        return this
    } 


    remove(data){

        if (!this.size){
            return this
        }

        if (this.head.data === data){
            this.head = this.head.next
            this.size--
            return this
        }

        let currentNode = this.head
        while (currentNode.next.data !== data){
            currentNode = currentNode.next
        }

        currentNode.next = currentNode.next.next
        this.size--
        return this
    }

    removeAt(index){

        if (index === 0){
            this.head = this.head.next
            return this
        }

        let counter = 1

        let currentNode = this.head
        while (counter  !== index ){
            currentNode = currentNode.next
            counter++
        }

        currentNode.next = currentNode.next.next
        this.size--

        return this

    }  

    getSize(){
        return this.size
    }

    isEmpty(){
        return this.size === 0
    }
    
    printList(){
        
        let text = ""
        let counter = 0

        let currentNode = this.head

        while (counter !== this.size  ){
            text += currentNode.data + " "
            currentNode = currentNode.next
            counter++
        }

        console.log(text.trim())
    }
}


const list = new LinkedList(); 

list.append(1); 
list.append(2); 
list.append(3); 

list.prepend(0); 

list.insert(4, 4);

list.printList(); 

console.log("Size:", list.getSize()); 

list.remove(2); 

list.removeAt(2); 

list.printList(); 

console.log("Size:", list.getSize()); 
