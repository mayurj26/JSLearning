 


 function swap(n1,n2)       //n1 n2 are the arguments or parameter
 {

console.log("-------------------------------------------------------");   
console.log("               Inside Swap Function");
console.log("-------------------------------------------------------");
console.log('Before Swap |','Num1 = ', n1,'Num2 = ', n2);

var temp=n1;
n1 = n2;
n2 = temp;
console.log('Before Swap |','Num1 = ', n1,'Num2 = ', n2);
 }

var num1 = 100;
var num2 = 200;

 swap(num1,num2);            //Function call or invocation
 console.log("-------------------------------------------------------");
 console.log("-------------------END OF PROGRAM ---------------------");


var sweety = "SWEETY";
var cutie = "CUTIE";
swap(sweety,cutie)
