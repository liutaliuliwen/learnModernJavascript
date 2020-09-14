const TextEncodingPolyfill = require('text-encoding');
global.TextEncoder = TextEncodingPolyfill.TextEncoder;
global.TextDecoder = TextEncodingPolyfill.TextDecoder;
describe("text-decoder", () => {
    it("text decoder", () => {
        const TextDecoder = global.TextDecoder;
        let uint8Array = new Uint8Array([72, 101, 108, 108, 111]);
        console.log(new TextDecoder().decode(uint8Array));
    });

})