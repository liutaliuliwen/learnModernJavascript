describe("regexp", () => {
    test("escape .", () => {
        expect("Chapter 5.1".match(/\d\.\d/)).toContain('5.1');
    })
    
    test("escape ()", () => {
        expect("function g()".match(/g\(\)/)).toContain("g()");
    })

    test("escape '\'", () => {
        expect("1\\2".match(/\\/)).toContain('\\');
    })

    test("escape /", () => {
        expect('/'.match(/\//)).toContain("/");
        expect("/".match(new RegExp("/"))).toContain("/");
    })

    test("new RegExp", () => {
        let reg = new RegExp("\\d\\.\\d");
        expect("Chapter 5.1".match(reg)).toContain("5.1");
    })
})