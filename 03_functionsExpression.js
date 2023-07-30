
var num = 100;

var display = function (){

    console.log(`I am Angular Developer`);

}
display();
console.log(display);
console.log(typeof display);

var add = function(num1,num2){
    console.log(`Addition is :${num1+num2}`);
}
add(20, 40);

var wordCount = function(word){

    var words = word.split(" ");
    var wordCount = words.length;
    console.log(`In Given String - ${word}`);
    return wordCount;
}
var result = wordCount("I am a UI Developer");
console.log(`Totlal Word Count : ${result}`);
console.log('--------------STEP 1,2--------------');
//ASSIGNMENT 
var square = function(num){

    var result = num*num;
    console.log(`Square of no ${num}: ${result}`,`Type Of Function :`,typeof square);
   // console.log(typeof square);                                                       //SQUARE
}
square(5);
square(6);
square(25);
square(100);
square(67);
square(89);
square(59);

console.log('--------------STEP 3--------------');
var area = function(length, breath){

    var result1 = length*breath;
    console.log(`AREA OF RECTANGLE : ${result1}`);
   // console.log(typeof square);
}
area(499,917);

console.log('--------------STEP 4--------------');

var strA = function(str){
    var strlength = strA.length;
    
    return strlength;
}
strA("JS is the most popular language of internet");
console.log(`${strA} = length of String is : ${strlength}`); 

console.log('--------------STEP 4A--------------');

const countTotalCharacters = function (str) {
    return str.length;
  };
  
  const inputString = "js is the most popular language of the internet";
  const totalCharacters = countTotalCharacters(inputString);
  console.log("Total Characters:", totalCharacters);