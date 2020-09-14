beforeAll(() => {
    originalLog = global.console.log;
    originalWarn = global.console.warn;
    originalError = global.console.error;

    global.console.log = jest.fn();
    global.console.warn = jest.fn();
    global.console.error =jest.fn();
});

afterAll(() => {
    global.console.log = originalLog;
    global.console.warn = originalWarn;
    global.console.error = originalError;
});

test('console.log', () => {
    console.log('123');//toHaveBeenCalledWith
    expect(global.console.log).toHaveBeenCalledWith('123');
});

test('cache', ()=> {
    function slow(x) {
        console.log(`Called with ${x}`);
        return x;
    }

    function cachingDecorator(func) {
        let cache = new Map();

        return function(x) {
            if(cache.has(x)){
                return cache.get(x);
            }
            const result = func(x);
            cache.set(x, result);
            return result;
        }
    }

    slow = cachingDecorator(slow);
    expect(slow(1)).toBe(1);
    expect(slow(1)).toBe(1);
});

test('test mock function', () => {
    function forEach(items, callback) {
        for(let index = 0; index < items.length; index ++) {
            callback(items[index]);
        }
    }

    const mockCallback = jest.fn(x => 42 + x);
    forEach([0, 1], mockCallback);

    expect(mockCallback.mock.calls.length).toBe(2);

    expect(mockCallback.mock.calls[0][0]).toBe(0);

    expect(mockCallback.mock.calls[1][0]).toBe(1);

    expect(mockCallback.mock.results[0].value).toBe(42);
});

test("test mock mock property", () => {
    const myMock = jest.fn();
    const a = new myMock();
    const b = {};
    const bound = myMock.bind(b);
    bound();
    console.log(myMock.mock.instances);
});


test('test mock return values', () => {
    const myMock = jest.fn();

    expect(myMock()).toBe(undefined);

    myMock.mockReturnValueOnce(10).mockReturnValueOnce('x').mockReturnValue(true);

    expect(myMock()).toBe(10);

    expect(myMock()).toBe('x');

    expect(myMock()).toBe(true);

    expect(myMock()).toBe(true);

    const filterTestFn = jest.fn();

    filterTestFn.mockReturnValueOnce(true).mockReturnValueOnce(false);

    const result = [11, 12].filter(num => filterTestFn(num));

    expect(result).toEqual([11]);

    console.log(filterTestFn.mock.calls);

    expect(filterTestFn.mock.calls).toEqual([[11], [12]]);
});

test('test decorator', () => {
    let worker = {
        someMethod(){
            return 1;
        },

        slow(x) {
            console.log("Called with " + x);
            return x * this.someMethod();
        }
    };

    function cachingDecorator(func){
        const caches = new Map();
        return function(x){
            if(caches.has(x)){
                return caches.get(x);
            }
            const result = func.call(this, x);
            caches.set(x, result);
            return result;
        }
    }

    expect(worker.slow(1)).toBe(1);
    worker.slow = cachingDecorator(worker.slow);
    expect(worker.slow(1)).toBe(1);
});

test('js call', () => {
    function sayHi() {
        console.log(this.name);
    }

    let user = {name: "John"};
    let admin = {name: "Admin"};

    sayHi.call(user);
    expect(console.log).toHaveBeenCalledWith('John');
    sayHi.call(admin);
    expect(console.log).toHaveBeenCalledWith('Admin');
   
});

test('js with call', () => {
    function say(phrase) {
        console.log(this.name + ': ' + phrase);
    }

    let user = {name: "John"};
    say.call(user, "Hello");
    expect(console.log).toHaveBeenCalledWith("John: Hello");
});


test("mutiple arguments", () => {
    let worker = {
        slow(min, max) {
            console.log(`Called with ${min}, ${max}`);
            return min + max;
        }
    }
    
    function cachingDecorator(func, hash){
        const caches = new Map();
        return function(){
            const key = hash(arguments);
            if(caches.has(key)){
                return caches.get(key);
            }
            const result = func.call(this, ...arguments);
            caches.set(key, result);
            return result;
        }
    }
    
    worker.slow = cachingDecorator(worker.slow, (args1, args2) => args1 + "," + args2);

    worker.slow(1, 2);
    expect(console.log).toHaveBeenCalled();
    worker.slow(1, 2);
    expect(console.log).toHaveBeenCalledTimes(1);
});


test("hash function", () => {
    function hash(){
        return [].join.call(arguments);
    }
});

