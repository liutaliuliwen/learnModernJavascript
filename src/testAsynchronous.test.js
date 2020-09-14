describe('testing asynchronous code', () => {
    it("callback", () => {
        
        test('the data is peanut butter', () => {
            const fetchData = jest.fn(
             cb => {setTimeout(() => cb("peanut butter"),10)}   
            );
        

            fetchData(callback);
        })
    })
})