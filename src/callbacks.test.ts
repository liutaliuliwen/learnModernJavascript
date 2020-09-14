import jsdom from 'jsdom';
import jsdomDevtoolsFormatter from "jsdom-devtools-formatter";
// const jsdomDevtoolsFormatter = require('jsdom-devtools-formatter');
test("loadscript", (done) => {
    function loadScript(src, callback){
        let script = document.createElement('script');
        script.src = src;
        script.onload = () => callback(script);
        document.head.append(script);
    }

    const html = `<!DOCTYPE html>
    <html>
      <head>
        <title>Test</title> 
        <script src="./test-module.js"></script>       
      </head>
      <body>
        <div>Test</div>
      </body>
    </html>`

   const dom = new jsdom.JSDOM(html, { runScripts: "dangerously", resources: "usable",  url: "https://example.org/", });
   const { window } = dom;
   const { document } = window;
   window.onload = function(){
       console.log("window loaded");
   }
//    global.document = document;
//    let script = document.createElement('script');
//     script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js';
//     document.head.append(script);

    // loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js',script => {
    //     expect(script.src).toBe("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js");
    //     expect(_).toBeDefined();
    //     expect(_.map([1,2], item => item + 1)).toEqual([2, 3]);
    //     done();
    // })


})

test("sa", () => {
    jsdomDevtoolsFormatter.install();
    const html = `<!DOCTYPE html>
    <html>
      <head>
        <title>Test</title> 
        <script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js"></script>        
      </head>
      <body>
        <div>Test</div>
        <script>
          console.log(_);
        </script>
      </body>
    </html>`

   const dom = new jsdom.JSDOM(html, { runScripts: "dangerously", resources: "usable",  url: "https://cdnjs.cloudflare.com", });
   const { window } = dom;
   const { document } = window;
   console.log(document);
})