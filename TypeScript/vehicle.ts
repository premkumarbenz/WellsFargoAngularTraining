export interface Vehicle{

    name: string;
    speed: number;
    gears? : number;

    applyBrakes(decrement: number): void;
}
export class Car implements Vehicle{

    name: string;
    speed: number;
    gears?: number;

    //multiple constructor(declartions)
    constructor();
    constructor(name: string, speed: number, gears: number);

    //one constructor(implementation)
    constructor(name?: string, speed?: number, gears?: number){
        this.name = name;
        this.speed = speed;
        this.gears = gears;
    }

    applyBrakes(decrement: number): void {
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



