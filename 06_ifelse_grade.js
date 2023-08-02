function voteEligibility(age){
    var ageValue = +age;
    if (age<=0 || isNaN(ageValue) || age>110) {             //isnan for invalid input(nan )
        console.log(`Your age ${age} is InValid`);
          //  return                //return to avoid futher condition exit 1st
    } else {
        if (age>=18) {
            console.log(` Age ${age} is Eligibel for voting`);
            
        } else{
            console.log(`Age ${age} is NotEligibel for voting`);
        }
    }
    }
    console.log('---------------ASSIGNMENT----------------------');
    voteEligibility(45);
    console.log('-------------------------------------');
    voteEligibility(17);
    console.log('-------------------------------------');
    voteEligibility(8);
    console.log('-------------------------------------');
    voteEligibility(20);
    console.log('-------------------------------------');
    voteEligibility(-10);
    console.log('-------------------------------------');
    voteEligibility(200);
    console.log('-------------------------------------');
    voteEligibility(0);
    console.log('-------------------------------------');
    voteEligibility(undefined);
    console.log('-------------------------------------');
    voteEligibility(null);