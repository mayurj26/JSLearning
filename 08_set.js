

let array = [1, 2, 3, 4, 5, 7, 5, 4, 3];
let mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(4);
mySet.add(5);
console.log(mySet);
mySet.add(2);
mySet.add(6);
mySet.add(7);
console.log(mySet);

let isAvailable = mySet.has(6)
console.log(isAvailable);
//particular element    available   with in  the set   
let isAvailable1 = mySet.has(10)
console.log(isAvailable1);

console.log(`Set    size    :`);
mySet.delete(4);
console.log(mySet);
console.log("----------------------TRAVERSE ARRAY-----------------------------");
for (const element of mySet) {
    console.log(element);
} console.log(mySet);
console.log("----------------------Remove   duplicate   element using   for of-----------------------------");
let array1 = [5, 5, 8, 6, 8];
let setofnumber = new Set();
for (const value of array1) {
    setofnumber.add(value);
}
console.log(array1);
console.log(setofnumber);
console.log("----------------------Remove   duplicate   element-----------------------------");
//Remove    duplicate   array  from  same  array
console.log(`Remove    duplicate   array  from  same  array`);
let array2 =    [4, 4, 4, 5, 5, 8, 5, 7, 8, 9, 7, 8];
array2 =    [...new Set(array2)];
console.log(array2);
//console.log(newSet);