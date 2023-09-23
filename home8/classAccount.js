class Account {

    #balance = 0
    #id
    
    constructor ( name , balance){
        if (typeof name === 'string'){
            this.name = name
        }else {
            
        }
        this.balance = balance
        this.#id = Account.generateUniqueId()
    }

    get balance(){
        return this.#balance
    }

    set balance(nowBalance){
        if (typeof nowBalance === 'number' && nowBalance >= 0){
            this.#balance = nowBalance
        }else{
            console.log("Please enter positive number only")
        }
    }

    credit (value){
        if (typeof value === 'number' && value > 0){
            this.balance += value
        } else {
            console.log("Please enter positive number only")
        }
        
    }

    debit (value){
        if (typeof value === 'number' &&  value > 0){
           if (this.balance >= value){
                this.balance -= value
           }else {
                console.log("Insufficient funds.")
           }
        }else {
            console.log("Please enter positive number only")
        }
        
    }

    transferTo (acaunt , amount){
        if (typeof amount === "number" && amount > 0){
            if (this.balance >= amount){
                this.balance -= amount
                acaunt.credit(amount)
            } else {
                console.log ("insufficient funds")
            }
        }else {
            console.log("Please enter positive number only")
        }
        
        
    }

    static generateUniqueId (){
       return Date.now().toString(36) + Math.random().toString(36).substring(2,5)
    }

    static identifyAccounts (account1 ,account2 ){
        return account1.#id === account2.#id
    }

    submitBalance(password){
        if (password === "hello"){
            console.log(this.balance)
        } else {
            console.log("enter the correct password")
        }
    }
}``

const saving = new Account("saving", 1000);
const current = new Account("current", 8000);
saving.credit(5000);
saving.debit(1000);
saving.debit(2000);
saving.transferTo(current, 1000);
console.log(saving.balance);
console.log(current.balance);
const res = Account.identifyAccounts(current ,saving);
console.log(res)

saving.balance = "hello";
saving.submitBalance("hello");
console.log(saving);