
function vowelsCount(str) {
    let Count = 0;
    for (let index = 0; index < str.length; index++) {
        let char = str.charAt(index);
        if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u' ||
            char == 'A' || char == 'E' || char == 'I' || char == 'O' || char == 'U') {
            console.log(char);
            Count = Count + 1;

        }
    } console.log(`totalno    ofvowels :   ${Count}`);
}
vowelsCount("I am  very  Good IT  Developer")

console.log("-------------------Assign-2----------------------------");
//SUM   OF  FIRST   1to5cube  NO....


let sum1 = function () {
    let cubesum = 0;
    for (let index = 1; index <= 5; index++) {
        cubesum = cubesum + index * index * index;

    }
    console.log(`SUM  OF FIRST 1 to  5  cube  NO.  NO: ${cubesum}`);
}
sum1();


console.log("-------------------Assign-3----------------------------");
//SUM   OF  FIRST   20  NO....


let sum = function () {
    let totalsum = 0;
    for (let index = 1; index <= 20; index++) {
        totalsum = totalsum + index;

    }
    console.log(`SUM    OF  FIRST   20  NO: ${totalsum}`);
}
sum();


console.log("-------------------Assign-4----------------------------");
function oddPositionChars(str) {
    // let count1 = 0;
    for (let index = 1; index < str.length; index++) {
        const char = str.charAt(index);
        if (index % 2 != 0 && char != ` `) {
            console.log(char);
        }
        //console.log(char);
        //count1 = count1 + 1;
        //log   only    odd positioned  chars   console  and do   not    consider   empty  spaces.
    }

}
oddPositionChars("HARD WORK ALWAYS PAYS BACK");


console.log("-------------------Assign-4-(2)---------------------------");
function oddPositionCharss(str) {
    // let count1 = 0;
    for (let index = 1; index < str.length; index++) {
        const char = str.charAt(index);
        if (index % 2 != 0 && char != ` `) {
            console.log(char);
        }
        //console.log(char);
        //count1 = count1 + 1;
        //log   only    odd positioned  chars   console  and do   not    consider   empty  spaces.
    }

}
oddPositionCharss("SOON I WILL BE ANGULAR IT CHAMP");

console.log("-------------------Assign-5---------------------------");
function reversestrings(str) {
     let reverse = "";
    for (let index = str.length-1; index >=0; index--) {
        const char = str.charAt(index);
        

        if (char != ` `) {
            reverse = reverse.concat(char);
        }
        //console.log(char);
        
        //log   only    odd positioned  chars   console  and do   not    consider   empty  spaces.
    }
console.log(reverse);
}
reversestrings("SOON I WILL BE ANGULAR IT CHAMP");