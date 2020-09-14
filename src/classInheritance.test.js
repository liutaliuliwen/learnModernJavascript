test('class', () => {
    class Animal {
        constructor(name) {
            this.speed = 0;
            this.name = name;
        }

        run(speed) {
            this.speed = speed;
            console.log(`${this.name} runs with speed ${this.speed}.`);
        }

        stop() {
            this.speed = 0;
            console.log(`${this.name} stands still.`);
        }
    }

    let animal = new Animal("My animal");

    class Rabbit extends Animal {
        hide() {
            console.log(`${this.name} hides!`)
        }
    }

    let rabbit = new Rabbit("White Rabbit");
    rabbit.run(5);
    rabbit.hide();
    
})


test("extends expression", () => {
    function f(phrase) {
        return class {
            sayHi() {
                console.log(phrase);
            }
        }
    }

    class User extends f("Hello") {}

    new User().sayHi();
})


test('super', () => {
    class Animal {
        constructor(name){
            this.speed = 0;
            this.name = name;
        }

        run(speed){
            this.speed = speed;
            console.log(`${this.name} runs with speed ${this.speed}.`);
        }

        stop() {
            this.speed = 0;
            console.log(`${this.name} stands still.`)
        }
    }

    class Rabbit extends Animal {
        constructor(name, earLength) {
            this.stop = 0;
            this.name = name;
            this.earLength = earLength;
        }

        hide() {
            console.log(`${this.name} hides!`);
        }

        stop() {
            super.stop();
            this.hide();
        }
    }

    let rabbit = new Rabbit("White Rabbit");
    rabbit.run(5);
    rabbit.stop();
})

test('static method', () => {
    class User {
        static staticMethod(){
            return this === User;
        }
    }

    expect(User.staticMethod()).toBeTruthy();

})

test('class props', () => {
    class User{}

    User.staticMethod = function(){
        return this === User;
    }

    expect(User.staticMethod()).toBeTruthy();
})

test("Article compare", () => {
    class Article {
        constructor(title, date){
            this.title = title;
            this.date = date;
        }

        static compare(articleA, articleB) {
            return articleA.date - articleB.date;
        }

        static createTodays() {
            return new this("Today's digest", new Date());
        }
    }

    let articles = [
        new Article("HTML", new Date(2019, 1, 1)),
        new Article('CSS', new Date(2019, 0, 1)),
        new Article("JavaScript", new Date(2019, 11, 1))
    ]

    articles.sort(Article.compare);

    expect(articles[0].title).toBe("CSS");
    expect(articles[1].title).toBe("HTML");

    let article = Article.createTodays();
    expect(article.title).toBe("Today's digest")
})

test("Class property", () => {
    class Article {
        static publisher = "Levi Ding";
    }

    expect(Article.publisher).toBe("Levi Ding");
})

test('extends static property and method', () => {
    class Animal {
        static planet = "Earth";

        constructor(name, speed) {
            this.speed = speed;
            this.name = name;
        }

        run(speed = 0){
            this.speed += speed;
            console.log(`${this.name} runs with speed ${this.speed}.`)
        }

        static comapre(animalA, animalB){
            return animalA.speed - animalB.speed;
        }
    }


    class Rabbit extends Animal {
        hide() {
            console.log(`${this,name} hides!`);
        }
    }

    let rabbits = [
        new Rabbit("White Rabbit", 10),
        new Rabbit("Black Rabbit", 5)
    ];

    rabbits.sort(Animal.comapre);

    expect(rabbits[0].speed).toBe(5);
    rabbits[0].run();

    expect(Rabbit.planet).toBe("Earth");

    expect(Rabbit.__proto__).toBe(Animal);

    expect(Rabbit.prototype.__proto__).toBe(Animal.prototype);
})