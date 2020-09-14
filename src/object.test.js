const {isEmpty, multiplyNumeric} = require('./object');
test('user object has has name, it has value John', () => {
    const user = {};
    user.name = "John";
    expect(user).toEqual({name: "John"});
    user.surname = "Smith";
    expect(user).toEqual({name: "John", surname: "Smith"});
    delete user.name;
    expect(user).toEqual({surname: "Smith"});
});

test('object has no property, it returns true', () => {
    let schedule = {};
    expect(isEmpty(schedule)).toBe(true);   
});


test('object has property, it returns false', () => {
    let schedule = {['8:30'] : 'get up'};
    expect(isEmpty(schedule)).toBe(false);   
});

test('multiplyNumeric can double an object properties its property is type number', () => {
    // 在调用之前
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  multiplyNumeric(menu);
  expect(menu).toEqual({
    width: 400,
    height: 600,
    title: "My menu"
  });
});







