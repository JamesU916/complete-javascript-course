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
*/
