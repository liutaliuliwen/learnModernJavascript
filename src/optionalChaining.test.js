require("@babel/polyfill");
describe("optional chaining",() => {
    it("normal",() => {
        let user = {};
        expect(user && user.address && user.address.street).toBe(undefined);
    });


})

test("no declare", () => {
    let user ={};
    expect(user?.name).toBe(undefined)
})


