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

// challange 

/* You will create three variables using destructuring on an array returned from a function. The first and second variables will be the first two items in the array and the final one will be the remainder of items in the array. You will also create an arrow function, Which should return an array containing all the subjects for whichever students name is supplied when the function is called.
 
Declare a variable named: makeList using the keyword const
The variable makeList should be assigned an arrow function
The arrow function should take two parameters named: arr, student
The arrow function should use a return statement
The function should return an array of the subjects for the student whose name is passed into the function when called.
Using destructuring on the return value from calling the function and passing in the students array,  and the string John, create 3 variables named: first, second, rest using the keyword let
log out the values  first, second, and rest to view their values
Note the function should return the correct subjects when the names Emily, Adam, and Fran are used, and this will be tested. */
let students = [
    {
        name: 'Emily',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 80, art: 95},
    },
    {
        name: 'John',
        subjects: ['art', 'cad', 'english', 'maths', 'science'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 93, maths: 77, art: 95},
    },
    {
        name: 'Fran',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 87, art: 95},
    }
];
const makeList = (arr, student) => {
    const studentObj = arr.find(item => item.name === student);
    return studentObj ? studentObj.subjects : [];
};

let [first, second, ...rest] = makeList(students, 'John');

console.log(first, second, rest);



