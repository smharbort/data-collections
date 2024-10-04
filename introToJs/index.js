// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Combine variables
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.



//                                                              START MY CODE HERE

//                                              PART 1
// check divisible by 5
const isDivisibleBy5 = ((n1 + n2 + n3 + n4) % 5) == 0;

const isFirstLargerThanLast = n1 > n4;

// n2 - n1
const a = n2 - n1;

// result * n3
const b = a * n3;

// result / n4 remainder
const c = b % n4;

const changeIsUnder25Const = n1 < 25 && n2 < 25 && n3 < 25 && n4 < 25;

//                              log results
/* console.log(isDivisibleBy5)
console.log(isFirstLargerThanLast)
console.log(a)
console.log(b)
console.log(c)
console.log(changeIsUnder25Const) */



//                                              PART 2
const tripDistance = 1500;
const mpg55Mph = 30;
const mpg60Mph = 28;
const mpg75Mph = 23;
const budget = 175;
const avgCostPerGal = 3;

//                              calc for 55mph
// gallons of fuel?
const checkQtyGal55 = tripDistance / mpg55Mph;
// budget cover?
const budgetCover55 = (budget - (checkQtyGal55 * avgCostPerGal)) >= 0;
// trip time?
const tripTimeInHours55 = (tripDistance / 55);

//                              log results
/* console.log(checkQtyGal55)
console.log(budgetCover55)
console.log(tripTimeInHours55) */



//                              calc for 60mph
// gallons of fuel?
const checkQtyGal60 = tripDistance / mpg60Mph;
// budget cover?
const budgetCover60 = (budget - (checkQtyGal60 * avgCostPerGal)) >= 0;
// trip time?
const tripTimeInHours60 = (tripDistance / 60);

//                              log results
/* console.log(checkQtyGal60)
console.log(budgetCover60)
console.log(tripTimeInHours60) */

//                              calc for 75mph
// gallons of fuel?
const checkQtyGal75 = tripDistance / mpg75Mph;
// budget cover?
const budgetCover75 = (budget - (checkQtyGal75 * avgCostPerGal)) >= 0;
// trip time?
const tripTimeInHours75 = (tripDistance / 75);

//                              log results
/* console.log(checkQtyGal75)
console.log(budgetCover75)
console.log(tripTimeInHours75) */