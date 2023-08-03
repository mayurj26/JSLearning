
        //normal way

var dayofweek = function (day) {
    if (day==1) {
        console.log(`${day} - Mon`);
    }
    if (day==2) {
        console.log(`${day} - Tue`);
    }

if (day==3) {
    console.log(`${day} - Wed`);
}

if (day==4) {
    console.log(`${day} - Thu`);
}

if (day==5) {
    console.log(`${day} - Fri`);
}

if (day==6) {
    console.log(`${day} - Sat`);
}
if (day==7) {
    console.log(`${day} - Sun`);
}
}
dayofweek(2);
/*dayofweek(7);
dayofweek(4);
dayofweek(9);
dayofweek(100);
dayofweek(null);*/
                                        //SWITCH CASE
console.log("----------------------------------------------------------------");                                    

dayofweeks = function (day) {
    switch (day) {
case 1:
    console.log(`${day} - MONDAY`);
    break;
    case 2:
        console.log(`${day} - TUESDAY`);
        break;
        case 3:
    console.log(`${day} - WEDNESDAY`);
    break;
    case 4:
    console.log(`${day} - THURSDAY`);
    break;
    case 5:
    console.log(`${day} - FFRIDAY`);
    break;
    case 6:
    console.log(`${day} - SATURDAY`);
    break;
    case 7:
    console.log(`${day} - SUNDAY`);
    break;
    
    default:
        console.log(`${day} - IN VALID INPUT`);
        console.log(`${day} - PLS PROVIDE VAKID INPUT`);
        
        break;

    }
    console.log(`END OF SWITCH CASE`);
}
dayofweeks(100);
/*dayofweeks(2);
dayofweeks(7);
dayofweeks(4);
dayofweeks(9);

dayofweeks(null);
dayofweeks(undefined);
dayofweeks("GK")*/