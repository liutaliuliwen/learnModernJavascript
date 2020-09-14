test("public properties", () => {
    class CoffeeMachine {      
        _waterAmount = 0;
    
        set waterAmount(value) {
            if(value < 0) throw new Error("Negative water");
            this._waterAmount = value;
        }

        get waterAmount(){
            return this._waterAmount;
        }

        get power(){
            return this._power;
        }

        constructor(power) {
            this._power = power;
            console.log(`Created a coffee-machine, power: ${power}`);
        }   
    
    }

    let coffeeMachine = new CoffeeMachine(100);

    expect(() => {
        coffeeMachine.waterAmount = -10;
    }).toThrow()

    expect(coffeeMachine.power).toBe(100);

    coffeeMachine.power = 25;
    // expect(() => {
    //     coffeeMachine.power = 25;
    // }).toThrow();
    


})


test('private property', () => {
    class CoffeeMachine {
        #waterLimit = 200;

        #checkWater(value) {
            if(value < 0) throw new Error("Negative water");
            if(value > this.#waterLimit) throw new Error("Too much water");
        }
    }

    let coffeeMachine = new CoffeeMachine();
    coffeeMachine.#waterLimit()
})


