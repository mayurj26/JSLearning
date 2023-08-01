
console.log("-------------------ASSIGNMENT 2-------------");
console.log("-------------------PART 1-------------");

    var greaterNumber = function (num1, num2) {
        var result = num1 > num2 ? num1 : num2;
   
       return result;
        
    }
    var res = greaterNumber(10,-10);
   console.log(`The greater number between 10 and -10 is :`, res);
   var res1 = greaterNumber(800,899);
   console.log(`The greater number between 800 and 899 is :`,res1);

   console.log("-------------------PART 2----------------------");
   
   var oddeven = function (number) {
      
   var result1 = number%2==0 ? "TRUE": "FALSE"
   
   return result1;
}
 var firstno = oddeven(29);
 console.log(`Number 29 Even :`,firstno);
var secondno = oddeven(44); 
console.log(`Number 44 Even :`,secondno);

var thirdno = oddeven(0);
console.log(`Number 0 Even :`,thirdno);

var fourthno = oddeven(101);
console.log(`Number 101 Even :`,fourthno);


   console.log("-------------------PART 3-------------");

 /*  fuction squareofwordLength(){


}
var result = squareofwordLength("JavaScript");
squareofwordLength("JavaScript");

*/

var a = function (abc){
var lengthGreet = abc.length;

    return lengthGreet;
    
}
var javascript = a('JAVASCRIPTversion6');
console.log('Length of String is',javascript);   
var resno = javascript%2==0 ? "EVEN": "ODD"
console.log('Type of String is',resno);

var javascript1 = a('developer');
console.log('Length of String is',javascript1);   
var resno1 = javascript1%2==0 ? "EVEN": "ODD"
console.log('Type of String is',resno1);

var javascript2 = a('google');
console.log('Length of String is',javascript2);   
var resno1 = javascript2%2==0 ? "EVEN": "ODD"
console.log('Type of String is',resno1);

console.log("----------------------------------------------");
var interviewEligibilty = function(gradScore, hscScore, sssScore, candidateName){

   var result =  gradScore>=70 || hscScore>=80 || sssScore >=90 ?` Congrates ${candidateName} you are Elegible for TCS` : `not Eligibile`
   console.log(result);
}
interviewEligibilty(80, 86, 90, `mahi`);
interviewEligibilty(70, 65, 55, `Gill`);
interviewEligibilty(60, 79, 88, `steve`);