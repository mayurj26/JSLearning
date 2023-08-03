var leapYear = (year) => {
    if (typeof year !== 'number' || isNaN(year)) {
      console.log(`Invalid input: "${year}" is not a valid year (a number).`);
      return false;
    }
  
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
      console.log(`${year} is a leap year.`);
      return true;
    } else {
      console.log(`${year} is not a leap year.`);
      return false;
    }
  };
  leapYear(2020);
  leapYear(1999);
  leapYear(1600);
  leapYear(2022);
  leapYear(1945);
  leapYear(null);
  leapYear(undefined);
  leapYear(NaN);
  leapYear("Twenty Twenty");
  leapYear(1750);