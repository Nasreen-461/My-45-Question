/*
42. Great Magicians: Start with a copy of your program from Exercise 39.
Write a function called make_great() that modifies the array of magicians by adding
the phrase the Great to each magician’s name. Call show_magicians() to
see that the list has actually been modified.
*/

let magiciansNames = ["Talha","Zafar","Mehmat","Touheed"];

function show_magicians(great: string){
for(let item of magiciansNames){
      console.log(great, item);
    } 
}


   show_magicians(`Hello, How are you Mr.`);             // calling of function

   show_magicians(`Hello`);                              //2nd calling of function