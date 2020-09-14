let sum = new Function('a', 'b', 'return a + b');

console.log(sum(1, 2));

let sayHi = new Function('console.log("Hello")');
sayHi();

global.value = "hi";
function getFunc(){
    let value = "tets";
    let func = new Function('console.log(value)');
    return func;
}

getFunc()();

function getFunc2(){
    let value = "test";
    let func = function(){
        console.log(value);
    };
    return func;
}

getFunc2()();