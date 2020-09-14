const { TestScheduler } = require("jest");
test("test unicode", () => {
    let str = "A ბ ㄱ";
    expect(str.match(/\p{L}/gu)).toEqual(['A','ბ','ㄱ']);
    expect(str.match(/\p{L}/g)).toBe(null);
})

test("16 digit number", () => {
    let regexp = /x\p{Hex_Digit}\p{Hex_Digit}/u;
    expect("number: xAF".match(regexp)[0]).toBe("xAF");
})

test("Chinese character", () => {
    let regexp = /\p{sc=Han}/gu;
    let str = 'Hello Привет 你好 123_456';
    expect(str.match(regexp)).toEqual(["你", "好"])
})

test("currency symbol", () => {
    let regexp = /\p{Sc}\d/gu;
    let str = 'Prices: $2, €1, ¥9';
    expect(str.match(regexp)).toEqual(['$2', '€1', '¥9'])
})