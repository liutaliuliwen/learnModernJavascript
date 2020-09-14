test("search method",() => {
    let str = "I love JavaScript!";

    let regexp = /love/;
    expect(str.search(regexp)).toBe(2);

    str = "I love JavaScript!";
    let substr = 'love';
    expect(str.search(substr)).toBe(2);

    expect(str.search(/LOVE/)).toBe(-1);
})


test("regex i decorator", () => {
    let str = "I love JavaScript!";
    expect(str.search(/LOVE/)).toBe(-1);
    expect(str.search(/LOVE/i)).toBe(2);
})

test('regex g decorator', () => {
    let str = '+7(903)-123-45-67';
    let regexp = /\d/;
    expect(str.match(regexp)[0]).toBe('7');
    regexp = /\d/g;
    expect(str.match(/\d/g)).toEqual(['7', '9', '0', '3','1', '2', '3', '4', '5', '6', '7']);
    expect(str.match(/\d/g).join('')).toBe('79031234567');
})

test('regex class', () => {
    let str = "Is there CSS4?";
    let regex = /CSS\d/;
    expect(str.match(regex)[0]).toBe('CSS4');

    expect("I love HTML5!".match(/\s\w\w\w\w\d/)[0]).toBe(' HTML5');
})

test("string replace", () => {
    let str = "+7(903)-123-45-67";
    expect(str.replace(/\D/g,"")).toBe('79031234567');

    expect("Z".match(/./)[0]).toEqual("Z");
    let regexp = /CS.4/;
    expect('CSS4'.match(regexp)[0]).toEqual('CSS4');
    expect('CS-4'.match(regexp)[0]).toEqual('CS-4');
    expect('CS 4'.match(regexp)[0]).toEqual('CS 4');
    expect("CS4".match(regexp)).toBe(null);
})

test("match all character", () => {
    expect("A\nB".match(/A.B/)).toBe(null);
    expect("A\nB".match(/A.B/s)[0]).toBe("A\nB");
    expect("A\nB".match(/A[\s\S]B/)[0]).toBe("A\nB");
    expect("1 - 5".match(/\d\s*-\s*\d/)[0]).toBe("1 - 5")
})