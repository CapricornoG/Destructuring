/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

// Destructuring arrays

let ages = [ 30, 26, 27];
/* let john = ages[0];
let mary = ages[1];
let joe = ages[2]; */
let [john, mary, joe] = ages;
console.log(john, mary, joe)

// Destructuring objects
let jobs = {
    mike:"designer",
    jill:"Soft. eng",
    alicia: "doctor",
}

let {mike, jill, alicia} = jobs;
console.log(mike, jill, alicia);

// Destructuring subsets

let languages = ["english", "frech", "italian", "spanish", "japanese"]
let [johnNative, johnSecondary] = languages;
console.log(johnNative, johnSecondary );

let [, , maryNative, , marySecondary] = languages;
console.log(maryNative, marySecondary);

let languages2 = {
    firstLanguage: "english",
    secondLanguge: "french",
    thirdLanguge: "italian",
    fourthLanguge: "german",
};
let {firstLanguage, thirdLanguge} = languages2;
console.log(firstLanguage, thirdLanguge);
// Using rest parameter syntax

let fruits = ["apple", "banana", "grapes", "kiwi", "pear" ];
let [favourite, secondFavourite, ...others] = fruits;
console.log(favourite);
console.log(secondFavourite);
console.log(others);

let favouriteFood = {
    brian: "pizza",
    anna: "pasta" ,
    mike: "vegetarian",
    andreea: "steak"
};

let {brian, anna, ...rest } = favouriteFood;
console.log(brian);
console.log(anna);
console.log(rest);