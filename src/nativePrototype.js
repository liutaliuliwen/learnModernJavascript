// let obj = {};
// console.log(obj);
// console.log(obj.__proto__ === Object.prototype);
// console.log(Object.prototype.__proto__);

// let arr = [1, 2, 3];
// console.log(arr.__proto__ === Array.prototype);
// console.log(arr.__proto__.__proto__ === Object.prototype);
// console.log(arr.__proto__.__proto__.__proto__ === null);
// console.log(arr);
// console.dir(Object.prototype.toString.call(arr));

// function f(){}

// console.log(f.__proto__ === Function.prototype);
// console.log(f.__proto__.__proto__ === Object.prototype);

// String.prototype.show = function() {
//     console.log(this);
// }

// "BOOM!".show();

// if(!String.prototype.repeat) {
//     String.prototype.repeat = function(n){
//         return new Array(n + 1).join(this)
//     }
// }

// obj = {
//     0: "Hello",
//     1: "World",
//     length: 2
// }

// obj.join = [].join;
// console.log(obj.join(","));

function f(a, b) {
    console.log(a + b)
}

Function.prototype.defer = function(ms) {
    // setTimeout(this, ms)
    // const _this = this;
    return (...args) => {
        setTimeout(() =>this.apply(this, args), ms)
    }
}

f.defer(1000)(1, 2)