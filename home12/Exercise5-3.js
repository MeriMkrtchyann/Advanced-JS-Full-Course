console.log(1)
    setTimeout(() => {
        console.log(2)
    }, 20)

Promise.resolve()
    .then(() => {
        console.log(3)
        return 1
    })
    .catch(e => console.log(e, 4))
    .finally(res => console.log(res, 5))
    .then((res) => console.log(res))
console.log(6)

/*
    Կոդը կաշխատի տեղ առ տող կկարդա տեսնելով Call Stack կհայտվի console.log(1) կտպի 1
    Event Loop-ը setTimeout() կտանի Task Queue[anonymous] երբ նշված ժամանակը անցնի
    Event Loop-ը Promise.resolve()-ի ներսում գտնվող .then()-ի callBack-ը կտանի  Microtask Queue [anonymous]
    Call Stack կհայտվի console.log(6) կտպի 6
    Call Stack-ը դատարկվելուց հետո Event Loop-ը Microtask Queue-իվ կբերի anonymous-ը Call Stack 
    Call Stack կհայտվի anonymous կտպի  3 ու կվերադարձնի 1
    Հետո .finally() կաշխատի քանի որ ինքը արգումենտ չի ստանում դրա ահմար տպումա undefined 5
    Կաշխատի մյուս .then()-ի կտպի 1
    Event Loop-ը երբ ստուգի ու հասկանա որ դատարկ է համ Call Stack համ Microtask Queue 
    կաշխատացնի արդեն Task Queue[anonymous] ու կտպի 2

 
*/