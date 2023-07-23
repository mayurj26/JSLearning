function show(){
    console.log('My name is Mayur');
    console.log('Iam a Tecnical Lead');
    console.log('My Tech skill is -Java + AngulaR + React  +  DevOps');
}show();        //function Invocation

function checkType(value){      //function with argumaent with no return value

    console.log('Value is:', value);
    console.log('Type is  :',typeof value);
    console.log('------------------------');

}

checkType(100);
checkType("GK");
checkType(true);
checkType(undefined);
checkType(null);
checkType();


function addition(arg1,arg2,arg3){
    console.log('------------------------------');
    console.log('       Return Function');
    console.log('------------------------------');
   
console.log('Value are  :  ', arg1, arg2, arg3);
var result = arg1+ arg2+ arg3;  //return arg1+ arg2+ arg3; 
return result;

}
var res = addition(10, 23, 456);
console.log('Result is  :  ', res);
console.log('------------------------------');
addition(-56, 239, 677);
console.log('Result is  :', addition(-56, 239, 677));
//addition('GK', 66, 'pune');'
console.log('Result is  :',addition('GK', 66, 'pune'));

//addition(10, 23, 456);
function display(){

    return "Learning js";
}
var resultDisplay = display();
console.log(resultDisplay);


console.log('--------------STEP 1--------------');
function display1(){
    return "Hello";
  }
var resultDisplay1 = display1();
console.log(resultDisplay1);


function display2(){
    return "Welcome";
}
var resultDisplay2 = display2();
console.log(resultDisplay2);

console.log('--------------STEP 2--------------');

function personalDetails(firstName, lastName, collegeName){

    console.log('FirstName    :'+ firstName);
    console.log('LastName     :'+ lastName);
    console.log('College Name :'+ collegeName);
   

}
personalDetails('MAYUR','JAGTAP','SINHGAD ACADEMY OF ENGINEERING');
//console.log('FirstName :  :',personalDetails);

console.log('--------------STEP 3--------------');

function swapvalues(arg1,arg2){
console.log('Before Swapping | Arg1 : '+arg1,'  | Arg2 : '+arg2,'  |');
var temp = arg1;
arg1 = arg2;
arg2 = temp;
console.log('After Swapping  | Arg1 : '+arg1,'  | Arg2 : '+arg2,'  |');
return [arg1,arg2];
}
swapvalues(1000,2000);
swapvalues('VIRAT','ANUSHKA');

console.log('--------------STEP 4--------------');

function addThreeValue(arg1,arg2,arg3){
   //console.log('Value are  :  ', arg1, arg2, arg3);
var result = arg1+ arg2+ arg3;  //return arg1+ arg2+ arg3; 
return result;

}
var res = addThreeValue(10.23, 600, 40);
console.log('Addition of    :',10.23, 600, 40 );
console.log('Result is      :  ', res);
console.log('------------------------------');
var word = addThreeValue('hello','Good','Morning');
console.log('Result is  :', word);

console.log('--------------step 5----------------');

function bank(bankName,accNo,location,pinCode){

    console.log('BanktName :'+ bankName,'AccNo :'+ accNo, 'BankLocation :'+ location, 'BankPincode :'+ pinCode);
   
}
bank('CITI BANK',34567834512,'PUNE',431202);
bank('AXIS BANK',78561247823,'MUMBAI',441202);
bank('HDFC BANK',89654561785,'PUNE',631212,222222);
