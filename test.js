// formula price = base Cost * 1.15 ** M - F (m = buildings owned) (f = type of buildings got for free)
// THIS IS THE FORMULA TO USE
let baseCost = 15;
let m = 0;
m++;
let price = baseCost * 1.15 ** m;
price = Math.ceil(price);

console.log(price);

