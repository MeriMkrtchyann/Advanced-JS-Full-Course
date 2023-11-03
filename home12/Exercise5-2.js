Promise.resolve()
    .then(data => {
        throw new Error('Api Error');
        return 1;
    })
    .then(data => console.log('ok'))
    .catch(error => {
        console.log(error.message);
        return "2";
    })
    .then(data => {
        console.log(data);
    })

/*
    Կաշխատի Promise.resolve() կտեսնի .then() և .then()-ի callBack-ը Event Loop -> Microtask Queue [anonymous]
    Event Loop-ը Microtask Queue [anonymous] կբերի anonymous կվերադարձնի new Error
    Քանի որ Error է մտնի .catch() կտպի new Error-ի message Api Error ու կվերադարձնի "2"
    Կմտնի .then() կտպի 2 և կոդի աշխատանքը կավարտվի

    Կտպի ։ Api Error  2

*/