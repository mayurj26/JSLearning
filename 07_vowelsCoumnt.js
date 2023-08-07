

function vowelsCount(str) {
    let Count = 0;
    for (let index = 0; index < str.length; index++) {
        let char = str.charAt(index);
        if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u' ||
            char == 'A' || char == 'E' || char == 'I' || char == 'O' || char == 'U') {
            console.log(char);
            Count = Count+1;
            
        }
    }console.log(`totalno    ofvowels :   ${Count}`);
}
vowelsCount("I am  very  Good  UT  Developer")
