test("set object.__proto__ use create", () => {
    let animal = {
        eats: true
    };
    
    let rabbit = Object.create(animal);
    expect(rabbit.eats).toBe(true);

    expect(Object.getPrototypeOf(rabbit)).toBe(animal);

    Object.setPrototypeOf(rabbit, {});

    expect(rabbit.eats).toBe(undefined);
});

test("create object", () => {
    let animal = {
        eats: true
    };

    let rabbit = Object.create(animal, {
        jumps: {
            value: true
        }
    });

    expect(rabbit.jumps).toBe(true);
    expect(rabbit.eats).toBe(true);

});

test("very pain object", () => {
    let obj = Object.create(null);

    expect(obj.__proto__).toBe(undefined);
    expect(obj.toString).toBe(undefined);

    let chineseDictionary = Object.create(null);
    chineseDictionary.hello = "你好";
    chineseDictionary.bye =  "再见";

    expect(Object.keys(chineseDictionary)).toEqual(["hello", "bye"]);
});

test("add toString method to dictionary", () => {
    let dictionary = Object.create(null);

    // dictionary.toString = function(){
    //     return Object.keys(this).join(",");
    // }
    Object.defineProperty(dictionary, "toString", {
        enumerable: false,
        writable: false,
        configurable: false,
        value() {
            return Object.keys(this).join(",");
        }
    })

    dictionary.apple = "Apple";
    dictionary.__proto__ = "test";

    for(let key in dictionary) {
        console.log(key);
    }


    console.log(dictionary);
    expect(dictionary.toString()).toBe("apple,__proto__");
});