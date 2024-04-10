/*
37. Large Shirts: Modify the make_shirt() function so that shirts are large
by default with a message that reads I love TypeScript. Make a large shirt and a
medium shirt with the default message, and a shirt of any size with a different
message.
*/

/*
function make_shirt(saiz: string, lable: string){
    return saiz + lable   
}

let myfunction = make_shirt("large" ," I love TypeScript");
console.log(myfunction);
*/


/*making large as default
function make_shirt(lable: string, saiz: string = "large"){
    return saiz + lable   
}

let myfunction = make_shirt(" I love TypeScript");
console.log(myfunction);
*/


//making shirt of any saiz 

function make_shirt(lable: string, saiz: string){
    return saiz + lable   
}

let myfunction = make_shirt(" Any saiz", "I love TypeScript");
console.log(myfunction);
