test("match quote string", () => {
    let str = `He said: "She's the one!".`;
    let regexp = /['"](.*?)['"]/g;
    expect(str.match(regexp)).toEqual(["\"She\'"]);

    regexp = /(['"])(.*?)\1/g;
    expect(str.match(regexp)).toEqual(["\"She's the one!\""]);

    regexp = /(?<quote>['"])(.*?)\k<quote>/g;
    expect(str.match(regexp)).toEqual(["\"She's the one!\""]);
});