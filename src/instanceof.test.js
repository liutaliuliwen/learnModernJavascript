test("instanceof", () => {
    class Rabbit{}
    let rabbit = new Rabbit();
    expect(rabbit instanceof Rabbit).toBeTruthy();
})


test("constructor", () => {
    function Rabbit(){}
    expect(new Rabbit() instanceof Rabbit);

    let arr = [1, 2, 3];
    expect(arr instanceof Array).toBeTruthy();
    expect(arr instanceof Object).toBeTruthy();

})