test("array buffer", () => {    
    let buffer = new ArrayBuffer(16);

    let view = new Uint32Array(buffer);

    expect(Uint32Array.BYTES_PER_ELEMENT).toBe(4);
    expect(view.length).toBe(4);
    expect(view.byteLength).toBe(16);

    view[0] = 123456;
    for(let num of view){
        console.log(num);
    }
    console.dir(view);
    expect(view).toContain(123456)
});

test("Array buffer is not a array", () => {
    let buffer = new ArrayBuffer(16);
    expect(buffer.byteLength).toBe(16);
});

test("typedArray", () => {
    let arr = new Uint8Array([0, 1, 2, 3]);
    expect(arr.length).toBe(4);

    expect(arr[0]).toBe(0);
    expect(arr[3]).toEqual(3);

    let arr16 = new Uint16Array([1, 1000]);
    let arr8 = new Uint8Array(arr16);
    expect(arr8[0]).toBe(1);
    expect(arr8[1]).toBe(232);

    let arr2 = new Uint16Array(4);
    expect(arr2.BYTES_PER_ELEMENT).toBe(2);
    expect(arr2.byteLength).toBe(8);
});

test("different view", () => {
    let arr8 = new Uint8Array([0, 1, 2, 3]);
    let arr16 = new Uint16Array(arr8.buffer);
    expect(arr16[0]).toBe(256);
    expect(arr16[1]).toBe(770);
});

test("overflow", () => {
    let uint8Array = new Uint8Array(16);
    let num = 256;
    console.log(num.toString(2));

    uint8Array[0] = 256;
    uint8Array[1] = 257;
    expect(uint8Array[0]).toBe(0);
    expect(uint8Array[1]).toBe(1);
})