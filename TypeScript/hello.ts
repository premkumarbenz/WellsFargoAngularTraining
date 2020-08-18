import Employee from './employee.js';
import {Vehicle, Car} from './vehicle.js';

console.log("Hello TypeScript");

// Type Annotations 
var x: number;
x = 100;
//x = "200";

var msg:string = "Hello";
//msg = 10;

var user: {id: number, name: string, location?: string};
user = {id: 1, name: "Anil"};
user = {id: 1, name: "Anil", location: "Mumbai"};

// Type inference
var a = 1;
//a = "2";

var b;
b= "ada"
b = {};

var emp = new Employee(1, "Anil", 30000);
console.log("emp", emp);

var car1: Vehicle = new Car();
console.log("car1: ", car1);
car1.name = "Audi"; car1.speed=200; car1.gears = 6;
console.log("car1: ", car1);
car1.applyBrakes(100);
console.log("car1: ", car1);

var car2: Car = new Car("BMW", 230, 6)
console.log("car2: ", car2);