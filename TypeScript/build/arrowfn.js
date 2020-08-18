//function statement
function sum(a, b) {
    return a + b;
}
console.log("sum: ", sum(2, 3));
//function expression
const add = function (a, b) {
    return a + b;
};
console.log("add: ", add(2, 3));
// arrow function
let calc = (x, y) => {
    return x + y;
};
console.log("calc: ", calc(2, 3));
calc = (x, y) => x * y;
console.log("calc: ", calc(2, 3));
const obj = {
    id: 100,
    print: function () {
        var x = 50;
        //var self = this;
        console.log("Id: ", this.id);
        // setTimeout(function(){
        //     console.log("Id after 3 secs: ", this.id);
        // }, 3000);
        setTimeout(() => {
            //var x = 10
            console.log("Id after 3 secs: ", this.id);
        }, 3000);
    }
};
obj.print();
