// 防抖
// 触发高频事件后n秒内函数只会执行一次，如果n秒内高频事件再次被触发，则重新计算时间

function debounce(ms, f) {
  const timer = setTimeout(f, ms);
  f.apply();
}

function delay(ms) {
  return function(f){
    setTimeout(() => {
        f();
    }, ms);
  };
}

function f(...a){
    return arguments;
}

function wrapper(f){
    return function(...a){
        return f.apply(null, [...arguments]);
    };
}

test('test delay function', () => {
  jest.useFakeTimers();
  let fn = jest.fn();
  delay(1000)(fn);
  jest.runAllTimers();
  expect(fn).toHaveBeenCalled();

  fn = jest.fn((a,b) => console.log(a + b));
  const result = delay(1000)(fn);
  jest.runAllTimers();
  expect(result).toBe('Hello World!');
});

test("arguments", () => {
    expect(f(1)).toContain(1);
    expect(f(1, 2)).toContain(2);
    expect(f(1, 2, 5)).toContain(5);
});


test("test function wrapper", () => {
    const mockFn = jest.fn((a, b) => a + b);
    const f = wrapper(mockFn);
    expect(f(1, 3)).toBe(4);
    expect(mockFn).toBeCalledTimes(1);    
});

