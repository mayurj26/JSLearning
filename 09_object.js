let personGK = {
    empId: 2233,
    state: "MH",
    designation: "Tech  Lead",
    city: "Pune",
    isMarried: true,
    show: function () {
        console.log('Inside Shared function');  //function  inside  Array
    }

}
console.table(personGK);
console.log(typeof personGK);
console.log("----------------DOT N  SQUARE   NOTATION-----------------------------------");

console.log(`EMP ID:    ${personGK.empId}`);        //dot   notation
console.log(`CITY:    ${personGK["city"]}`);  //SQUARE  BRACKET

let isMarried = personGK.isMarried;
console.log(isMarried);
console.log("----------------updated-----------------------------------");

personGK.city = "Mumbai";           //variable  update
//console.log(city);
console.log(personGK);
//console.log(city);
console.log("----------------Deleted-----------------------------------");

delete personGK.designation;
console.log(personGK);
personGK.adharcard = 21343456475;
personGK.show();

console.log("---------------Empty   object--//adding    value,keys---------------------------------");


let array = [];
let bank = {
    bankname: "SBI    Bank",
    accountno: 2423424,
    IFSC: "SBI2414",
   address: {           //Nested    Object
    street: "wakad",
    pin: 411014,
    landmark: "Near  Petrol  Pump",
    telphone: 875746454,
    city: "Pune",
    state: "Mh",
    country: "India"
   } 

}
  /*  bank.bankname = "SBI    Bank",
    bank.location = "Aundh  Pune"
    console.log(bank);*/
/*
let address = {
    street: "wakad",
    pin: 411014,
    landmark: "Near  Petrol  Pump",
    telphone: 875746454,
    city: "Pune",
    state: "Mh",
    country: "India"
}*/

let details     =   bank.address.city;
delete bank.address.telphone;
console.log(bank);
//console.log(bank.address);


//update
bank.address.country    =   "maharashtra";
console.log(bank.address);
