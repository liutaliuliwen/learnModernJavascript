beforeAll(() => {
  originalLog = global.console.log;
  originalWarn = global.console.warn;
  originalError = global.console.error;

  global.console.log = jest.fn();
  global.console.warn = jest.fn();
  global.console.error = jest.fn();
});

afterAll(() => {
  global.console.log = originalLog;
  global.console.warn = originalWarn;
  global.console.error = originalError;
});

test('class test', () => {
  class User {
    constructor(name) {
      this.name = name;
    }

    sayHi() {
      console.log(this.name);
    }
  }

  let user = new User('John');
  user.sayHi();

  expect(console.log).toHaveBeenCalledWith('John');

  originalLog(typeof User);

  expect(typeof User).toBe('function');

  expect(User).toBe(User.prototype.constructor);

  expect(User.prototype.sayHi).toBe(user.sayHi);

  expect(Object.getOwnPropertyNames(User.prototype)).toEqual(['constructor', 'sayHi']);
});

test('test constructor functon', () => {
  function User(name) {
    this.name = name;
  }

  User.prototype.sayHi = jest.fn();

  // const mockFn  = jest.fn(User.prototype.sayHi);
  let user = new User('John');
  user.sayHi();

  expect(User.prototype.sayHi.mock.calls.length).toBe(1);
  expect(User.prototype.sayHi.mock.calls[0][0]).toBe(undefined);
});

test('class expression', () => {
  let User = class MyClass {
    sayHi() {
      console.log('Hello');
      originalLog(MyClass);
    }
  };

  let user = new User();
  user.sayHi();
  expect(console.log).toHaveBeenCalledWith('Hello');
  expect(() => {
    MyClass;
  }).toThrow();
});

test('class set and get', () => {
  class User {
    constructor(name) {
      this.name = name;
    }

    get name() {
      return this._name;
    }

    set name(value) {
      if (value.length < 4) {
        originalLog('Name is too short.');
        return;
      }
      this._name = value;
    }

    ['say' + 'Hi']() {
      console.log('Hello');
    }
  }

  let user = new User('John');
  expect(user.name).toBe('John');

  user = new User('');
  expect(user).toEqual({});
  new User('sasdad').sayHi();
  expect(console.log).toHaveBeenCalledWith('Hello');
});

test('clock test', () => {
  // function Clock({ template }) {

  //     let timer;

  //     function render() {
  //       let date = new Date();

  //       let hours = date.getHours();
  //       if (hours < 10) hours = '0' + hours;

  //       let mins = date.getMinutes();
  //       if (mins < 10) mins = '0' + mins;

  //       let secs = date.getSeconds();
  //       if (secs < 10) secs = '0' + secs;

  //       let output = template
  //         .replace('h', hours)
  //         .replace('m', mins)
  //         .replace('s', secs);

  //       console.log(output);
  //     }

  //     this.stop = function() {
  //       clearInterval(timer);
  //     };

  //     this.start = function() {
  //       render();
  //       timer = setInterval(render, 1000);
  //     };

  //   }

  class Clock {
    timer;

    constructor({ template }) {
      this.template = template;
    }

    render = () => {
      let date = new Date();

      let hours = date.getHours();
      if (hours < 10) hours = '0' + hours;

      let mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;

      let secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;

      let output = this.template.replace('h', hours).replace('m', mins).replace('s', secs);

      console.log(output);
    };

    stop = () => {
      clearInterval(this.timer);
    };

    start = () => {
      this.render();
      this.timer = setInterval(this.render, 1000);
    };
  }

  let clock = new Clock({ template: 'h:m:s' });
  clock.start();
});
