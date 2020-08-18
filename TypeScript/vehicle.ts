interface Vehicle{

    name: string;
    speed: number;
    gears? : number;

    applyBrakes(decrement: number): void;
}
class Car implements Vehicle{

    name: string;
    speed: number;
    gears?: number;

    applyBrakes(decrement: number): void {
        this.speed -= decrement;
    }

}
var car1: Vehicle = new Car();
console.log("car1: ", car1);
car1.name = "Audi"; car1.speed=200; car1.gears = 6;
console.log("car1: ", car1);
car1.applyBrakes(100);
console.log("car1: ", car1);

