function delay(f, ms){
    return new Proxy(f, {
        apply(target, thisArg, args) {
            setTimeout(() => target.apply(thisArg, args), ms);
        }
    });
}

function sayHi(user) {
    console.log(`Hello, ${user}!`);
}


sayHi = delay(sayHi, 3000);
sayHi("John");
console.log(sayHi.length);