/* 1. values & variables
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("James");
console.log(28);

let firstName = "James";
console.log(firstName);

let PI = 3.1415; //use uppercase only for constants e.g. PI will never change

let myFirstJob = "bar staff";
let myCurrentJob = "tech apprentice";


2. data types

let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof 23);
console.log(typeof "James");

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year = 1996;
console.log(year);

console.log(typeof null); //logs as an object but its not - its a legacy bug that is kept in JS



//3. let, const & var

let age = 28;
age = 29;

const birthYear = 1996;
//birthYear = 2000;

const aJob = "";
//best practise to use const as much as possible. let only if sure its going to change

var job = "bar staff";
job = "coder"; //can reassign var but avoid its use

lastName = "Ucz"; //don't declare like this even though it works - will go to global scope
console.log(lastName);



//4. basic operators

// math operators:
const now = 2025;
const ageJames = now - 1996;
const ageManager = now - 1985;
console.log(ageJames, ageManager);

console.log(ageJames * 2, ageJames / 10, 2 ** 3);
//2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "James";
const lastName = "Ucz";
console.log(firstName + " " + lastName);

// assignment operators:
let x = 10 + 5;
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; //x = x + 1
x--; // x = x - 1
console.log(x); //will log 25

// comparison operators:
console.log(ageJames > ageManager); //will be false
console.log(ageJames >= 18); // will be true

const isOver18 = ageJames >= 18;
console.log(isOver18);

*/

/*5. Operator Precedence

const now = 2025;
const ageJames = now - 1996;
const ageManager = now - 1985;
console.log(now - 1985 > now - 1996); // higher precedence of math than comparison operators so calculation is done first - MDN good for this

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y); // both log to 10 - will start with - operators above as higher precedence than assignment operator

const averageAge = ageJames + ageManager / 2; // won't work as ageManager / 2 is done first, therefore need parentheses:
const realAverageAge = (ageJames + ageManager) / 2;
console.log(realAverageAge);


// CHALLENGE 1

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn, markHigherBMI);


// 6. Strings and template literals

const firstName = "James";
const job = "Software Engineer";
const birthYear = 1996;
const year = 2028;

const james = `I'm ${firstName}, a ${year - birthYear} year old ${job}.`;
console.log(james);

console.log(`String
multiple
lines`); // using template literals here allows us to go to a new line rather than using \n\


// 7. taking decisions: if/else statements
const age = 19;
const isOldEnoughToDrive = age >= 17;

if (isOldEnoughToDrive) {
  console.log("You can start driving 🚗");
} else {
  const yearsLeft = 17 - age;
  console.log(`You are too young to drive. Wait another ${yearsLeft} years ⌛`);
}

const birthYear = 1996;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);


// CHALLENGE 2
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
  console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
}


// 8. Type Conversion & Coercion

// Type Conversion
const inputYear = "1996";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear + 18));

console.log(Number("James")); // will log NaN
console.log(typeof NaN); //still a number type but invalid

console.log(String(28), 28); // first is string, second is number

// Type Coercion
console.log("I am " + 28 + " years old"); // number will be converted to a string here, auto type coercion in JS
console.log("23" - "10" - "3"); // we get 10 as its converted to number
console.log("23" + "10" + "3"); // HOWEVER this gives us 23103
// the - / and * will convert to numbers HOWEVER + won't

let n = "1" + 1; // makes 11 as string
n = n - 1; // converts to number and subtracts 1
console.log(n); // will log 10

console.log(2 + 3 + 4 + "5"); // will log 95
// Type coercion can introduce unexpected bugs so be careful


// 9. Truthy and falsy values

// 5 falsy values: 0, '', undefined, null, NaN // will become false when attempt to convert
console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean("James")); // true
console.log(Boolean({})); // true
// form of type coercion

const money = 100;
if (money) {
  // JS will try to convert to Boolean
  console.log("Don't spend it all!"); // evokes truthy block
} else {
  console.log("You should get a job!");
}

let height;
if (height || height === 0) {
  // prevents it assigning falsy if height is 0 (i.e. valid in this case)
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED"); // evokes falsy block
}


// 9. Equality operators

const age = 18;
if (age === 18) console.log("You are 18");

console.log(18 === 18); // true
console.log(18 === 19); // false
console.log("18" == 18); // true - loose equality
console.log("18" === 18); // false - strict equality

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite); // will be a string

if (favourite === 27) {
  // type coercion will convert it to a number with loose equality
  // but if we convert it to a Number on the input as above it will work
  console.log("That was a significant age");
} else if (favourite === 28) {
  console.log("28 is where it all started to come together");
} else {
  console.log("Number is not 27 or 28");
}

if (favourite !== 27 || favourite !== 28) console.log("Why not 27 or 28?");


// 10. Logical Operators & Boolean Values
const hasDriversLicense = true;
const hasGoodVision = false;

console.log(hasDriversLicense && hasGoodVision); // false
console.log(hasDriversLicense || hasGoodVision); // true
console.log(!hasDriversLicense); // false

const shouldDrive = hasDriversLicense && hasGoodVision;

// if (shouldDrive) {
//   console.log("You are able to drive");
// } else {
//   console.log("Someone else should drive"); // logs this
// }

const isTired = true;

if (shouldDrive && !isTired) {
  console.log("You are able to drive");
} else {
  console.log("Someone else should drive"); // logs this
}

// CHALLENGE 3
const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;

if (scoreDolphins > scoreKoalas) {
  console.log("Dolphins win the trophy");
} else if (scoreKoalas > scoreDolphins) {
  console.log("Koalas win the trophy");
} else {
  console.log("Both win the trophy");
}


// 11. The switch statement

const day = "Monday";

switch (day) {
  case "Monday": //day === 'Monday'
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break; //break is necessary to stop code from continuing to execute
  case "Tuesday":
    console.log("Prepare theory videos");
    break;
  case "Wednesday":
  case "Thursday":
    console.log("Write code examples");
    break;
  case "Friday":
    console.log("Record videos");
    break;
  case "Saturday":
  case "Sunday":
    console.log("Enjoy the weekend!");
    break;
  default:
    console.log("Not a valid day!");
}

// same thing with if/else statement

if (day === "Monday") {
  console.log("Plan course structure");
  console.log("Go to coding meetup");
} else if (day === "Tuesday") {
  console.log("Prepare theory videos");
} else if (day === "Wednesday" || day === "Thursday") {
  console.log("Write code examples");
} else if (day === "Friday") {
  console.log("Record videos");
} else if (day === "Saturday" || day === "Sunday") {
  console.log("Enjoy the weekend!");
} else {
  console.log("Not a valid day!");
}


// 12. Statements and expressions
// 3 + 4 is an expression - produces a value
// if/else statements are statements - doesn't produce a value - performs actions based on statement
// can put an expression in a template literal but not a statement

// 13. The Conditional (Ternary) Operator

const age = 28;
age >= 18
  ? console.log("I like to drink wine 🍷")
  : console.log("I like to drink water 💧");

const drink = age >= 18 ? "wine 🍷" : "water 💧";
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "wine 🍷";
} else {
  drink2 = "water 💧";
}

console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "water 💧"}`);
// ^ can put ternary in template literal

// CHALLENGE 4
const bill = 275;
const tip = bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill;

console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);
  */
