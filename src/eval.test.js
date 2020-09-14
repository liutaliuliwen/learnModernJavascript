test('eval', () => {
  let code = 'console.log("Hello")';
  eval(code);

  let value = eval('1+1');
  console.log(value);
  expect(value).toBe(2);

  value = eval('let i = 0; ++i');
  expect(value).toBe(1);
});

test('eval lexical enviroment', () => {
  let a = 1;
  function f() {
    let a = 2;
    eval('console.log(a)');
  }
  f();

  let x = 5;
  eval('x = 10');
  expect(x).toBe(10);
});

test('eval in strict mode', () => {
  'use strict';
  eval('let x = 5; function f() {}');
  expect(typeof x).toBe('undefined');
});

test('global eval', () => {
  global.x = 1;
  let x = 5;
  global.eval(`console.log(x)`);
});

test('class async', () => {
  class Waiter {
    async wait() {
      return await Promise.resolve(1);
    }
  }

  new Waiter().wait().then((response) => expect(response).toBe(1));
});

// test('async error', () => {
//   async function f() {
//     try {
//       let response = await fetch('http://no-such-url');
//       let user = await response.json();
//     } catch (err) {
//       console.log(err);
//     }
//   }

//   f();
// });

test('httpError', () => {
  class HttpError extends Error {
    constructor(response) {
      super(`${response.status} for ${response.url}`);
      this.name = 'HttpError';
      this.response = response;
    }
  }

  async function loadJson(url) {
    const response = await fetch(url);
    if (response.status === 200) {
      return response.json();
    } else {
      throw new HttpError(response);
    }
  }

  // 询问用户名，直到 github 返回一个合法的用户
  async function demoGithubUser() {
    let user;
    while (true) {
      let name = prompt('Enter a name?', 'iliakan');
      try {
        user = await loadJson(`https://api.github.com/users/${name}`);
        console.log(`Full name: ${user.name}.`);
        break;
      } catch (err) {
        if (err instanceof HttpError && err.response.status == 404) {
          console.log('No such user, please reenter.');
        } else {
          throw err;
        }
      }
    }
    return user;
  }

  demoGithubUser();
});

test('async', () => {
  async function wait() {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return 10;
  }

  function f() {
    // ...这里怎么写？
    // 我们需要调用 async wait() 并等待以拿到结果 10
    // 记住，我们不能使用 "await"
    // wait().then(response => expect(response).toBe(10))
    (async () => {
      let response = await wait();
      console.log(response);
    })();
  }

  f();
});

test("promise api", () => {
  return Promise.all([
    new Promise(resolve => setTimeout(() => resolve(1), 3000)),
    new Promise(resolve => setTimeout(() => resolve(2), 2000)),
    new Promise(resolve => setTimeout(() => resolve(3), 1000))
  ]).then(data => {
    expect(data).toEqual([1, 2, 3]);
  })
})
