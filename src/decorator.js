function spy(func){
    function wrapper(){
        wrapper.calls.push([...arguments]);
        return func.apply(this, arguments);
    }
    wrapper.calls =[];
    return wrapper;
}

function work(a, b) {
    console.log( a + b ); // work 是一个任意的函数或方法
}
  
work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
    console.log( 'call:' + args.join() ); // "call:1,2", "call:4,5"
}

function delay(f, ms){
    return function(){
        setTimeout(() => {f.apply(this, arguments)}, ms);
    }    
}

// function delay(f, ms) {
//     return function(...args) {
//       let savedThis = this; // 将 this 存储到中间变量
//       setTimeout(function() {
//         f.apply(savedThis, args); // 在这儿使用它
//       }, ms);
//     };  
// }

function f(x, y) {
    console.log(x, y);
}

let f1000 = delay(f, 2000);
let f1500 = delay(f, 1500 * 5);

f1000("test", "hello");
f1500("test", "hello");

