
// implicit args==> this, arguments
function sum(x, y){
    console.log("sum...", arguments, this);
}
// function sum(){
//     console.log("sum no args...");
// }
sum(2,3);
sum();
sum(2,3,4,5)