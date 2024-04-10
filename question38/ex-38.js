"use strict";
/*
38. Cities: Write a function called describe_city() that accepts the name of
a city and its country. The function should print a simple sentence, such as
Karachi is in Pakistan. Give the parameter for the country a default value.
Call your function for three different cities, at least one of which is not in the
default country.
*/
function describe_city(nameofcity, country = "Pakistan") {
    return `${nameofcity} is in ${country}`;
}
// 3 cities names
let cityname1 = describe_city("Karachi");
let cityname2 = describe_city("Lahore");
let cityname3 = describe_city("Islamabad");
let cityname4 = describe_city("Dubai", " UAE");
console.log(cityname1);
console.log(cityname2);
console.log(cityname3);
console.log(cityname4);
