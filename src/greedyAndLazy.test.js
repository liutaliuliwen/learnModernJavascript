describe("regexp greedy and lazy", () => {
    test("test all ", () => {
        let reg = /".+"/g;
        let str = 'a "which" and her "broom" is one';
        expect(str.match(reg)).toContain('"which" and her "broom"');
        reg = /".+?"/g;
        expect(str.match(reg)).toEqual(['"which"', '"broom"']);
      }); 
      
    
    test("quantifier", () => {
        let str = "123 456";
        expect(str.match(/\d+ \d+?/g)).toEqual(["123 4"]);
    });

    test("another method", () => {
        let reg = /"[^"]+"/g;
        let str = 'a "witch" and her "broom" is one';
        expect(str.match(reg)).toEqual(["\"witch\"", "\"broom\""]);
    });

    test("href", () => {
        let str = '...<a href="link" class="doc">...';
        let reg = /<a href=".*" class="doc">/g;
        expect(str.match(reg)).toContain('<a href="link" class="doc">');
    });

    test("2 links", () => {
        let str = '...<a href="link1" class="doc">... <a href="link2" class="doc">...';
        let reg = /<a href=".*?" class="doc">/g;
        expect(str.match(reg)).toEqual(['<a href="link1" class="doc">', '<a href="link2" class="doc">']);
    });

    test("one link", () => {
        let str = '...<a href="link1" class="wrong">... <p style="" class="doc">...';
        let reg = /<a href=".*?" class="doc">/g;
        expect(str.match(reg)).toContain('<a href="link1" class="wrong">... <p style="" class="doc">');
        expect(str.match(/<a href="[^"]*" class="doc">/g)).toBeNull();
        let str2 = '...<a href="link1" class="doc">... <a href="link2" class="doc">...';
        expect(str2.match(/<a href="[^"]*" class="doc">/g)).toContain('<a href="link1" class="doc">');
    });

    test("match result", () => {
        expect("123 456".match(/\d+? \d+?/g)).toContain("123 4");
    });

    test("HTML comments", () => {
        let reg = /<!--.*?-->/g;
        let str = `... <!-- My -- comment test --> ..  <!----> ..`;
        expect(str.match(reg)).toEqual(["<!-- My -- comment test -->", '<!---->']);
    });

    test("HTML tags", () => {
        let reg = /<[a-zA-Z]+?.*?>/g;
        let str = '<> <a href="/"> <input type="radio" checked> <b>';
        expect(str.match(reg)).toEqual(['<a href="/">','<input type="radio" checked>', '<b>']);
    });
});