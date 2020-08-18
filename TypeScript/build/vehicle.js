var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.applyBrakes = function (decrement) {
        this.speed -= decrement;
    };
    return Car;
}());
var car1 = new Car();
console.log("car1: ", car1);
car1.name = "Audi";
car1.speed = 200;
car1.gears = 6;
console.log("car1: ", car1);
car1.applyBrakes(100);
console.log("car1: ", car1);
