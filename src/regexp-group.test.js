describe("regexp group", () => {
    test("()", () => {
        expect("Gogogo now!".match(/(go)+/i)).toContain("Gogogo");
    });

    test("domain", () => {
        let regexp = /([\w-]+\.)+\w+/g;
        expect("mail.com".match(regexp)).toContain("mail.com");

        expect("users.mail.com".match(regexp)).toContain("users.mail.com");

        expect("smith.users.mail.com".match(regexp)).toContain("smith.users.mail.com");

        expect("my-site.com".match(regexp)).toContain("my-site.com");
    });

    test("email", () => {
        let regexp = /[-.\w]+@([\w-]+\.)+[\w-]+/g;
        expect("my@mail.com".match(regexp)).toContain("my@mail.com");

        expect("his@site.com.uk".match(regexp)).toContain("his@site.com.uk");
    });


    test("match content", () => {
        let str = '<h1>Hello, world!</h1>';
        let tag = str.match(/<(.*?)>/);
        expect(tag[0]).toBe("<h1>");
        expect(tag[1]).toBe("h1");
    });

    test("match tag", () => {
        let parttern = /<(.*?)(\s)>/;
    });
})
