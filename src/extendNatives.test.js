test("extend array", () => {
    class PowerArray extends Array {
        isEmpty(){
            return this.length === 0;
        }
    }


    let arr = new PowerArray(1, 2, 5, 10, 50);
    expect(arr.isEmpty()).toBe(false);

    let filteredArr = arr.filter(item => item >= 10);
    expect(filteredArr).toEqual([10, 50]);
    expect(filteredArr.isEmpty()).toBe(false);
    expect(arr.constructor).toBe(PowerArray);
})


test("test static method", () => {
    class PowerArray extends Array {
        isEmpty(){
            return this.length === 0;
        }

        static get [Symbol.species](){
            return Array;
        }
    }

    let arr = new PowerArray(1, 2, 5, 10, 50);
    expect(arr.isEmpty()).toBe(false);

    let filterdArr = arr.filter(item => item >= 10);
    expect(filterdArr.isEmpty).toBeUndefined();
})