/*3. Name Cases: Store a person’s name in a variable,
and then print that person’s name in lowercase, uppercase,
 and titlecase.*/

 let perName: string = "Ali Hassan";
 //Lowercase.
 console.log(perName.toLowerCase());

 //uppercase.
 console.log(perName.toUpperCase());

 //titlecase.
 let firstLetter: string = perName.charAt(0);
 let restLetters: string = perName.slice(1);
 let titlecase = firstLetter + restLetters;
 console.log(titlecase);
