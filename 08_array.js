

let array = [10, 20, 30, 50, 10, 80, 20];
console.log(array);
console.log(`Typr of array is:${typeof array}`);
console.log(`Total  no  of  elements  in  ARRAY  is:${array.length}`);
let element = array[2];
console.log(`Element in Array 2 is: ${element}`);
console.log(`------------------------------------------------------`);
let element1 = array[0];
console.log(`Element in Array 2 is: ${element1}`);
let arraylength = array.length;
console.log(`------------------------------------------------------`);
let elementLast = array[arraylength - 1];
console.log(`Last   element is  :   ${elementLast}`);
console.log(`------------------------------------------------------`);
let arraylength1 = array.length;
//console.log(`------------------------------------------------------`);
let elementLast1 = array[arraylength1 - 2];
console.log(`Last   element is  :   ${elementLast1}`);
console.log(`------------------------------------------------------`);
array[1] = 100;
console.log(array);
console.log(`------------------------------------------------------`);
let isAvailable = array.includes(80);
console.log(`Is 80  Availablre  :   ${isAvailable}`);
console.log(`-----------------------Index   of-------------------------------`);
let indexofElement = array.indexOf(50);
console.log(`Index  of  50  is  :   ${indexofElement}`);
console.log(`-------------------FOR loop    Array-----------------------------------`);
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
}
console.log(`-------------------FOR loop Array  Reverse----------------------------------`);
for (let index = array.length - 1; index >= 0; index--) {
    const element = array[index];
    console.log(element);
}

console.log(`-------------------FOR Reserve index----------------------------------`);
for (let index = 0; index < array.length; index++) {
    if (index % 2 == 0) {
        const element = array[index];
        console.log();
    }
    const element = array[index];
    console.log(element);
}
