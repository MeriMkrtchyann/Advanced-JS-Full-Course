let user = {
    name : 'Meri',
    age : 24
}

function thisFunction (phone , gmail) {
    console.log(` Name:${this.name} | Phone:${phone} | Gmail:${gmail}`)
}


function call (fun , context , ...args){


    context.key = fun

    return  context.key(...args)
         
}

call(thisFunction , user , "098456258" , "meri1999@mail.com")
