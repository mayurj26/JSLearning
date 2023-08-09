var arrayFruit = ["Banna", "Orange", "Apple", "Mango", "WateMelon"];
console.log(arrayFruit);
let A = arrayFruit.splice(arrayFruit.length - 1, 1);
console.log(`removed last fruit`);

console.log(arrayFruit);
console.log(A);
console.log(`---------------------------------------------------`);
var arrayFruit1 = ["Banna", "Orange", "Apple", "Mango", "WateMelon"];
console.log(arrayFruit1);
let B = arrayFruit1.splice(arrayFruit1.length - 5, 1);
console.log(`removed first fruit`);
console.log(arrayFruit1);
console.log(B);
console.log(`---------------------------------------------------`);

var arrayFruit2 = ["Banna", "Orange", "Apple", "Mango", "WateMelon"];
console.log(arrayFruit2);
console.log(`Added  papaya  before  banana`);
let AddedElement1 = arrayFruit2.splice(0, 0, "Papaya");
console.log(arrayFruit2);
//console.log(AddedElement1);
console.log(`---------------------------------------------------`);
var arrayFruit3 = ["Banna", "Orange", "Apple", "Mango", "WateMelon"];
console.log(arrayFruit3);
console.log(`Remove Mango`);
let AddedElement2 = arrayFruit3.splice(arrayFruit3.length - 2, 1);
console.log(arrayFruit3);
console.log(AddedElement2);
console.log(`---------------------------------------------------`);
var arrayFruit4 = ["Banna", "Orange", "Apple", "Mango", "WateMelon"];
console.log(arrayFruit4);
console.log(`insert an  element at last position`);
arrayFruit4.push("Pimeapple")
//let AddedElement3  =   arrayFruit4.splice(arrayFruit4.length+2,"Pimeapple");
console.log(arrayFruit4);

console.log(`---------------------------------------------------`);
var arrayFruit5 = ["Banna", "Orange", "Apple", "Mango", "WateMelon"];
console.log(arrayFruit5);
console.log(`insert an  element at Drogonfruit  before  WaterMelon`);
let AddedElement5 = arrayFruit5.splice(4, 0, "DragonFruit");
//let AddedElement3  =   arrayFruit4.splice(arrayFruit4.length+2,"Pimeapple");
console.log(arrayFruit5);
//console.log(AddedElement5);
console.log(`---------------------------------------------------`);
var arrayFruit6 = ["Banna", "Orange", "Apple", "Mango", "WateMelon"];
console.log(arrayFruit6);
console.log(`insert an  element at Drogonfruit  before  WaterMelon`);
let AddedElement6 = arrayFruit6.splice(1, 1, "Kiwi");
//let AddedElement3  =   arrayFruit4.splice(arrayFruit4.length+2,"Pimeapple");
console.log(arrayFruit6);
//console.log(AddedElement5);

console.log(`-------------------FOR loop Array-----------------------------------`);
var arrayFruit7 = ["Banna", "Orange", "Apple", "Mango", "WateMelon"];
for (let index = 0; index < arrayFruit7.length; index++) {
    const element = arrayFruit7[index];
    console.log(element);
}

console.log(`-------------------FOR loop Array-----------------------------------`);
var arrayFruit8 = ["Banna", "Orange", "Apple", "Mango", "WateMelon"];
for (let index = arrayFruit8.length - 1; index >1; index--) {
    const element = arrayFruit8[index];
    console.log(element);
}