test("regex or", () => {
    let reg = /html|php|css|java(script)?/gi;
    let str = "First HTML appeared, then CSS, then JavaScript";
    expect(str.match(reg)).toEqual(["HTML", "CSS", "JavaScript"]);
});

test("time regex", () => {
    let reg = /([01]\d|2[0-3]):[0-5]\d/gi;
    let str = "18:89"
    expect(str.match(reg)).toBeNull();


    str = "23:12";
    expect(str.match(reg)).toEqual(["23:12"]);

    str = "00:00 10:10 23:59 25:99 1:2";
    expect(str.match(reg)).toEqual(["00:00", "10:10", "23:59"]);
});


test("look for programming language", () => {
    let reg = /PHP|C(\+\+)?|Java(Script)?/g;
    let str = "Java JavaScript PHP C++ C";
    expect(str.match(reg)).toEqual(["Java", "JavaScript", "PHP", "C++", "C"]);
    console.log(str.match(reg));
});

test("test style tag", () => {
    let reg = /<style>|<style( [a-z]+=".+")+>/g;
    let str = '<style> <styler> <style test="...">';
    console.log(str.match(reg));
});

test("bbtag", () => {
    let reg = /\[(b|url|quote)\](.*?)\[\/\1\]/g;
    let str = "[b]text[/b] [url]http://google.com[/url]";
    console.log(str.match(reg));
});