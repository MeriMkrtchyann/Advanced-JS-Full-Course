class Node {
    constructor(date){
        this.date = date
        this.next = null
        this.prev = null
    }
}

class Doule {

    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }

    isEmpty(){
        return this.size === 0
    }

    append(nowDate){

        const newNode = new Node(nowDate)

        if (!this.size){
            this.head = newNode
            this.tail = newNode
        }else {
            this.tail.next = newNode
            let currentNode = this.tail
            this.tail = newNode  
            this.tail.prev = currentNode
        }
        this.size++
    }

    prepend(nowDate){
        const nowNode = new Node(nowDate)

        if (!this.size){
            this.head = nowNode
            this.tail = nowNode
        }else {
            this.head.prev = nowNode
            let nowDate = this.head
            this.head = nowNode
            this.head.next = nowDate
        }
        this.size++
    }

    insert(nowDate , indext){

        if (indext === this.size){
           return this.append(nowDate)
        }

        if (indext === 1){
           return this.prepend(nowDate)
        }

        const newNode = new Node(nowDate)
        let counter = this.size - indext
        let currentNode = this.tail

        if (this.size - indext < this.size / 2){
            while(counter !== 0){
                currentNode = this.tail.prev
                counter--
            }
        }else {
            counter = 0
            currentNode = this.head
            while(counter !== indext){
                currentNode = this.head.next
                counter++
            }
        }
            let currentNodeNext = currentNode.next
            let currentNodePrev = currentNode
            currentNode.next.prev = newNode
            currentNode.next = newNode
            currentNode = newNode
            currentNode.next = currentNodeNext
            currentNode.prev = currentNodePrev
            this.size++
    }

    getSize(){
        return this.size
    }

    printList(){
        let text = ""
        let counter = 0

        let currentNode = this.head

        while (counter !== this.size  ){
            text += currentNode["date"] + " "
            currentNode = currentNode.next
            counter++
        }

        console.log(text.trim())
    }

    remove(value){

        let currentNode = this.head

        while (currentNode["date"] !== value) {
            if (currentNode.next === null){
                return false
            }
            currentNode = currentNode.next
        }

        currentNode.next = currentNode.next.next
        currentNode.next.prev = currentNode
        this.size--
        return this
    }

    removeAt(index){

        if (index === 0){
            this.head = this.head.next
            this.head.prev = null

        }else if (index === this.size - 1){
            this.tail = this.tail.prev
            this.tail.next = null
        } else {

            let currentNode = this.head

            if (index !== 0){
                currentNode = this.head.next
                index--
            }

            currentNode.next = currentNode.next.next
            currentNode.next.prev = currentNode
        }
        this.size--
        return this
    }  
} 


const doubleList = new Doule()

doubleList.append(1)
doubleList.append(2)
doubleList.append(4)

doubleList.prepend(0)
doubleList.insert(3,3)
doubleList.insert(5,2)

console.log("Size:", doubleList.getSize()); 

doubleList.printList()
doubleList.remove(10)
doubleList.printList()
doubleList.insert(10,2)
doubleList.printList()
doubleList.remove(10)
doubleList.removeAt(2)


doubleList.printList()
console.log(doubleList.isEmpty())
console.log("Size:", doubleList.getSize()); 