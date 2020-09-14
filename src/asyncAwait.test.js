// test("async", () => {
//     async function f() {
//         return 1;
//     }
    
//     f().then(number => {
//         expect(number).toBe(1);
//     })
// });


// test("await", () => {
//     async function f() {
//         let promise = new Promise((resolve, reject) => {
//             setTimeout(() => resolve("done!"), 1000)
//         });

//         let result = await promise;
//         expect(result).toBe("done!");
//     }
// });


// test("await function", () => {
//     let response = await fetch('/article/promise-chaining/user.json');
//     let user = await response.json();

//     let githubResponse = await fetch('https://api.github.com/users/${user.name}');
//     let gethubUser = await githubResponse.json();

//     //显示头像
//     let img = document.createElement('img');
//     img.src = gethubUser.avatar_url;
//     img.className = "promise-avatar-example";
//     document.body.append(img);

//     await new Promise((resolve, reject) =>　setTimeout(resolve, 3000));
//     img.remove();

//     return gethubUser;
// })


// test("arrow function", () => {
//     (async () => {
//         let response =  await fetch('/article/promise-chaining/user.json');
//         let user = await response.json();
//     })();
// });


// test("thenable", () => {
//     class Thenable {
//         constructor(num) {
//             this.num = num;
//         }

//         then(resolve, reject) {
//             console.log(resolve);
//             setTimeout(() => resolve(this.num * 2), 1000);
//         }
//     }

//     async function f() {
//         let result = await new Thenable(1);
//         expect(result).toBe(2);
//     }

//     f();
// })


test("class async", () => {
    class Waiter {
        async wait() {
            return await Promise.resolve(1);
        }
    }

     const result = await new Waiter().wait();
     expect(result).toBe(1);
})