let user = {
    name : 'Meri',
    age : 24
}

function thisFunction (phone , gmail) {
    console.log(this.name , ` Phone:${phone}` , ` Gmail:${gmail}`)
}

function bind (fun , context , ...rest){
    
    return function (...args) {

        context.key = fun
        return context.key(...rest.concat(args))
        
    }
}

bind(thisFunction , user , "098456258")("meri1999@mail.com")


