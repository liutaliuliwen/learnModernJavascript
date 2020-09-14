// let animal = {
//     eats: true,
//     walk() {
//         console.log("Animal walk");
//     }
// };

// let rabbit = {
//     jumps: true,
//     __proto__: animal
// };

// let longEar = {
//     earLength: 10,
//     __proto__: rabbit
// }

// rabbit.__proto__ = animal;
// console.log(rabbit.eats);
// rabbit.walk();

// longEar.walk();
// console.log(longEar.jumps);

// rabbit.walk = function() {
//     console.log("Rabbit! Bounce-bounce!")
// }


// rabbit.walk();

let user = {
    name: "John",
    surname: "Smith",

    set fullName(value) {
        [this.name, this.surname] = value.split(" ");
    },

    get fullName() {
        return `${this.name} ${this.surname}`
    }
};

let admin = {
    __proto__: user,
    isAdmin: true
};

console.log(admin.fullName);
admin.fullName = 'Alice Cooper';
console.dir(admin);

let animal = {
    walk() {
        if(!this.isSleeping){
            console.log(`I walk`);
        }
    },
    sleep() {
        this.isSleeping = true;
    }
};

let rabbit = {
    name: "White Rabbit",
    __proto__: animal
};

rabbit.sleep();
console.log(rabbit.isSleeping);
console.log(animal.isSleeping);