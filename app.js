/* ============================================
   OPERATORS PRACTICE
   Fill in each TODO, then run this file with:
     node app.js
   Check that your console.log() output makes sense!
   ============================================ */


/* --------------------------------------------
   1. ARITHMETIC OPERATORS
   Create a variable `total` (a sum of numbers, e.g. 87)
   and a variable `items` (a count, e.g. 4).
   Calculate the average and log the result.
-------------------------------------------- */

let total=30;
let items=7;
let average=total/items;
console.log("this is the average = " + average);

// TODO: create total and items
// TODO: calculate the average (hint: which operator divides?)
// TODO: console.log the average


/* --------------------------------------------
   2. COMPARISON OPERATORS
   Create two variables, `password` and `confirmPassword`.
   Use a STRICT equality operator to check if they match.
   Log the boolean result.
-------------------------------------------- */

// TODO: create password and confirmPassword (try making them match, then not match)
// TODO: use === to compare them
// TODO: console.log the boolean result
const password=84;
const confirmPassword=83;
console.log(confirmPassword==password);

/* --------------------------------------------
   3. LOGICAL OPERATORS
   Create two boolean variables, `hasTicket` and `isGuest`.
   Create `canEnter` that is true if EITHER one is true.
   Log the value of canEnter.
-------------------------------------------- */

let hasTicket=true;
let isGuest=false;
let canEnter;
if (hasTicket || isGuest){
   canEnter=true;
} else {
   canEnter=false;
}
console.log(canEnter)
// TODO: create hasTicket and isGuest
// TODO: create canEnter using the correct logical operator
// TODO: console.log canEnter


/* --------------------------------------------
   4. VALIDATION (COMPARISON)
   Create a variable `age`.
   Write an expression that checks if age is >= 18.
   Log the result.
-------------------------------------------- */

// TODO: create age
// TODO: check if age >= 18
// TODO: console.log the result
let age=15;
if(age>=18) console.log("Is older than 18")
else console.log("Is younger than 18")

/* --------------------------------------------
   BONUS 1 — OPERATOR PRECEDENCE
   Without running the code, predict what this logs.
   Write your guess in a comment, THEN run it and see
   if you were right.
-------------------------------------------- */

// My guess: 19
let bonusResult = 10 + 5 * 2 - (3 % 2);
console.log("Bonus 1:", bonusResult);


/* --------------------------------------------
   BONUS 2 — TRUTHY / FALSY
   For each value below, guess if it's truthy or falsy,
   then log it inside an if/else to check yourself.

   Values to test: 0, "", "hello", null, undefined, 42, NaN
-------------------------------------------- */

let mysteryValue = ""; // try changing this to each value above

if (mysteryValue) {
  console.log("Bonus 2: truthy!");
} else {
  console.log("Bonus 2: falsy!");
}
