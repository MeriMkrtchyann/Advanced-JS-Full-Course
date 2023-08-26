function curry(add ) {

    return function callBack(...args){
        if (args.length >= add.length){
            return add(...args)
        }else {
            return function (...nextArgs) {
                return callBack(...args, ...nextArgs);
            }
        }
    }
}

function add(a, b, c) {
    return a + b + c;
}

const curriedAdd = curry(add);

console.log(curriedAdd(1)(2)(3)); // Output: 6
