test('basic promise', () => {
  let promise = new Promise(function (resolve, reject) {
    setTimeout(() => resolve('done'), 1000);
  });

  promise.then((result) => expect(result).toBe('done'));

  promise = new Promise(function (resolve, reject) {
    setTimeout(() => reject(new Error('Whoops!')), 1000);
  });

  promise.catch((error) => expect(error).toBeInstanceOf(Error));
});

test('only one result', () => {
  let promise = new Promise(function (resolve, reject) {
    resolve('done');
    reject(new Error('error'));
    setTimeout(() => resolve());
  });

  promise.then((result) => expect(result).toBe('done'));
  promise = new Promise((resolve, reject) => {
    resolve(123);
  });
  promise.then((result) => expect(result).toBe(123));
});

test('cosumer', (done) => {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('done!'), 1000);
  });
  promise.then((value) => {
    expect(value).toBe('done!');
    console.log(value);
    done();
  });
  // promise.then(result => { console.log(result);expect(result).toBe("done!")},
  // error => expect(error).toBeInstanceOf(Error)
  // )
  expect(promise).resolves.toBe('done!');
});

test('promise then', (done) => {
  expect.assertions(1);
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('done!'), 1000);
  });
  // resolve 运行 .then 中的第一个函数
  promise.then(
    (result) => {
      expect(result).toBe('done!');
      done();
    }, // 1 秒后显示 "done!"
    (error) => {
      expect(error).toMatch('error');
      done();
    } // 不运行
  );
});

test('promise reject', (done) => {
    expect.assertions(1);
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error("Whoops!")), 1000);
      });
      // resolve 运行 .then 中的第一个函数
      promise.then(
        (result) => {
          expect(result).toBe('done!');
          done();
        }, // 1 秒后显示 "done!"
        (error) => {
          expect(error).toBeInstanceOf(Error);
          done();
        } // 不运行
      );
});


test("catch", (done) => {
    expect.assertions(1);
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error("Whoops!")), 1000);
      });
    
    promise.catch(error => {expect(error).toBeInstanceOf(Error); done()});
});


test("finally",(done) => {
    new Promise((resolve, reject) => {
        setTimeout(() => resolve("result"), 2000);
    }).finally(() => console.log("Promise ready"))
    .then(result =>{console.log(result); expect(result).toBe("result"); done()});
});


test("the promise becomes resolved immediately upon creation", (done) => {
    let promise = new Promise(resolve => resolve("done!"));
    promise.then(result=> {console.log(result); done()});
});

function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;
  
    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error(`Script load error for ${src}`));
  
    document.head.append(script);
}

function loadScriptPromise(src) {
    return new Promise((resolve, reject) => {
        let script = document.createElement('script');
        script.src = src;
      
        script.onload = () => resolve(script);
        script.onerror = () => reject(new Error(`Script load error for ${src}`));
        document.head.append(script);
    });   
}

test("what will display", (done) => {
    let promise = new Promise(function(resolve, reject){
        resolve(1);
        setTimeout(() => resolve(2), 1000);
    });
    expect.assertions(1);
    promise.then(data => {console.log(data); expect(data).toBe(1); done();});
})


test("delay function",() => {
    jest.useFakeTimers();
    function delay(ms){
        return new Promise((resolve, reject) => {
            setTimeout(resolve, ms);
        });
    }   
    expect.assertions(1);
    delay(3000).then(() => {expect(1).toBe(1); console.log("hello world")});
    jest.runAllTimers();


})
