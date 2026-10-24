
let subtotal = Number(prompt("enter bill amount :"));
let tippercentage = Number(prompt("enter tip percentage :"));

let tip = subtotal * tippercentage /100 ;
let total = subtotal;

total += tip;

console.log("subtotal :$" + subtotal);
console.log("tippercentage " + tippercentage +"%");
console.log("cal tip :$" + tip);
console.log("total amount to pay :$" + total);