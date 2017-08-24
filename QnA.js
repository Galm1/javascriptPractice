console.log('whatever')


function begin() {
  console.log("begin");
}
begin();


function echo(x) {
  console.log(x);
}
echo('hello');


function math(x, y, z) {
  let add = x + y;
  let answer = add * z;
  console.log(answer)
}
math(6, 4, 9);


function toString(array) {
  let string = array.join('');
  console.log(string);
}
toString(['here ', 'is ', 'my ', 'string.']);


function callme(callback) {
  console.log('first from callme')

  function callback() {
    console.log('second from callme');
  }
  callback();
}
callme();


function callme2(callback) {
  console.log('first from callme2')

  function callback(hello) {
    console.log('second from callme2');
    console.log(hello);
  }
  callback('hello in param of callme2');
}
callme2();


function reverse(word) {
  word = word.split('').reverse().join('');
  console.log(word);
}
reverse('Reverse Me');


function sleep() {
  setTimeout(function() {
    console.log('before sleep "loop"')
  }, 1000);
  setTimeout(function() {
    console.log('after sleep "loop"')
  }, 2000)
}
sleep();

//////////////////////////////////////////////



// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// Then, write and example of using the function.

let num1 = 1;
let num2 = 2;

function max(x, y) {
  if (x >= y) {
    return x
  }
   return y
}

console.log(max(num1, num2));

//If you need to know which cup is larger to hold more *enter drink of your choice*


// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// Then, write and example of using the function.

function maxOfThree(x,y,z){
    if (x > y && x > z) {
      return x
    } else if (y > x && y > z) {
      return y
    } else {
      return z
    }
}

let x = 1
let y = 2
let z = 3

console.log(maxOfThree(x,y,z));

//to find the tallest person to reach on top of the fridge for *enter drink of your choice*

// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// Then, write and example of using the function.

function isVowel(char){
  if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
    return true
  } else if (char = 'y') {
    return 'sometimessss'
  }else {
    return false
  }
}

console.log(isVowel('y'));

//for someone learning english. they can enter the letter and find out if it is as vowel or not.

// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// Then, write and example of using the function.
function sum(x, y){
   return x + y
}

console.log(sum(1, 2));

//to find out if you added one cup of *enter drink of your choice* to another cup of *enter drink of your choice* then how much of *enter drink of your choice* would you have?

// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// Then, write and example of using the function.
function avg(x, y, z){
  return (x + y + z)/3
}

console.log(avg(1, 2, 3));

//to find out your average daily intake of *enter your drink of choice* over a span of three days.


// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// Then, write and example of using the function.
function getLength(x){
  return x.length;
}

console.log(getLength('stringalingdingding'));

//to find out out many letters are in the name of *enter your drink of choice*

// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// Then, write and example of using the function.

function greaterThan(x,y){
  if (y > x) {
    return true
  }
    return false

}

console.log(greaterThan(2,5));

//so you can compare the weight of one cup of *enter drink of your choice* to another.

// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// Then, write and example of using the function.
function greet(x){
  return 'hello, ' + x;

}

console.log(greet('YO MAMA'));

//to greet people to your website after they enter thier info.

// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// Then, write and example of using the function.
function madlib(x,y,z,outofletters){
  return x + outofletters + z + y;
}

console.log(madlib('quick brown ','e','jumps over the fenc','fox '));

//to make a madlib. duh.


////////////////////////////////////////////////////////////



// 1.
// Complete the following function
// It should return `true` if the first argument is greater than the second and `false` if not
// Use the greater than operator `>`
function greaterThan (num1, num2) {
  return Math.max(num1, num2);
}

console.log(greaterThan(3, 2) === 3);


// 2.
// Call the `greaterThan` function in the condition for the following if statement
// Provide arguments to `greaterThan` which make the if statement log 'Less than or equal to'
if (greaterThan(3, 6)) {
  console.log('Greater than');
} else {
  console.log('Less than or equal to');
}



// 3.
// Refactor the `lessThan` function to match the following specs:
// It returns 'Less than' if the first argument is less than the second
// It returns 'Greater than' if the first argument is greater than the second
// It returns 'Equal to' if the first argument is equal to the second
function lessThan (num1, num2) {
  // Your answer here
  // return Math.max(num1, num2)
  if (num1 < num2) {
    return 'Less than'
  } else if (num1 > num2) {
    return 'Greater than'
  } return 'Equal to'
}


console.log(lessThan(2, 3) === 'Less than');
console.log(lessThan(2, 1) === 'Greater than');
console.log(lessThan(2, 2) === 'Equal to');


// 4.
// The below assertion does not work.
// The function addNumbers needs to be created
let twoPlusTwo = addNumbers(2, 2);
function addNumbers(x, y){
  return x + y
}

console.log(twoPlusTwo === 4)



/////////////////////////////////////////////////////////////



/*
In this project, your task is to complete the unfinished functions. Instructions accompany each function explaining what the function should do and what value it should return. You will implement logic using loops, conditional statements, arrays, and objects to return the values specified in the instructions.

The `test.js` file contains tests for all of the functions in this project. Do not change any code in `test.js`. To see the output from `test.js` and to evaluate your work, open `index.html` in Chrome and view the console in the Developer Tools. You'll know that you are finding success when all of the `console.log` statements print 'true'.
*/


/********************
Use the following array to complete tasks 1-3
*********************/
let numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6];


/*
1. Return the 4th element in the "numbers" array
*/
function getFourthNum() {
  // Your answer here:
  return numbers[3]
}

/*
2. Iterate over the "numbers" array. Push any numbers less than 10 onto "smallNums". Return "smallNums".
*/
function smallNums() {
  let smallNums = [];
  // Your answer here:
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] < 10) {
      smallNums.push(numbers[i])
    }
  }
  return smallNums;
}

/*
3. Add 12, 99, and 101 (in that order) to the end of the "numbers" array. Return the "numbers" array.
*/
function addNums() {
  // Your answer here:
  {
    numbers.push(12, 99, 101)
  }
  return numbers;
}




/********************
Use the following object to complete tasks 4-6
*********************/

let film = {
  title: "Seven Samurai",
  director: "Akira Kurosawa",
  released: 1956,
  runtime: 207,
  budget: 2000000,
  actors: ["Toshiro Mifune", "Takashi Shimura", "Keiko Tsushima"],
};


/*
4. Add a property "boxoffice" with a value of 269061 to the "film" object. Return "film".
*/
function addBoxOffice() {
  // Your answer here:
  film.boxoffice = 269061;
  return film;
}

/*
5. Add the name "Yukiko Shimazaki" to the "actors" array. Return "film";
*/
function addActor() {
  // Your answer here:
  film.actors.push('Yukiko Shimazaki');
  return film;
}

/*
6. Now that you've added a "boxoffice" property, subtract "budget" from "property" and return the difference. This number is the amount lost by the studio in making the film. Return the loss.
*/
function getLosses() {
  // Your answer here:
  return film.boxoffice - film.budget
}







/*
7. Iterate over "letterVals" and "numberVals". Concatenate the values from the two arrays and store the new values in the "vals" array. Return "vals".

Your function should return [ "v5", "x67", "r34", "f456", "p78" ];
*/

let numberVals = [5, 67, 34, 456, 78];
let letterVals = ["v", "x", "r", "f", "p"];

function interleave() {
  let vals = [];
  // Your answer here:
  for (var i = 0; i < numberVals.length; i++) {
    vals.push(letterVals[i] + numberVals[i])
  }
  return vals;

}






/*
8. Iterate over the "first" and "second" arrays. Compare the values for both arrays. If the arrays values are the same, then store that value in the "same" array. Return "same".
*/

let first = ["blink", "stand", "glasses", "chair", "numinous", "adjacent", "bracelet", "hand"];
let second = ["think", "stand", "cheese", "break", "numinous", "mouse", "close", "toe"];

function union() {
  let same = [];
  // Your answer here:
  for (var i = 0; i < first.length; i++) {
    if(first[i]===second[i]){
      same.push(first[i])
    }
  }
  return same;
}




////////////////////////////////////////////////////////////////////



/*
In this activity, your task is to complete the unfinished functions. Instructions accompany each function explaining what the function should do and what value it should return. You will implement logic using loops, conditional statements, arrays, and objects to return the values specified in the instructions.

The `test.js` file contains tests for all of the functions in this activity. Do not change any code in `test.js`. To see the output from `test.js` and to evaluate your work, open `index.html` in Chrome and view the console in the Developer Tools. You'll know that you are finding success when all of the `console.log` statements print 'true'.

***************************
To demonstrate what is required in this activity, task 0 is spelled out and completed.
***************************
*/


/*
0. Return the "name" property value of the "pet" object.

Answer: This function should return the string "Clive"
*/

let pet = {
    name : "Clive"
};

function getPetName(){
    // Answer goes here:
    return pet.name;
}

/*
1. Return the concatenated "firstname" and "lastname" values of the "human" object.

HINT: Put a space `" "` between the two names

Answer: This function should return the string "Betty Ford"
*/

let human = {
    firstname : "Betty",
    lastname : "Ford"
};

function getHumanName(){
    // Answer goes here:
    return human.firstname + " " + human.lastname;
}

/*
2. Return the 3rd element of the "terrain" array

Answer: This function should return the string "hill"
*/

let terrain = [ "plain", "mountain", "hill", "beach", "valley" ];

function getTerrain(){
    // Answer goes here:
    return terrain[ 2 ];
}

/*
3. Return the 2nd element of the "hobbies" property of the "child" object

Answer: This function should return the string "running"
*/

let child = {
    name : "Sam",
    hobbies : [ "swimming", "running", "swinging" ]
};

function getChildHobby(){
    // Answer goes here:
    return child.hobbies[ 1 ];
}

/*
4. Iterate over the "nums" array and multiply each number by 3. Return the altered array.

HINT: You will need to "loop" over the array

Answer: This function should return [702, 18, 7128, 2658, 702, 1371, 234]
*/

let nums = [ 234, 6, 2376, 886, 234, 457, 78 ];

function getDoubledArray(){
    // Answer goes here:
    for(let i = 0; i < nums.length; i++){
        nums[ i ] *= 3;
    }
    return nums;
}

/*
5. Iterate over the "characters" array and concatenate each element onto the "gibberish" variable. After building the string, return "gibberish"

HINT: You will need to "loop" over the array

Answer: This function should return "k?4Fd9$al;Y1!"
*/

let characters = [ "k", "?", "4", "Fd", "9", "$", "a", "l", ";", "Y", "1", "!"];

function getGibberish(){
    let gibberish = "";
    // Answer goes here:
    for(let i = 0; i < characters.length; i++){
        gibberish += characters[ i ];
    }
    return gibberish;
}

/*
6. Add a new "health" property with a value of "9 hearts" to the "hero" object and return "hero"

Answer: This function should return { name: "Link", health: "9 hearts", weapon : "Sword" }
*/

let hero = {
    name: "Link",
    weapon : "Sword"
};

function addHealthToHero(){
    // Answer goes here:
    hero.health = "9 hearts";
    return hero;
}

/*
7. Iterate over the "bigNums" array. If any number is less than 10, replace it with "x". Return "bigNums"

HINT: You will need to "loop" over the array and check "if" the numbers are "less than" 10

Answer: This function should return ["x", 12, "x", 56, 19, "x", "x", "x", 14, 10, "x"]
*/

let bigNums = [ 3, 12, 7, 56, 19, 9, 1, 5, 14, 10, 2 ];

function nixLittleNums(){
    // Answer goes here:
    for( let i = 0; i < bigNums.length; i++ ){
        if( bigNums[ i ] < 10 ){
            bigNums[ i ] = "x";
        }
    }
    return bigNums;
}

/*
8. This example includes the "randomWord" function. "randomWord" will select a random element from the "words" array and return that element. Use "randomWord" to build a new array "lotsOfWords" with 100 elements from "words".  Return "lotsOfWords".

HINT: You'll need to call the same function 100 times. "words" is a small array, so "lotsOfWords" will have many duplicated words.

Answer: Since "randomWord" returns a word at random, this document cannot provide an exact result. However, `lotsOfWords.length` should be 100
*/

function randomWord(){
    let words = [ "puzzling", "thirsty", "sound", "shade", "moon" ];
    return words[ Math.floor( Math.random() * 5 ) ];
}

function getBigWordList(){
    let lotsOfWords = [];
    // Answer goes here:
    let i = 0;

    while( i < 100 ){
        lotsOfWords.push( randomWord() );
        i++;
    }
    return lotsOfWords;
}

/*
9. Within the function, create a new variable "finalChoice" and initialize it with an empty array. Then, iterate over the "option1" and "option2" arrays using a single loop. Within the loop, compare the values of each array at each index. Push the larger of the two numbers onto the "finalChoice" array. Return "finalChoice".

HINT: You'll need to "loop" over these arrays. "If" the number in option1 is larger, push it onto finalChoice, "else" push the number in option2 onto finalChoice.

Answer: This should return [76, 586, 12, 934, 76, 345, 6789, 123, 675, 43654]
*/

let option1 = [ 45, 586, 12, 365, 76, 23, 86, 19, 8, 43654 ];
let option2 = [ 76, 364, 4, 934, 6, 345, 6789, 123, 675, 12 ];

function getFinalChoice(){
    // Answer goes here:
    let finalChoice = [];

    for( let i = 0; i < option1.length; i++ ){
        if( option1[ i ] > option2[ i ] ){
            finalChoice.push( option1[ i ] );
        }
        else{
            finalChoice.push( option2[ i ] );
        }
    }
    return finalChoice;
}




////////////////////////////////////////////////////////////////////



/*
In this activity, your task is to complete the unfinished functions. Instructions accompany each function explaining what the function should do and what value it should return. You will implement logic using loops, conditional statements, arrays, and objects to return the values specified in the instructions.

The `test.js` file contains tests for all of the functions in this activity. Do not change any code in `test.js`. To see the output from `test.js` and to evaluate your work, open `index.html` in Chrome and view the console in the Developer Tools. You'll know that you are finding success when all of the `console.log` statements print 'true'.
*/



/*
1. Iterate over `numberArray` and multiply each number by the iterator `i`. Then, add all of the values in `numberArray` together to produce a single large number. Return the large number.

HINT: You will need to initialize a variable to store the total number and to return the final value.

Answer: This function should return the number 18406.
*/
let numberArray = [ 23, 234, 64 , 89, 2, 756, 3, 58, 674, 32, 756, 23, 6 ];

function getBigNumber(){
    // Your answer goes here:
    let total = [];
    for (let i = 0; i < numberArray.length; i++) {
      numberArray[i] *= i;
      total += numberArray[i];
    }
    return total;
}

/*
2. The "people" array contains a list of objects. Each object has "name" and "age" properties. Iterate over "people" and evaluate each object. If "age" is less than 18, add a "status" property with the value of "minor" to that object. If "age" is over 65, add a "status" property of "senior", else add a "status" property of "adult". Return "people".

Answer: This function should return:
[{ name : "Anne",   age : 22, status : "adult"  },
 { name : "Benton", age : 7,  status : "minor"  },
 { name : "Chris",  age : 35, status : "adult"  },
 { name : "Donna",  age : 12, status : "minor"  },
 { name : "Conor",  age : 85, status : "senior" }]

: The people object has been written compactly to make it easier to read and to occupy fewer lines in the document.
*/

let people = [
    { name : "Anne",   age : 22 },
    { name : "Benton", age : 7  },
    { name : "Chris",  age : 35 },
    { name : "Donna",  age : 12 },
    { name : "Conor",  age : 85 }
];

function checkPeopleStatus(){
    // Your answer goes here:
    for (var i = 0; i < people.length; i++) {
      if (people[i].age < 18){
        people[i].status = 'minor'
      } else if (people[i].age > 65) {
        people[i].status = 'senior'
      } else {
        people[i].status = 'adult'
      }
    }
    return people
}


/*
3. Create a string that, when printed to the console, will output a triangle of stars. The triangle should look like this:

*
**
***
****
*****

This configuration of stars can be accomplished with a single string if you include a newline character ("\n") after each row of stars. Newline characters aren't visible, but if they were, the triangle would look like this:

*\n
**\n
***\n
****\n
*****\n

HINT: Maintain a variable to hold the "rows" and another variable to hold the entire "triangle" string. This task can be accomplished without nested loops.

The solution file contains two ways to accomplish this task.

Answer: This function should output the string "*\n**\n***\n****\n*****\n"
*/

function printTriangle(){
    // Your answer goes here:
    let row = ''
    let triangle = ''

    for (var i = 0; i < 5; i++) {
      row += '*'
      triangle += row + '/n'

    }
    return triangle;
}

/*
4. The "matrix" array contains arrays of letters. "matrix" is an array of arrays. Nested arrays are sometimes referred to as "multi-dimensional" array. To access information from a multi-dimensional array, use bracket notation.

For instance, to access "b", I have to access the first array in "matrix". `matrix[ 0 ]` will return the first array.

Then, I need to access the second element in that array.

`matrix[ 0 ][ 1 ]` will return the string "b"; This notation can be read as "return index 1 of index 0 of matrix".

Complete the function to iterate over the multi-dimensional array and convert the "columns" of characters into "rows" and vice versa. An example of a column is "a", "d", "g". An example of a row is "a", "b", "c". Shifting columns to rows in this way is called "transposition." Complete the function so that it transposes the multi-dimensional array and returns the new array.

HINT: This task is HARD! It requires nested loops and careful management of variables. Don't get overwhelmed if you can't complete it today. Give it your best shot. This task will be a good test of your understanding as you progress in your programming ability.

Answer: This function should return:

[
    [ "a", "d", "g" ],
    [ "b", "e", "h" ],
    [ "c", "f", "i" ]
]
*/

let matrix = [
    [ "a", "b", "c" ],
    [ "d", "e", "f" ],
    [ "g", "h", "i" ]
];

function transpose(){
    let newMatrix = [];
    // Your answer goes here:
}



//////////////////////////////////////////////////////////////////////////




/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/


function handValue(hand) {


  let total = 0;
  for (let i = 0; i < hand.length; i++) {
    let card = hand[i];
    if (card === 'K' || card === 'Q' || card === 'J') {
      total += 10;
    } else if (card !== 'A') {
      total += parseInt(card, 10);
    }
  }

  for (let i = 0; i < hand.length; i++) {
    if (hand[i] === 'A') {
      if (total > 10) {
        total += 1;
      } else {
        total += 11;
      }
    }


  }
  console.log(total);
  return total;
}


/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/



////////////////////////////////////////////////////////////////////////
