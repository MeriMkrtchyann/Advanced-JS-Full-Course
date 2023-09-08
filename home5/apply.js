let user = {
    name : 'Meri',
    age : 24
}

function thisFunction (phone , gmail) {
    console.log(` Name:${this.name} | Phone:${phone} | Gmail:${gmail}`)
}


function apply (fun , context , arr){
    
    context.key = fun
    return  context.key(...arr)

}

apply(thisFunction , user , ["098456258" , "meri1999@mail.com"])
