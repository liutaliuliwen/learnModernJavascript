test("test simple proxy", () => {
    let target = {};
    let proxy = new Proxy(target, {});

    proxy.test = 5;
    expect(target.test).toBe(5);
    expect(proxy.test).toBe(5);

    for(let key in proxy){
        console.log(key);
    }

})

test("get proxy", () => {
    let numbers = [0, 1, 2];
    numbers = new Proxy(numbers, {
        get(target, prop) {
            if(prop in target){
                return target[prop];
            }else{
                return 0;
            }
        }
    })

    expect(numbers[1]).toBe(1);
    expect(numbers[123]).toBe(0);
})


test("test proxy get", () => {
    let dictionary = {
        'Hello': 'Hola',
        'Bye': 'Adios'
    };

    dictionary = new Proxy(dictionary, {
        get(target, phrase){
            if(phrase in target){
                return target[phrase];
            }else{
                return phrase;
            }
        }
    });

    expect(dictionary['Hello']).toBe('Hola');
    expect(dictionary['Welcome to Proxy']).toBe('Welcome to Proxy');
})


test('set proxy', () => {
    let numbers = [];
    numbers = new Proxy(numbers, {
        set(target, prop, val) {
            if(typeof val === 'number'){
                target[prop] = val;
                return true;
            }else{
                return false;
            }
        }
    });

    numbers.push(1);
    numbers.push(2);
    expect(numbers.length).toBe(2);

    expect(numbers.push).toThrow();
});


test("ownKeys proxy", () => {
    let user = {
        name: "John",
        age: 30,
        _password: "***"
    };

    user = new Proxy(user, {
        ownKeys(target) {
            return Object.keys(target).filter(key => !key.startsWith("_"));
        }
    });

    for(let key in user){
        console.log(key);
    }

    expect(Object.keys(user)).toEqual(['name', 'age']);
    expect(Object.values(user)).toEqual(["John", 30]);
})

test("own keys", () => {
    let user = {};
    user = new Proxy(user, {
        ownKeys(target) {
            return ['a', 'b', 'c'];
        },

        getOwnPropertyDescriptor(target, prop) {
            return {
                enumerable: true,
                configurable: true
            }
        }
    });
    expect(Object.keys(user)).toEqual(['a', 'b', 'c']);

});


test("delete property", () => {
    let user = {
        name: "John",
        _password: "secret"
    };

    user = new Proxy(user, {
        get(target, prop){
            if(prop.startsWith('_')){
                return false;
            }
            return target[prop];
        },

        set(target, prop, val){
            if(prop.startsWith('_')){
                return false;
            }
            target[prop] = val;
            return true;
        },

        deleteProperty(target, prop) {
            if(prop.startsWith("_")){
                return false
            }
            delete target[prop];
            return true;
        },

        ownKeys(target){
            return Object.keys(target).filter(key => !key.startsWith('_'));
        }


    });

   console.log(user._password)
})

test("has trape", () => {
    let range = {
        start: 1,
        end: 10
    };

    range = new Proxy(range, {
        has(target, prop) {
            return prop >= target.start && prop <= target.end;
        }
    })

    expect(5 in range).toBe(true);
    expect(6 in range).toBe(true);
    expect(10 in range).toBe(true);
    expect(11 in range).toBe(false);
});


test("delay", done => {
    function delay(f, ms){
        return function(){
            setTimeout(() => f.apply(this, arguments), ms)
        }
    }

    function sayHi(user) {
        return `Hello, ${user}!`;
    }

    sayHi = delay(sayHi, 3000);

    sayHi("John");

    done();
})


test("proxy", () => {
    let user = {};
    Reflect.set(user, 'name', 'John');
    expect(user.name).toBe("John");

    user = {
        name: "John"
    };

    user = new Proxy(user, {
        get(target, prop, receiver) {
            console.log(`GET ${prop}`);
            return Reflect.get(target, prop, receiver);
        },

        set(target, prop, val, receiver){
            console.log(`SET ${prop}=${val}`);
            return Reflect.set(target, prop, val, receiver);
        }
    });

    let name = user.name;
    user.name = "Pate";
})