export class Car {
    //one constructor(implementation)
    constructor(name, speed, gears) {
        this.name = name;
        this.speed = speed;
        this.gears = gears;
    }
    applyBrakes(decrement) {
        this.speed -= decrement;
    }
}
// var car1: Vehicle = new Car();
// console.log("car1: ", car1);
// car1.name = "Audi"; car1.speed=200; car1.gears = 6;
// console.log("car1: ", car1);
// car1.applyBrakes(100);
// console.log("car1: ", car1);
// var car2: Car = new Car("BMW", 230, 6)
// console.log("car2: ", car2);
//var car3: Car = new Car("BMW", 230)
