console.log(`--------------While loop----------------`);
console.log(`--------------ASSIGN 1 5 TO 15 INCREMENT----------------`);
var i = 1;
var result = "";
while (i<=15)
  {
    result = result.concat(i).concat(" ");
    i++;
  }
  console.log(result);
  console.log(`--------------ASSIGN 2 50 TO 40 DECREMENT----------------`);
var i = 50;
var result = "";
while (i>=40)
  {
    result = result.concat(i).concat(" ");
    i--;
  }
  console.log(result);

  console.log(`--------------ASSIGN 3  :1 TO 15 ODD NO----------------`);
var i = 1;
var result = "";
while (i<16)
  {
    result = result.concat(i).concat(" ");
    i = i+2;
  }
  console.log(result);

  console.log(`--------------ASSIGN 4  :1 TO 10 EVEN NO----------------`);
  var i = 0;
  var result = "";
  while (i<11)
    {
      result = result.concat(i).concat(" ");
      i = i+2;
    }
    console.log(result);
    console.log(`--------------ASSIGN 5  :5 TABLE NO----------------`);
    var i = 5;
    var result = "";
    while (i<=50)
      {
        result = result.concat(i).concat(" ");
        i = i+5;
      }
      console.log(result);
      console.log(`--------------ASSIGN 6  :10 TABLE NO----------------`);
      var i = 10;
      var result = "";
      while (i<=100)
        {
          result = result.concat(i).concat(" ");
          i = i+10;
        }
        console.log(result);
        console.log(`--------------ASSIGN 7  :10 TABLE NO REV----------------`);
      var i = 100;
      var result = "";
      while (i>=10)
        {
          result = result.concat(i).concat(" ");
          i = i-10;
        }
        console.log(result);