test("promise", () => {
    let promise = Promise.resolve();
    promise.then(() => console.log("promise done!"));
    console.log("code finished");
});


test("promise deque", () => {
    Promise.resolve().then(() => console.log("promise done!"))
    .then(() => console.log("code finished"));
})


test("thenable", () => {
    class Thenable {
        constructor(num) {
            this.num = num;
        }

        then(resolve, reject) {
            console.log(resolve);
            setTimeout(() => resolve(this.num * 2), 1000);
        }
    }

    async function f() {
        let result = await new Thenable(1);
        expect(result).toBe(2);
    }

    f();
})

