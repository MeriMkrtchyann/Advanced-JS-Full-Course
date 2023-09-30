
function setTimeout(callBack , milliseconds){

    let time = Date.now()

    while(Date.now() - time <= milliseconds){
        
    }    
    return callBack()
}

function callBack(){
    return "exit"
}

console.log(setTimeout(callBack, 3600))

