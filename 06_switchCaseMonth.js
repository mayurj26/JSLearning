console.log("----------------------------------------------------------------");                                    

var monthOfYear= function (month) 
{
    switch (month) {
case 1:
    console.log(`${month} - JAN`);
    break;
    case 2:
     console.log(`${month} - FEB`);
     break;
     case 3:
    console.log(`${month} - MAR`);
    break;
    case 4:
    console.log(`${month} - APRIL`);
    break;
    case 5:
    console.log(`${month} - MAY`);
    break;
    case 6:
    console.log(`${month} - JUNE`);
    break;
    case 7:
    console.log(`${month} - JULY`);
    break;
    case 8:
    console.log(`${month} - AUG`);
    break;
    case 9:
    console.log(`${month} - SEP`);
    break;
    case 10:
    console.log(`${month} - OCT`);
    break;
    case 11:
    console.log(`${month} - NOV`);
    break;
    case 12:
    console.log(`${month} - DEC`);
    break;
    
    default:
        console.log(`${month} - IN VALID INPUT`);
        console.log(`${month} - PLS PROVIDE VALID INPUT`);
        
        break;

    }
    console.log(`END OF SWITCH CASE`);
}
monthOfYear(0);
monthOfYear(2);
monthOfYear(5);
monthOfYear(12);
monthOfYear(15);
monthOfYear(100);
monthOfYear(null);
monthOfYear(undefined);

