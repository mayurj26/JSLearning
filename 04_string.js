var greet = 'Good morning Virat Dude';
console.log("-------------------------------------------------------");
var lengthGreet = greet.length;
console.log(greet,'Length of String is',lengthGreet);          //string lenght
console.log("-------------------------------------------------------");
var charAt0 = greet.charAt(0);
console.log( `${greet} - Char at 0th index ${charAt0}`);
                                                                                    //index no
var charAtLastIndex = greet.charAt(lengthGreet-1);
console.log(`Last char is ${charAtLastIndex} of Index is ${lengthGreet}`);
console.log("-------------------------------------------------------");

var firstName = "Gajanan";
var lastName = "Kharat";
var result = firstName + lastName;
console.log(`Concated String is ${result}`);
var result = firstName.concat(lastName);                //concate string
console.log(`My Full Name is ${result}`);
console.log("-------------------------------------------------------");
[]
var result = greet.indexOf(`m`);                    //case sensitive so -1 return m value
console.log(`Indexof char 'm' ${result}` );

var result = greet.indexOf('Dude');
console.log(`Index of sub string 'Dude' is : ${result}`);                   //index no
console.log("-------------------------------------------------------");

var result = greet.includes('Virat');                       //find the String
console.log(`Result is : ${result}`);
console.log("-------------------------------------------------------");

var result = greet.split(' ');
var words = result.length;                                  //NO OF WORS IN STRING
console.log(`Total no of words are : ${words}`);

console.log("-------------------------------------------------------");

var greet="     Good Morning    ";
var result = greet.trim();              //string Trim and length....
var len = result.length; 
console.log(`Before string lenght ${greet.length} After trim string is ${result} and it's lenght is ${result.length}`);
console.log("-------------------------------------------------------");

var resultTrimEnd = greet.trimEnd();
var trimEndLength= resultTrimEnd.length;
var endSpaces = greet.length - trimEndLength;
console.log(`End spaces is : ${endSpaces}`);
console.log("-------------------------------------------------------");         //trim string

var resultTrimStart = greet.trimStart();
var trimStartLength= resultTrimStart.length;
var StartSpaces = greet.length - trimStartLength;
console.log(`Start spaces is : ${StartSpaces}`);
console.log("-------------------------------------------------------");

var greet = "Good Morning";
var result = greet.replace(' ','&');
console.log(`After replace ' ' with '&' string is : ${result}`);            //replace
console.log("-------------------------------------------------------");

var result = greet.slice(3, 9);
console.log(`Slice from index is : ${result}`);
console.log("-------------------------------------------------------");

 var result = greet.endsWith('Dude');
console.log(`result :${result}`);
console.log("-------------------------------------------------------");
console.log("-------------------------------------------------------");


function stringHandsOn() {
var str = "    Hey you are doing good,   keep it up     ";
console.log("----------------------Step1----------------------");

console.log(`Given String is : ${str}`);
}

