let a = 5;
    setTimeout(() => { // -> Task Queue ու ամենավորջում կբերի
        console.log(a);
        a = 10;
    }, 0);

let p = new Promise((resolve, reject) => {// սինխրոն կոդ է դրա համար կաշխատի
    console.log(a);//5
    a = 25;
    resolve(); // undefined
});

p.then(res => {// -> Microtask Queue կտանի ու կաշխատի ավելի շուտ քան Task Queue-ում գտնվողը
    console.log('final result ', res) // քանի որ 
});
console.log(a); //25

/*
    Կտպի ։ 5 25 final result  undefined 25
*/
