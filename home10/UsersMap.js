class Users {

    constructor(users = []){
        this.userDate = new Map()
        this.addUsers(users)
    }

    addUsers(nowUsers){
        for  (let user of nowUsers){
            this.userDate.set(user.id , user)
        }
    }

    getUserById(idUser){
       return this.userDate.get(idUser)
    }
}


const mappedUser = new Users([ 
    { id: 1, name: "Alice", email: "alice@example.com" }, 
    { id: 2, name: "Bob", email: "bob@example.com" }, 
]); 

console.log(mappedUser.getUserById(1)); // { id: 1, name: "Alice", email: "alice@example.com" }; 
mappedUser.addUsers([{ id: 3, name: "Ann", email: "ann@example.com" }]); 
console.log(mappedUser.getUserById(3)); // { id: 3, name: "Ann", email: "ann@example.com" }