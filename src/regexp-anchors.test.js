describe("anchors", () => {
    test("^ matches start", () => {
        let str1 = "Mary had a little lamb";
        expect(/^Mary/.test(str1)).toBe(true);
    });

    test("match end", () => {
        let str1 = "it's fleece was white as snow";
        expect(/snow$/.test(str1)).toBeTruthy();
    });

    test("time pattern", () => {
        let goodInput = "12:34";
        let badInput = "12:345";

        let regexp = /^\d\d:\d\d$/;
        expect(regexp.test(goodInput)).toBeTruthy();
        expect(regexp.test(badInput)).toBeFalsy();
    });

    test("empty string", () => {
        let inputString = "";
        expect(/^$/.test(inputString)).toBeTruthy();
    });

    test("multiline", () => {
       let str = '1st place: Winnie\n'+
        '2nd place: Piglet\n' +
        '33rd place: Eeyore\n';
        expect(str.match(/^\d+/gm)).toEqual(["1", '2', '33']);
    });

    test("multiline end", () => {
        let str = '1st place: Winnie\n'+
         '2nd place: Piglet\n' +
         '33rd place: Eeyore\n';
         expect(str.match(/\w+$/gm)).toEqual(["Winnie", 'Piglet', 'Eeyore']);
     });

     test('match \n', () => {
        let str =  '1st place: Winnie\n'+
        '2nd place: Piglet\n' +
        '33rd place: Eeyore\n';
        expect(str.match(/\w+\n/gim)).toEqual(['Winnie\n','Piglet\n','Eeyore\n']);
     });

     test("boundary", () => {
        let str = "Hello, Java!";
        expect(str.match(/\bJava\b/)[0]).toBe('Java');
        str = "Hello, JavaScript!";
        expect(str.match(/\bJava\b/)).toBeNull();
     });

     test("hello", () => {
         expect("1 23 456 78".match(/\b\d\d\b/g)).toEqual(["23", "78"]);
         expect("12,34,56".match(/\b\d\d\b/g)).toEqual(['12', '34', '56']);
     });

     test("duty", () => {
         let str = 'Breakfast at 09:00 in the room 123:456.';
         expect(str.match(/\b\d\d:\d\d\b/g)).toEqual(["09:00"]);
     })
})