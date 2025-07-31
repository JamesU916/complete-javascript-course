/*1. values & variables
let country = "UK";
let continent = "Europe";
let population = 68;

console.log(country);
console.log(continent);
console.log(population);
*/

/*2. Data types
let isIsland = true;
let country = "UK";
let population = 68;
let language;

console.log(typeof isIsland);
console.log(typeof country);
console.log(typeof population);
console.log(typeof language);
*/

/* 3. let, const & var

const isIsland = true;
const country = "UK";
let population = 68;
const language = "English";

// isIsland = false; - won't work as is declared as const
*/

/* 4-6 . basic operators & strings and template literals
const country = "UK";
const continent = "Europe";
let population = 68;
const language = "English";
population++;
console.log(population);

const finnishPopulation = 6;
console.log(population > finnishPopulation);

const avgPopulation = 33;
console.log(population < avgPopulation);

const description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(description);


// 7. taking decisions: if/else statements
const country = "UK";
let population = 68;
const avgPopulation = 33;

if (population > avgPopulation) {
  console.log(
    `${country}'s population is ${
      population - avgPopulation
    } million above average`
  );
} else if (population < avgPopulation) {
  console.log(
    `${country}'s population is ${
      avgPopulation - population
    } million below average`
  );
} else {
  console.log(`${country} has an average population.`);
}

// 8. Type conversion and coercion
console.log("9" - "5"); // -> 4
console.log("19" - "13" + "17"); // -> 617
console.log("19" - "13" + 17); // -> 23
console.log("123" < 57); // -> false
console.log(5 + 6 + "4" + 9 - 4 - 2); // -> 1143



// 9. Equality operators
const numNeighbours = Number(
  prompt("How many neighbour countries does your country have?")
);

if (numNeighbours === 1) {
  console.log("Only 1 border!");
} else if (numNeighbours > 1) {
  console.log("More than 1 border");
} else {
  console.log("No borders");
}


// 10. Logical Operators
const country = "Spain";
const language = "Spanish";
const climate = "sunny";

if (language === "Spanish" && climate === "sunny") {
  console.log(`You should live in ${country} :)`);
} else {
  console.log(`${country} does not meet your criteria :(`);
}


// 11. switch statement

const language = "Spanish";

switch (language) {
  case "Chinese":
  case "Mandarin":
    console.log("MOST number of native speakers!");
    break;
  case "Spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "English":
    console.log("3rd place");
    break;
  case "Hindi":
    console.log("Number 4");
    break;
  case "Arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too!");
}
*/
