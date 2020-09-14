import fetch from 'fetch';
describe("promise api", () => {
    test("promise all", () => {
        let urls = [
            'https://api.github.com/users/iliakan',
            'https://api.github.com/users/remy',
            'https://api.github.com/users/jeresig',
        ];

        let requests = urls.map(url => fetch(url));

        return Promise.all(requests).then(responses => responses.forEach(
            response => console.log(`${response.url}: ${response.status}`)
        ))
    
    })
})