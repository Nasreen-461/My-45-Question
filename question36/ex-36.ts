/*36. T-Shirt: Write a function called make_shirt() that accepts a size and the
text of a message that should be printed on the shirt. The function should print
a sentence summarizing the size of the shirt and the message printed on it.
Call the function.

*/

/*function make_shirt(saiz: number, lable: string){
    //return saiz and lable
    return `My shirt saiz is ${saiz} and leble is ${lable}`;
}

let myfunc = make_shirt(36, " The sunny day");
// how to print console
console.log(myfunc);
*/

let myfunc = (saiz: number, lable: string) => {
return saiz + lable;

};

console.log(`36, " The sunny day`);
