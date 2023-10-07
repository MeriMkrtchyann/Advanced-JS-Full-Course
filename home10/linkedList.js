

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

    append(nowData){ //verjic avelacnuma

       
        if (!this.head){
            this.head = nowData
        }else{
            let currentNode = this.head

            while (currentNode.next){
                currentNode = currentNode.next
            }

            currentNode.next = nowData
        }
        this.size++  
        return this
    } 

    prepend(nowData){//demica avelacnuma
        if (!this.head){
            this.head = nowData
        }else {
            let currentNode = this.head
            this.head = nowData
            this.head.next = currentNode
        }

        this.size++ 
        return this
    } 

    insert(nowData, index){//xckuma

        let counter = 0

        if (index > this.size || index < 0){
            return "false"
        }

        if (index === this.size) {
            this.append(nowData)
            return this
        }

        if (index === 0){
            this.prepend(nowData)
            return this
        }

        let currentNode = this.head

        while (counter !== index - 1) {
            currentNode = currentNode.next
            counter++
        }

        let oldcurrentNode = currentNode.next
        currentNode.next = nowData
        currentNode.next.next = oldcurrentNode

        this.size++

        return this
    } 


    remove(nowData){//jnjuma tvyal value

        let currentNode = this.head

        while (currentNode.next.data !== nowData){
            currentNode = currentNode.next
        }

        currentNode.next = currentNode.next.next
        this.size--

        return this
    }

    removeAt(index){//jnjuma indexsi taki nstacy

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

    getSize(){//veradracnuma size
        return this.size
    }

    isEmpty(){//true kam false
        if (this.size){
            return false;
        }
        return true;
    }
    
    printList(){//tpuma

        
        let text = ""
        let counter = 0

        let currentNode = this.head

        while (counter !== this.size - 1 ){
            text += currentNode["data"] + " "
            currentNode = currentNode.next
            counter++
        }

        console.log(text.trim())
    }
}


const list = new LinkedList(); 
const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node0 = new Node(0);
const node4 = new Node(4);
list.append(node1); 
list.append(node2); 
list.append(node3); 

list.prepend(node0); 

list.insert(node4, 4);

list.printList(); 

console.log("Size:", list.getSize()); 

list.remove(2); 

list.removeAt(2); 

list.printList(); 

console.log("Size:", list.getSize()); 
