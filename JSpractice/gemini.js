
// 1 - c
// 2 - c
// 3 - c
// 4 - c
// 5 - b
// 6 - b
// 7 - c
// 8 - b
// 9 - c
//10 - b
//11 - true
//12 - false
//13 - true
//14 - false
//15 - false
//16 - false
//17 - true
//18 - false
//19 - false
//20 - false
//21 - exponentiation
//22 - typeof
//23 - true
//24 - true
//25 - x *= 5
//26 - === prefered because of less mistakes in code
//27 - Good day
//28 - Concatenation
//29 - 'Hello105'
//30 - '15Hello'
//31 - 9
//32 - 0
//33 - false

//easy exercises

//1. area calculator:
let width = 10;
let height = 20;
let area = width * height;

console.log(area);

//2. reminder check:

let num = 15;
let reminder = num % 4;

console.log(reminder);

//3. incrementing counter:

let counter = 0;
counter ++;
counter ++;
counter ++;

console.log(counter);

//4. String greeting:

let greeting = 'hello';
let name = 'learner';
let fullgreeting = (greeting + ' ' + name);

console.log(fullgreeting);

//5. simple comparison:

let myAge = 31;

console.log(myAge === 18);

//Medium exercises

//1. Temperature Converter(c to f):

let tempCelsius = 21;
let tempFahrenheit = (tempCelsius * 9/5) + 32;

console.log(`${tempCelsius}°C is ${tempFahrenheit}°F`);

//2. Discount Calculator:

let originalPrice = 100;
let discountPercentage = 20;

let finalPrice = originalPrice - (originalPrice * (discountPercentage / 100));

console.log(finalPrice);

//3. Login Check:

let isUserLoggedIn = true;
let hasPurchaseCredit = false;

let canMakePurchase = isUserLoggedIn && hasPurchaseCredit;

console.log(canMakePurchase);

//4. Access Check:

let isAdmin = true;
let isEditor = false;

let hasAccessToEdit = isAdmin || isEditor;

console.log(hasAccessToEdit);

//5. Eligibity Check:

let userScore = 75;
let result = (userScore > 50) ? 'pass' : 'fail';

console.log(result);

//Hard Exercises

//1. Complex Calculation & Type Check:

let a = 5;
let b = '10';
let c = 3;
let result1 = a + c * 2.
console.log(result1);
let result2 = a + b + c;
console.log(result2);
let result3 = b + a + c;
console.log(result3);

console.log(typeof(result1),
            typeof(result2),
            typeof(result3));


//2. Strict vs Loose Comparison Investigation:

let val1 = 0;
let val2 = false;
let val3 = '0';
let val4 = null;
let val5 = undefined;
console.log(val1 == val2);
console.log(val1 === val2);
console.log(val1 == val3);
console.log(val1 === val3);
console.log(val2 == val3);
console.log(val4 == val5);
console.log(val4 === val5);
//== and === gives different results because of theyr properties
//== checking just a value of this pair
//=== checking also a type of pair

//3. Logical Combination & Short-Circuiting:

let isAvailable = true;
let quantity = 0;
let canOrder = false;
canOrder = isAvailable || quantity > 0;
console.log(canOrder);
canOrder = isAvailable && quantity > 0;
console.log(canOrder);
canOrder != isAvailable || quantity > 0;
console.log(canOrder);

canOrder = true;
canOrder = isAvailable || quantity !== 0;
console.log(canOrder);

//4. Pre/Post Increment/Decrement Puzzle:

let x = 5;
let y = 10;

console.log(x++ + y);
console.log(++x + --y);
console.log(x + y--);
console.log(x + y);

//5. Ternary Chaining (Simplified):

let score = 75;
let grade = (score >= 90) ? 'A'
           :(score >= 70) ? 'B'
           :(score >= 50) ? 'C'
           :'D';

console.log(grade);