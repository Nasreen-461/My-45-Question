/*24. More Conditional Tests: You don’t have to limit the number of tests 
you create to 10. If you want to try more comparisons, write more tests.
 Have at least one True and one False result for each of the following:

• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than,
 greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array
*/
// numberics
let mynumber = 10;

console.log(mynumber == 10);         // true
console.log(mynumber !== 10);        // false
console.log(mynumber > 5);           //true greater than
console.log(mynumber < 5);           // false less than
console.log(mynumber <= 5);          // false less than equel to
console.log(mynumber >= 5);          // true greater than equel to


// and &&  ====== or ||(pipe)
let num1 = 10;
let num2 = 5;
console.log(num1 >9 && num2 <5);   //false
console.log(num1 <9 || num2 <5);  // true



let myArray = [2,3, "Ali"];
let mystring  = "Yasir";
console.log(Array.isArray(myArray));   //true
console.log(Array.isArray(mystring));  //false
 