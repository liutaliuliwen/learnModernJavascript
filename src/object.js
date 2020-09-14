function isEmpty(obj){
    return Object.keys(obj).length === 0
}

function multiplyNumeric(obj){
    for(key in obj){
        if(typeof obj[key] === 'number'){
            obj[key] = obj[key] * 2;
        }
    }
}

let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep: function() { // 显示当前的 step
      console.log(this.step);
      return this;
    }
  };


  ladder.up().up().down().showStep(); 


let user = {
    name: "John",
    money: 1000,

    [Symbol.toPrimitive](hint){
        console.log(`hint: ${hint}`);
        return hint === 'string' ? `{name: "${this.name}"}` : this.money;
    }
};

console.log(user);
console.log(+user);
console.log(user + 500);

let obj = {name: 'saa',toString(){return this.name}, valueOf(){return 100}};
let anotherObj = {saa: "hello"};
console.log(anotherObj[obj]);
let num = Number(obj);
console.log(num);



module.exports = {isEmpty, multiplyNumeric};

