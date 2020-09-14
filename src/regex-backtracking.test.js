test("example", () => {
    let regexp = /^(\w\s?)*$/;
    expect(regexp.test("A good string")).toBe(true);
    expect(regexp.test("Bad characters: $@#")).toBe(false);
});


test("takes long time", () => {
    // let regexp = /^(\w+\s?)*$/;
    let regexp = /^(\w+\s)*\w*$/;
    let str = "An input string that takes a long time or even makes this regexp to hang!";
    expect(regexp.test(str)).toBe(false);
});

test("hang haha", () => {
    let regexp = /^(\d+)*$/;
    let str = "012345678901234567890123456789!";
    expect(regexp.test(str)).toBe(false);
});