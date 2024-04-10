/*
43. Unchanged Magicians: Start with your work from Exercise 40. Call the
function make_great() with a copy of the array of magicians’ names. Because the
original array will be unchanged, return the new array and store it in a separate array.
Call show_magicians() with each array to show that you have one array of the original
names and one array with the Great added to each magician’s name.
*/

let magiciansName2 = ["Talha","Zafar","Mehmat","Touheed"];

// making a copy of an array
let magiciansNamecopy = [...magiciansName2];

function show_magicians(greet: string){
    let withGreetings = ""

    for(let item of magiciansNamecopy){
      withGreetings += `${greet} ${item}\n`;    
    }
    return withGreetings
};
let mygreetings = show_magicians("Hello");
let makeArray = mygreetings.split(`\n`);
console.log(makeArray);
// orignal array
console.log(magiciansName2);