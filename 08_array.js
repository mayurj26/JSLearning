

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
console.log(`-------------------Added   a   Array----------------------------------`);
var array1 = [10, 20, 30, 50, 10, 80, 20];
array1.push(70,44);            //added at  end
array1.unshift(60,23);                 ///addes    at  starting
console.log(array1);
console.log(`-------------------Removed   a   Array-(Removes  only  1   ELEMENT)---------------------------------`);
array1.pop();
array1.shift();
console.log(array1);
console.log(`-------------------GETTING THE SLICE INDEX----------------------------------`);
//console.log(array1.slice(2));
var array2 = [0,1,2,3,4,5,6,7,8,9];
console.log(array2.slice(3, 5));

console.log(`--------Performing insert  or  removed operation   in middle   of the array-----------`);
var array3 = [10,11,21,31,41,51,61,71,81,91];
let removedElement  =   array3.splice(4);
console.log(array3);
console.log(removedElement);

var array4 = [10,11,21,31,41,51,61,71,81,91];
let removedElement1  =   array4.splice(3,2);
console.log(array4);
console.log(removedElement1);
array4.splice(array4.length-2,2)        //last  2   Element removed...
console.log(array4);

console.log(`Inserting  the arrayelement    using   splice`);
var array5 = [10,11,21,31,41,51,61,71,81,91];
array5.splice(3,0,100,200);
console.log(array5);
console.log(`replace(0) means no replacement`);
console.log(`replace(2) means replacement 2 index`);
var array5 = [10,11,21,31,41,51,61,71,81,91];
array5.splice(3,2,100,200,300,400);
console.log(array5);


