import jsdom, { JSDOM } from 'jsdom';
import pretty from 'pretty';

test('create message', () => {
  let div = document.createElement('div');
  div.classList.add('alert');
  div.innerHTML = "<strong>Hi there!</strong> You've read an import message.";
  document.body.append(div);
  let style = document.createElement('style');
  style.innerHTML = `
    .alert {
        padding: 15px;
        border: 1px solid #d6e9c6;
        border-radius: 4px;
        color: #3c763d;
        background-color: #dff0d8;
      }
    `;
  document.head.append(style);
  expect(document.querySelector('.alert')).not.toBeNull();
  expect(document.querySelector('.alert strong').textContent).toBe('Hi there!');

  const alert = document.querySelector('.alert');

  const dom = new JSDOM(`<!DOCTYPE html>hello`);
  console.log(pretty(dom.serialize(), { ocd: true }));
});

test('modify dom', () => {
  const dom = new JSDOM(`<!DOCTYPE html>
    <body>
        <ol id="ol">
            <li>0</li>
            <li>1</li>
            <li>2</li>
        </ol>
    <body>
    `);
  const { window } = dom;
  const { document } = window;
  const ol = document.getElementById('ol');
  expect(ol).not.toBeNull();

  ol.before('before');
  ol.after('after');
  console.log(pretty(dom.serialize(), { ocd: true }));

  let liFirst = document.createElement('li');
  liFirst.textContent = 'prepend';
  ol.prepend(liFirst);
  expect(document.querySelector('#ol>li').textContent).toBe('prepend');

  let liLast = document.createElement('li');
  liLast.innerHTML = 'append';
  ol.append(liLast);

  const lis = document.querySelectorAll('ol>li');
  expect(lis[lis.length - 1].textContent).toBe('append');
});

test('before method', () => {
  const dom = new JSDOM(`<!DOCTYPE html>
    <body>
    <div id="div"></div>
    <body>
    `);
  const { window } = dom;
  const { document } = window;
  const div = document.getElementById('div');
  expect(div).not.toBeNull();

  div.before('<p>Hello</p>', document.createElement('hr'));
  expect(document.querySelector('p')).toBeNull();
  expect(document.querySelector('hr')).not.toBeNull();
});

test('insertAdjacentHTML', () => {
  const dom = new JSDOM(`<!DOCTYPE html>
    <body>
    <div id="div"></div>
    <body>
    `);
  const { window } = dom;
  const { document } = window;
  const div = document.getElementById('div');
  expect(div).not.toBeNull();
  div.insertAdjacentHTML('beforebegin', '<p>Hello</p>');
  expect(document.querySelector('p').textContent).toBe('Hello');
  div.insertAdjacentHTML('afterend', "<p class='bye'>Bye</p>");
  expect(document.querySelector('.bye').textContent).toBe('Bye');

  document.body.insertAdjacentHTML(
    'afterbegin',
    `<div class="alert">
    <strong>Hi there!</strong> You've read an important message.
  </div>`
  );

  expect(document.querySelector('.alert').tagName).toBe('DIV');
});

test('test remove', () => {
  jest.useFakeTimers();
  const dom = new JSDOM(`<!DOCTYPE html>
    <head>
        <style>
            .alert {
            padding: 15px;
            border: 1px solid #d6e9c6;
            border-radius: 4px;
            color: #3c763d;
            background-color: #dff0d8;
            }
        </style>
    </head>
    <body>
   
    <body>
    `);
  const { window } = dom;
  const { document } = window;
  let div = document.createElement('div');
  div.className = 'alert';
  div.innerHTML = "<strong>Hi there!</strong> You've read an important message.";
  document.body.append(div);
  expect(document.querySelector('.alert')).not.toBeNull();
  console.log(pretty(dom.serialize(), { ocd: true }));

  setTimeout(() => div.remove(), 1000);
  jest.runAllTimers();
  expect(document.querySelector('.alert')).toBeNull();
  console.log(pretty(dom.serialize(), { ocd: true }));
});

test('move node', () => {
  const dom = new JSDOM(`<!DOCTYPE html>
    <body>
    <div id="first">First</div>
    <div id="second">Second</div>
    <body>
    `);
  const { window } = dom;
  const { document } = window;
  const first: HTMLElement = document.getElementById('first');
  const second = document.getElementById('second');
  second.after(first);

  const divs = document.querySelectorAll('div');
  expect(divs).toHaveLength(2);
  expect(divs[0].id).toBe('second');
  expect(divs[1].id).toBe('first');
});

test('copy node', () => {
  const dom = new JSDOM(`<!DOCTYPE html>
    <body>
    <style>
        .alert {
        padding: 15px;
        border: 1px solid #d6e9c6;
        border-radius: 4px;
        color: #3c763d;
        background-color: #dff0d8;
        }   
    </style>

    <div class="alert" id="div">
    <strong>Hi there!</strong> You've read an important message.
    </div>
    <body>
    `);
  const { window } = dom;
  const { document } = window;
  let div = document.getElementById('div');
  let div2 = div.cloneNode(true) as HTMLElement;
  div2.querySelector('strong').innerHTML = 'Bye there!';
  div.after(div2);
  const alerts = document.querySelectorAll('.alert');
  expect(alerts).toHaveLength(2);
  expect(document.querySelectorAll('strong')[1].textContent).toBe('Bye there!');
});

test('DocumentFragment', () => {
  const dom = new JSDOM(`<!DOCTYPE html>
    <body>
        <ul id="ul"></ul>
    <body>
    `);
  const { window } = dom;
  const { document } = window;
  function getListContent() {
    let fragment = document.createDocumentFragment();
    for (let i = 1; i <= 3; i++) {
      let li = document.createElement('li');
      li.append(i + '');
      fragment.append(li);
    }
    return fragment;
  }

  const ul = document.getElementById('ul');
  ul.append(getListContent());
  console.log(pretty(dom.serialize(), { ocd: true }));
  const lis = document.querySelectorAll('li');
  expect(lis).toHaveLength(3);
  expect(lis[0].textContent).toBe('1');
  expect(lis[1].textContent).toBe('2');
  expect(lis[2].textContent).toBe('3');
});

test('append content', () => {
  jest.useFakeTimers();
  const dom = new JSDOM(
    `<!DOCTYPE html>
    <p>Somewhere in the page...</p>
    <script>
      document.write('<b>Hello from JS</b>');
    </script>
    <p>The end</p>
    `,
    { runScripts: 'dangerously' }
  );
  const { window } = dom;
  const { document } = window;
  console.log(pretty(dom.serialize(), { ocd: true }));
  expect(document.querySelector('b').textContent).toBe('Hello from JS');
  setTimeout(() => document.write('<b>...By this.</b>'), 1000);
  jest.runAllTimers();
  expect(document.querySelectorAll('b')).toHaveLength(1);
});

test('clear element', () => {
  const dom = new JSDOM(
    `<!DOCTYPE html>
    <ol id="elem">
    <li>Hello</li>
    <li>World</li>
    </ol>
    `,
    { runScripts: 'dangerously' }
  );
  const { window } = dom;
  const { document } = window;
  function clear(elem: HTMLElement) {
    elem.innerHTML = '';
  }
  clear(window.elem);
  expect(document.querySelectorAll('li')).toHaveLength(0);
});

test('incorret html', () => {
  const dom = new JSDOM(
    `<!DOCTYPE html>
    <table id="table">
    aaa
    <tr>
      <td>Test</td>
    </tr>
  </table>
    `,
    { runScripts: 'dangerously' }
  );
  const { window } = dom;
  const { document } = window;
  const table = document.querySelector('#table');
  table.remove();
  expect(document.body.textContent).toMatch(/aaa/);
  console.log(pretty(dom.serialize(), { ocd: true }));
});

test('insert list', () => {
  const dom = new JSDOM(
    `<!DOCTYPE html>
    <ul id="ul">
    <li id="one">1</li>
    <li id="two">4</li>
    </ul>
    `,
    { runScripts: 'dangerously' }
  );
  const { window } = dom;
  const { document } = window;

  const one = document.getElementById('one');
  one.insertAdjacentHTML('afterend', '<li>2</li>');
  const two = document.getElementById('two');
  two.insertAdjacentHTML('beforebegin', '<li>3</li>');

  const lis = document.querySelectorAll('li');
  expect(lis).toHaveLength(4);
  expect(lis[1].textContent).toBe('2');
  expect(lis[2].textContent).toBe('3');
});

test('insert list', () => {
  const dom = new JSDOM(
    `<!DOCTYPE html>
    <table id="table">
    <thead>
      <tr>
        <th>Name</th><th>Surname</th><th>Age</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John</td><td>Smith</td><td>10</td>
      </tr>
      <tr>
        <td>Pete</td><td>Brown</td><td>15</td>
      </tr>
      <tr>
        <td>Ann</td><td>Lee</td><td>5</td>
      </tr>     
    </tbody>
    </table>
    `,
    { runScripts: 'dangerously' }
  );
  const { window } = dom;
  const { document } = window;

  const trs = document.querySelectorAll('#table > tbody > tr');
  const hash = [].reduce.call(
    trs,
    (prev, curr) => {
      const key = curr.querySelector('td').textContent;
      return {[key]: curr, ...prev};
    },
    {}
  );
  const keys: string[] = Object.keys(hash);
  expect(keys).toEqual(["Ann", "Pete","John",]);
  keys.sort();
  const sortedTrs = keys.map(key => hash[key]);
  document.querySelector("tbody").append(...sortedTrs);
  console.log(pretty(dom.serialize(), { ocd: true }));

  let trList = document.querySelectorAll("tbody tr");
  expect(trList[0].querySelector('td').textContent).toBe("Ann");
  expect(trList[1].querySelector('td').textContent).toBe("John");
});

test("timer", () => {
    const now = new Date();
    now.getHours();
    now.getMinutes();
    now.getSeconds();
});
