function partial (fun , num1 ){

    return function callBack(num2 , num3){
        return fun(num1 , num2 , num3);
    }
   
}

function add(a, b, c) {
    return a + b + c;
}

const add5 = partial(add, 5);

console.log(add5(10, 20)); // Output: 35 (5 + 10 + 20)
