/*13. Your Own Array: Think of your favorite mode of transportation, such as
 a motorcycle or a car, and make a list that stores several examples. Use your
 list to print a series of statements about these items, such as “I would like
 to own a Honda motorcycle.”
 */

let myTrans: string [] = ["Car","Baik","Bus","Train"];
//1st  method (loop) for

//for(let i = 0 ; i <= 3 ; i ++){
 //   console.log(`I would like to own a ${myTrans[i]}`);
//}  
//2nd method (loop) map
myTrans.map((ib)=>{
    console.log(`I would like to own a ${ib}`);
}

)

 