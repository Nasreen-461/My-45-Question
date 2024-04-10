"use strict";
/*
44. Sandwiches: Write a function that accepts a array of items a person wants
on a sandwich. The function should have one parameter that collects as many
items as the function call provides, and it should print a summary of the sandwich
that is being ordered. Call the function three times, using a different number
of arguments each time.
*/
//array is a parameter
function mySandwiches(...items) {
    return `I want Sandwich of ${items}`;
}
let collaection1 = mySandwiches("Hum", " Cheese", " Lettuce");
//can add as many you wish
let collaection2 = mySandwiches("Turkey", "Swiss");
let collaection3 = mySandwiches(); //without arrgument
console.log(collaection1);
console.log(collaection2);
console.log(collaection3);
