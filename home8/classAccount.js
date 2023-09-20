class Account {

    #balance = 0
    
    constructor ( name , balance){
        this.name = name
        this.balance = balance
        this.id = Account.generateUniqueId()
    }

    get balance(){
        return this.#balance
    }

    set balance(balance){
        this.#balance = balance
    }

    credit (value){
        return this.balance += value
    }

    debit (value){
        if (this.balance < value){
            return "insufficient funds"
        }
        return this.balance -= value
    }

    transferTo (acaunt , amount){
        if (this.balance < amount){
            return "insufficient funds"
        }
        this.balance -= amount
        acaunt.credit(amount)
    }

    static generateUniqueId (){
       return Date.now().toString(36) + Math.random().toString(36).substring(2,5)
    }
    
    static identifyAccounts (account1 ,account2 ){
        console.log(account1.id)
        console.log(account2.id)
        return account1.id === account2.id
    }
    
}

const saving = new Account("saving", 1000);
const current = new Account("current", 8000);
console.log(saving.credit(5000));
console.log(saving.debit(7000));
console.log(saving.debit(2000));
console.log(saving.transferTo(current, 1000));
console.log(saving.balance);
console.log(current.balance);
const res = Account.identifyAccounts(current, saving);
console.log(res)





