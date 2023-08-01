//nan not a number
var num1 = 0;
var num2 = 0;
var result = num1/num2;
console.log(result);

var num3 = "100";
console.log(`Type of num3 is : ${typeof num3}`);
var result = +num3;                                                     //string to number
console.log(`Type of num3 is : ${typeof result}`);
console.log('----------------------------------');
var num4 = "GK";

var result1 = +num4; 
console.log(`Type of num4 is : ${result1}`);
console.log(`Type of num4 is : ${typeof result1}`);

                                                                                    
 console.log('----------------------------------');   
   //Implicit and explicit conversion two type
   var result = '5' + '6';
   console.log(result);
   console.log('----------------------------------');
   var resultnew = '5' + 6;
   console.log(resultnew);
   console.log('----------------------------------');
   var result2 = 80 + true;
   console.log(result2);
   console.log('--------------Explicit conversion--------------------');
   var num6 = '100';

    var result12 = +num6; 
    console.log(`result is : ${result12} Type of num3 is : ${typeof result12}`);

    var num5 = '100';
    console.log('--------------second way of conversion --------------------');
    var result11 = Number(num5); 
    console.log(`result is : ${result11} Type of num3 is : ${typeof result11}`);

    var result13 = Number("virat"); 
    console.log(`result is : ${result13} Type of num3 is : ${typeof result13}`);

    var num5 = '100';
    console.log('-------------- --------------------');
    var result11 = Number(num5); 
    console.log(`result is : ${result11} Type of num3 is : ${typeof result11}`);

    var num5 = '100';
    
    var result11 = String(num5); 
    console.log(`result is : ${result11} Type of num3 is : ${typeof result11}`);

    console.log('-------------- --------------------');
        var num5 = 10;
        var result11 = Boolean(num5); 
    console.log(`result is : ${result11} Type of num3 is : ${typeof result11}`);


    var num5 = "10";
        var result11 = Boolean(num5); 
    console.log(`result is : ${result11} Type of num3 is : ${typeof result11}`);
//boolean to string
var isMarried = true;
var result = String(isMarried);
console.log(`result is : ${result} Type of num3 is : ${typeof result}`);
