test("array type", () => {
    let list: number[] = [1, 2, 3];
    expect(list).toEqual([1, 2, 3]);
    let list2: Array<number> = [100, 200];
    expect(list2).toContain(100);
    expect(list2).toContain(200);
    expect(list2).toHaveLength(2);
});


test("tuple type", () => {
    let x: [string, number];
    x = ["hello", 10];
    expect(x[0]).toBe("hello");
    expect(x[1]).toBe(10);
    expect(x[0].substring(1)).toBe("ello");
    // x[3] ="world";
    // expect(x[3]).toBe("world");
});

test("Enum type", () => {
    enum Color {
        Red,
        Green,
        Blue,
    }
    let c:Color = Color.Green;
    console.log(c);
    expect(c).toBe(1);

    enum Color2 {
        Red = 1,
        Green,
        Blue
    }
    let c2:Color2 = Color2.Green;
    expect(c2).toBe(2);
});