"use strict";
/*3. Name Cases: Store a person’s name in a variable,
and then print that person’s name in lowercase, uppercase,
 and titlecase.*/
let perName = "Ali Hassan";
//Lowercase.
console.log(perName.toLowerCase());
//uppercase.
console.log(perName.toUpperCase());
//titlecase.
let firstLetter = perName.charAt(0);
let restLetters = perName.slice(1);
let titlecase = firstLetter + restLetters;
console.log(titlecase);
