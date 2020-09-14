describe("blob", () => {
    it("create blob", () => {
        let blob = new Blob(["<html>...</html>"], {type: 'text/html'});
        // blob.slice(0, 2,'text/html').text().then(data => expect(data).toBe("<h"));
        // console.log(blob.slice(0, 2,'text/html'))

        let hello = new Uint8Array([72, 101, 108, 108, 111]);
        blob = new Blob([hello,' ', 'world'],{type: 'text/plain'});
    })
});