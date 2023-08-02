
var num = 10;
if (num>5){
    console.log(num);;

}
console.log("After if Block");
console.log("=========================================");

var num = 2;
if (num>5){
    console.log(num);;
}
console.log("After if Block");
console.log("=========================================");

var num = 23;
if (num%2==0){

    console.log(`${num} :is EVEN`);
}else{
    console.log(`${num} : is ODD`);
}
console.log("=========================================");

function voteEligibility(age, name){
var ageValue = +age;
if (age<=0 || isNaN(ageValue) || age>110) {             //isnan for invalid input(nan )
    console.log(`${name} Your age ${age} is InValid`);
      //  return                //return to avoid futher condition exit 1st
} else {
    if (age>=18) {
        console.log(`${name} is Eligibel for voting`);
        
    } else{
        console.log(`${name} is NotEligibel for voting`);
    }
}
}
voteEligibility(10,"jenny")
console.log("=========================================");
voteEligibility(-20,"mahi")
console.log("=========================================");
voteEligibility("UK","rohit")
console.log("=========================================");
voteEligibility("30","rohit")
console.log("=========================================");
voteEligibility(151,"rohit")

