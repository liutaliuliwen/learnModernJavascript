test('test sum ', () => {
  function sumAll(...args){
      return args.reduce((acc, prev) => acc + prev, 0);
  }

  expect(sumAll()).toBe(0);

  expect(sumAll(1)).toBe(1);

  expect(sumAll(1, 2, 3)).toBe(6);
});

test('showName', () => {
    function showName(firstName, lastName, ...titles) {
        return [firstName, lastName, ...titles];
    }

    expect(showName('Julius', "Caesar", "Consul", "Imperator")).toEqual(['Julius', "Caesar", "Consul", "Imperator"]);
});

test("arrow function arguments", () => {
    function f(){
        let showArg = () => arguments[0]
        return showArg();
    }

    expect(f(1)).toBe(1);
    expect(f()).toBe(undefined);
});

test("Math.max", () =>{
    let arr = [3, 5, 1];
    expect(Math.max(...arr)).toBe(5);

    let arr1 = [1, -2, 3, 4];
    let arr2 = [8, 3, -8, 1];
    expect(Math.max(...arr1, ...arr2)).toBe(8);

    expect(Math.max(1, ...arr1, 2, ...arr2, 25)).toBe(25);
});


test('merge array', () => {
    let arr = [3, 5, 1];
    let arr2 = [8, 9, 15];
    let merged = [0, ...arr, 2, ...arr2];
    expect(merged).toEqual([0, 3, 5, 1, 2, 8, 9, 15]);
});

test("StringToCharArray", () => {
    let str = "Hello";
    expect([...str]).toEqual(['H', 'e', 'l', 'l', 'o']);
});

test("object and array copy", () =>{
    let arr = [1, 2, 3];
    let arrCopy = [...arr];

    expect(JSON.stringify(arr)).toBe(JSON.stringify(arrCopy));
    expect(arr).not.toBe(arrCopy);
    arr.push(4);
    expect(arr).toEqual([1, 2, 3, 4]);
    expect(arrCopy).toEqual([1, 2, 3]);
});

test('object copy', () => {
    let obj = {a:1, b:2, c: 3};
    let objCopy = {...obj};

    expect(JSON.stringify(obj)).toBe(JSON.stringify(objCopy));
    expect(obj).not.toBe(objCopy);
})

