describe("operator test suits",() => {
    it('unary negation', () => {
        let x = 1;
        x = -x;
        expect(x).toBe(-1);
    });

    it("binary operator", () => {
        const x = 1, y = 3;
        expect(y-x).toBe(2);
    })

    it("remainder operator",() => {
        expect(5 % 2).toBe(1);
        expect(8 % 3).toBe(2);
    })

    it("exponentiation opreator",() => {
        expect(2 ** 2).toBe(4);
        expect(2 ** 3).toBe(8);
        expect(2 **　4).toBe(16);
        expect(4 ** (1/2)).toBe(2);
        expect(8 ** (1/3)).toBe(2);

    })

    it("+ concatenate", () => {
        let s = "my" + "string";
        expect(s).toBe("mystring");

        expect("1" + 2).toBe("12");
        expect(2 + "1").toBe("21");
        expect(2+2+'1').toBe('41');

    })

    it('other operator', () => {
        expect(6 - '2').toBe(4);
        expect('6' / '2').toBe(3);
    })

    it('unary +', () => {
        let x = 1;
        expect(+x).toBe(1);

        let y = -2;
        expect(+y).toBe(-2);

        expect(+true).toBe(1);
        expect(+'').toBe(0);

        let apples = "2";
        let oranges = "3";
        expect(+apples + +oranges).toBe(5);
    })

    it("assign =", () => {
        let x = 2 * 2 + 1;
        expect(x).toBe(5);

        let a = 1;
        let b = 2;
        let c = 3 - (a = b + 1);
        expect(a).toBe(3);
        expect(c).toBe(0);
    })

    it(",", () => {
        let a = (1 + 2, 3 + 4);
        expect(a).toBe(7);
    });

    it("++", () => {
        let counter = 1;
        let a = ++counter;
        expect(a).toBe(2);
    })

    it("post plus plus", () => {
        let counter = 1;
        let a = counter++;
        expect(a).toBe(1);
    })

    it("expression ++", () => {
        let counter = 1;
        expect(2 * ++counter).toBe(4);

        expect(2 * counter++).toBe(4);
    })

    


    



}


)