test("lookahead", () => {
    let str = "1 turkey costs 30€";
    let reg = /\d+(?=€)/g;
    expect(str.match(reg)).toEqual(["30"]);
    reg = /\d+(?!€)/;
    expect(str.match(reg)).toContain("1");
});

test("lookbehind", () => {
    let str = "1 turkey costs $30";
    expect(str.match(/(?<=\$)\d+/g)).toEqual(["30"]);

    expect(str.match(/(?<!\$)\d+/)).toContain("1");
});

test("capture group", () => {
    let str = "1 turkey costs 30€";
    let reg = /\d+(?=(€|kr))/;
    console.log(str.match(reg));
    expect(str.match(reg)).toContain("30");
    expect(str.match(reg)).toContain("€");

    str = "1 turkey costs $30";
    reg = /(?<=(\$|£))\d+/;
    expect(str.match(reg)).toContain("30");
    expect(str.match(reg)).toContain("$");
});

test("find non-negative integers", () => {
    let regexp = /\b(?<!-)\d+\b/g;
    let str = "0 12 -5 123 -18";
    expect(str.match(regexp)).toEqual(["0", "12", "123"]);
});

test("insert after head", () => {
    let regexp = /(?<=(<body .*>))\s/;
    let str = `
    <html>
        <body style="height: 200px">
        ...
        </body>
    </html>
    `;
    str = str.replace(regexp, `<h1>Hello</h1>`);
    console.log(str);
});