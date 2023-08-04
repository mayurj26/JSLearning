var num = 10;
var num2 = num++;

console.log(`value of num: ${num}`);
console.log(`value of num2: ${num2}`);
console.log(`------------------------------`);

var num3 = 10;
var num4 = ++num3;

console.log(`value of num3: ${num3}`);
console.log(`value of num4: ${num4}`);
console.log(`------------------------------`);

var num6 = 10;
var num7 = num6--;          //PREFIX ORPSTPod

console.log(`value of num6: ${num6}`);
console.log(`value of num7: ${num7}`);
console.log(`------------------------------`);


for (let index = 0; index <=10; index++) {
  //  const element = array[index];
  console.log(index);
    
}
console.log(`------------------------------`);
for (let index = 5; index <=20; index++) {
    //  const element = array[index];
    console.log(index);
      
  }
  console.log(`------------------------------`);              //10->1
for (let index = 10; index >=1; index--) {
       console.log(index);
      
  }
  console.log(`--------------5 Table----------------`);
for (let index = 5; index <=50; index=index+5) {
    //  const element = array[index];
    console.log(index);
      
  }

  console.log(`--------------7 Table Reverse----------------`);
for (let index = 70; index >=7; index=index-7) {
    //  const element = array[index];
    console.log(index);
      
  }

  console.log(`--------------1st 5 ODD NO----------------`);
for (let index = 1; index<10; index=index+2) {
    //  const element = array[index];
    console.log(index);
      
  }
  
  console.log(`--------------1st 15 EVEN NO----------------`);
 var result = " ";
  for (let index = 0; index <30; index=index+2) 
  {
      result = result.concat(index).concat(" ");
     // console.log(index);
        
    }
    console.log(result);
    //----------------------while loop
    console.log(`--------------While loop----------------`);
    var i = 1;
    var result = "";
    while (i<=10)
      {
        result = result.concat(i).concat(" ");
        i++;
      }
      console.log(result);