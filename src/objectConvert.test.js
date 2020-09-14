test('object converts value', () => {
    let user = {
        name: "John",
        money: 1000,
        [Symbol.toPrimitive](hint){
            console.log(`hint: ${hint}`);
            
        }
    }
 
});