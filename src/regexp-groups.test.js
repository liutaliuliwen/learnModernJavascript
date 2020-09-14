describe("regexp groups", () => {
    test("group", () => {
        expect("Gogogo now!".match(/(go)+/i)).toContain("Gogogo");
        expect("Gogogo now!".match(/(go)+?/)).toContain("go");
    });


    test("domain", () => {
        let regexp = /([\w-]+\.)+\w+/g;
        expect("site.com my.site.com".match(regexp)).toEqual(["site.com", 'my.site.com']);
    });

    test("catch group", () => {
        let str = '<h1>Hello, world</h1>';
        let tag = str.match(/<(.*?)>/);

        console.log(tag);

        expect(tag).toContain("<h1>");
        expect(tag).toContain("h1")
    });

    test("nested group", () => {
        let str = '<span class="my">';
        let reg = /<(([a-z]+)(\s+[^>]+)?)>/;
        expect(str.match(reg)).toContain('span class="my"');
        expect(str.match(reg)).toContain('span');
        expect(str.match(reg)).toContain(' class="my"');
    });

    test("option group", () => {
        let match = 'a'.match(/a(z)?(c)?/);
        expect(match[0]).toBe("a");
        expect(match[1]).toBeUndefined();
        expect(match[2]).toBeUndefined();

        match = "ac".match(/a(z)?(c)?/);
        expect(match.length).toBe(3);
        expect(match[0]).toBe("ac");
        expect(match[1]).toBeUndefined();
        expect(match[2]).toBe("c");
    });

    test("name group", () => {
        let dateRegexp = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/;
        let str = "2019-04-30";
        let groups = str.match(dateRegexp).groups;
        expect(groups.year).toBe("2019");
        expect(groups.month).toBe("04");
        expect(groups.day).toBe("30");


        dateRegexp = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/g;
        str = "2019-10-30 2020-01-01";
        let results = str.matchAll(dateRegexp);
        for(let result of results) {
            let {year, month, day} = result.groups;
            console.log(`${day}.${month}.${year}`);
        }
    });


    test("matchAll", () => {
        let results = '<h1> <h2>'.matchAll(/<(.*?)>/gi);
        results = Array.from(results);
        expect(results[0][1]).toBe("h1");
        expect(results[1][1]).toBe("h2");

        results = '<h1> <h2>'.matchAll(/<(.*?)>/gi);
        let [tag1, tag2] = results;
        expect(tag1[0]).toBe("<h1>");
        expect(tag1[1]).toBe("h1");
        expect(tag1.index).toBe(0);
        expect(tag1.input).toBe("<h1> <h2>");
    });


    test("replace", () => {
        let str = "John Bull";
        let regexp = /(\w+) (\w+)/;
        expect(str.replace(regexp,"$2, $1")).toBe("Bull, John");


        regexp = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/g;
        str = "2019-10-30, 2020-01-01";
        expect(str.replace(regexp, '$<day>.$<month>.$<year>')).toBe("30.10.2019, 01.01.2020");
    });

    test("non capture group", () => {
        let str ="Gogogo John!";
        let regexp = /(?:go)+ (\w+)/i;
        let result = str.match(regexp);
        expect(result[1]).toBe("John");
        expect(result.length).toBe(2);
    });

    


})