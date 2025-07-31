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


// 7. Type Conversion & Coercion

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
*/
