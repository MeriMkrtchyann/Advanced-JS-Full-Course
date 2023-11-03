Promise.resolve()
    .then(foo1 = () => { console.log(1)}) // Event Loop -> Microtask Queue [anonymous]
    .catch(() => console.log(3))
    .then(() => { console.log(2); throw new Error(); })
    .then(() => console.log(4))
    .then(() => console.log(4))
Promise.resolve()
    .then(() => console.log(11))// Event Loop -> Microtask Queue [anonymous (1) , anonymous(11)]
    .then(() => { console.log(12); throw new Error(); })
    .catch(() => console.log(13))
    .catch(() => console.log(14))
    .then(() => console.log(15))

/*
    Կաշխատի Promise.resolve() կտեսնի .then() և .then()-ի callBack-y Event Loop -> Microtask Queue [anonymous]
    Կաշխատի հաջորդ Promise.resolve() կտեսնի .then() և .then()-ի callBack-y Event Loop -> Microtask Queue [anonymous ,anonymous]
    Event Loop-ը Microtask Queue [anonymous ,anonymous] կբերի anonymous կտպի 1 -> Microtask Queue [anonymous ]
    Event Loop-ը Microtask Queue [anonymous] կբերի anonymous կտպի 11 -> Microtask Queue [ ]
    Event Loop-ը Microtask Queue [] կտանի 9 տեղում գտնվողը որից հետո 4 տեղինը -> Microtask Queue [anonymous , anonymous]
    Event Loop-ը Microtask Queue [anonymous ,anonymous] կբերի anonymous կտպի 12 և կվերադարձնի error -> Microtask Queue [anonymous ]
    Event Loop-ը Microtask Queue [] կտանի 4 տեղում գտնվողը -> Microtask Queue [anonymous , anonymous]
    Event Loop-ը Microtask Queue [anonymous , anonymous] կբերի anonymous կտպի 2 և կվերադարձնի -> Microtask Queue [anonymous]
    Քանի որ առաջին Promise.resolve() ավարտվում է error-ով ու .catch() չկա error-ը կտպվի consol-ում
    Event Loop-ը Microtask Queue [anonymous] կբերի anonymous կտպի 13 Microtask Queue []
    Event Loop-ը Microtask Queue [] կտանի 11 տեղում գտնվողը -> Microtask Queue [anonymous]
    Event Loop-ը Microtask Queue [anonymous] կբերի anonymous կտպի 15

    Կտպի ։ 1 11 12 2 13 15  Uncaught Error Error  
*/