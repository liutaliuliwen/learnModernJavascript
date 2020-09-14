
import jsdom from 'jsdom';

test("className", () => {
    const virtualConsole = new jsdom.VirtualConsole();
    const { JSDOM } = jsdom;
    const {window} = new JSDOM(`<!DOCTYPE html><body class="main page"></body>`, { pretendToBeVisual: true, virtualConsole });
    console.log(window.document.body.classList);
    expect(window.document.body.classList).toContain("main");
    expect(window.document.body.classList).toContain("page");
    // document.body.classList
});

test("classList api", () => {
    document.body.innerHTML =
   `<div class='container'></div>`;
   document.body.classList.add("main");
   document.body.classList.add("page");
   document.body.classList.add("article");
    expect(document.body.classList).toContain("article");
    // for(let name of document.body.classList){
    //     console.log(name);
    // }

    let container: HTMLElement = document.querySelector(".container");
    container.style.backgroundColor = "red";
    expect(container.style.backgroundColor).toBe("red");

    document.body.style.display = "none";
    container = document.querySelector(".container");
    expect(container).not.toBeNull();
    expect(document.body.style.display).toBe("none");
    document.body.style.display = "";
    expect(document.body.style.display).toBe("");
});

test("notice unit", () => {
    document.body.style.margin = "20";
    expect(document.body.style.margin).toBe("");

    document.body.style.margin = "20px";
    expect(document.body.style.margin).toBe("20px");
    expect(document.body.style.marginTop).toBe("20px");
    expect(document.body.style.marginLeft).toBe('20px');
});

test("computedStyle", () => {
    document.head.innerHTML = `
        <style>body {color: red; margin: 5px}</style>
    `;
    document.body.innerHTML = `
        The red text
    `;
    expect(document.body.style.color).toBe("");
    expect(document.body.style.margin).toBe("");
    const bodyStyle = getComputedStyle(document.body)

    expect(bodyStyle.color).toBe("red");
    expect(bodyStyle.margin).toBe("5px");
});


test("cssText", () => {
    document.body.innerHTML = `
        <div id="div">Button</div>
    `;
    const div = document.getElementById("div");
    expect(div).not.toBeNull();
    div.style.cssText = `
        color: red !important;
        background-color: yellow;
        width: 100px;
        text-align: center;
    `;
    expect(div.style.cssText).toMatch(/color|background-color|with|text-align/g)
})