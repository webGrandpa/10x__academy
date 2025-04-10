
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

// //1. area calculator:
// let width = 10;
// let height = 20;
// let area = width * height;

// console.log(area);

// //2. reminder check:

// let num = 15;
// let reminder = num % 4;

// console.log(reminder);

// //3. incrementing counter:

// let counter = 0;
// counter ++;
// counter ++;
// counter ++;

// console.log(counter);

// //4. String greeting:

// let greeting = 'hello';
// let name = 'learner';
// let fullgreeting = (greeting + ' ' + name);

// console.log(fullgreeting);

// //5. simple comparison:

// let myAge = 31;

// console.log(myAge === 18);

// //Medium exercises

// //1. Temperature Converter(c to f):

// let tempCelsius = 21;
// let tempFahrenheit = (tempCelsius * 9/5) + 32;

// console.log(`${tempCelsius}°C is ${tempFahrenheit}°F`);

// //2. Discount Calculator:

// let originalPrice = 100;
// let discountPercentage = 20;

// let finalPrice = originalPrice - (originalPrice * (discountPercentage / 100));

// console.log(finalPrice);

// //3. Login Check:

// let isUserLoggedIn = true;
// let hasPurchaseCredit = false;

// let canMakePurchase = isUserLoggedIn && hasPurchaseCredit;

// console.log(canMakePurchase);

// //4. Access Check:

// let isAdmin = true;
// let isEditor = false;

// let hasAccessToEdit = isAdmin || isEditor;

// console.log(hasAccessToEdit);

// //5. Eligibity Check:

// let userScore = 75;
// let result = (userScore > 50) ? 'pass' : 'fail';

// console.log(result);

// //Hard Exercises

// //1. Complex Calculation & Type Check:

// let a = 5;
// let b = '10';
// let c = 3;
// let result1 = a + c * 2.
// console.log(result1);
// let result2 = a + b + c;
// console.log(result2);
// let result3 = b + a + c;
// console.log(result3);

// console.log(typeof(result1),
//             typeof(result2),
//             typeof(result3));


// //2. Strict vs Loose Comparison Investigation:

// let val1 = 0;
// let val2 = false;
// let val3 = '0';
// let val4 = null;
// let val5 = undefined;
// console.log(val1 == val2);
// console.log(val1 === val2);
// console.log(val1 == val3);
// console.log(val1 === val3);
// console.log(val2 == val3);
// console.log(val4 == val5);
// console.log(val4 === val5);
// //== and === gives different results because of theyr properties
// //== checking just a value of this pair
// //=== checking also a type of pair

// //3. Logical Combination & Short-Circuiting:

// let isAvailable = true;
// let quantity = 0;
// let canOrder = false;
// canOrder = isAvailable || quantity > 0;
// console.log(canOrder);
// canOrder = isAvailable && quantity > 0;
// console.log(canOrder);
// canOrder != isAvailable || quantity > 0;
// console.log(canOrder);

// canOrder = true;
// canOrder = isAvailable || quantity !== 0;
// console.log(canOrder);

// //4. Pre/Post Increment/Decrement Puzzle:

// let x = 5;
// let y = 10;

// console.log(x++ + y);
// console.log(++x + --y);
// console.log(x + y--);
// console.log(x + y);

// //5. Ternary Chaining (Simplified):

// let score = 75;
// let grade = (score >= 90) ? 'A'
//            :(score >= 70) ? 'B'
//            :(score >= 50) ? 'C'
//            :'D';

// console.log(grade);

//Quiz Time! (Days 1-4)

// 1 - c
// 2 - a
// 3 - d
// 4 - c
// 5 - b
// 6 - d
// 7 - c
// 8 - b
// 9 - c
//10 - c
//11 - true
//12 - true
//13 - false
//14 - false
//15 - false
//16 - true
//17 - false
//18 - false
//19 - false
//20 - false
//21 - NaN, '0', -0, 0n, 0, ''. 
//22 - switch
//23 - true
//24 - condition : '';
//25 - "Greater"
//26 - "Falsy"
//27 - truthy
//28 - 'Alpha','Bravo','Charlie';
//29 - false
//30 - true
//31 - "Adult"
//32 - console
//33 - NaN

//Easy Exercises:

//1.Check Number Sign:

// let num = 15;

// if (num > 0){
//     console.log('Positive');
// } else if (num < 0){
//     console.log('Negative');
// } else {
//     console.log('0 is not a negative or positive');
// }

// //2.Check if Even:

// let value = 9;

// if(value % 2 === 0){
//     console.log('even');
// } else if (value % 2 > 0){
//     console.log('odd');
// } else {
//     console.log('0 is not a odd or even');
// }

// //3.Simple Greeting:

// let hour = 18;

// if(hour > 12 && hour < 23){
//     console.log('Good morning');
// } else {
//     console.log('Good evening');
// }

// //4.Basic Switch:

// let color = 'green';

// switch (color){
//     case 'red':
//         console.log('Stop');
//         break;
//     case 'green':
//         console.log('Go');
//         break;
//     case 'blue':
//         console.log('Ready');
//         break;
//     default:
//         console.log('Unknown color');
// }

// //5.Truthy/Falsy Check:

// let userInput = null;

// if(userInput !== "" && userInput !== null && userInput !== 'hello' && userInput !== 0 && userInput !== NaN){
//     console.log('Input received');
// } else {
//     console.log('No input provided');
// }

// //Medium Exercises

// //1.Detailed Greeting:

// if(hour < 12){
//     console.log('Good morning!');
// } else if (hour >= 12 && hour <= 18){
//     console.log('Good afternoon');
// } else {
//     console.log('Good evening');
// }

// //2.Number Ranges:

// let number = 8;

// if(number < 10){
//     console.log('Small');
// } else if (number >= 10 && number < 100){
//     console.log('Medium');
// } else {
//     console.log('Large');
// }

// //3.Login Logic:

// let username = 'webGrandpa';
// let password = 'barbareIliasaMari';

// if(username !== '' && password.length > 6){
//     console.log('Login successful');
// } else {
//     console.log('Login failed');
// }

// //4.Ticket Pricing:

// let age = 19;

// if(age < 5){
//     console.log('Free');
// } else if (age >= 5 && age <= 12){
//     console.log("Child Ticket: $5");
// } else if (age >= 13 && age <= 59){
//     console.log("Adult Ticket: $10");
// } else {
//     console.log("Senior Ticket: $7");
// }

// //5.Switch with Fall-through (Days of the Week):

// let dayNumber = '4';

// switch(dayNumber){
//     case '1':
//     case '2':
//     case '3':
//     case '4':
//     case '5':
//         console.log('Weekday');
//         break;
//     case '6':
//     case '7':
//         console.log('Weekend');
//         break;
//     default:'Invalid numbers'
// }

// //Hard Exercises

// //1.Nested Access Control:

// let isLoggedIn = true;
// let userRole = 'admin';
// let documentStatus = 'draft';

// if(!isLoggedIn){
//     console.log('Please log in.');
// } else {
//     if(userRole === 'admin'){
//         console.log('Admin can manage all documents.');
//     } else if (userRole === 'editor'){
//         if(documentStatus === 'draft'){
//             console.log('Editor can edit drafts.');
//         } else if (documentStatus === 'published'){
//             console.log('Editor cannot edit published documents.');
//         } else {
//             console.log('Invalid status');
//         }
//     } else if(userRole === 'guest'){
//         if(documentStatus === 'published'){
//             console.log('Guest can view published documents.')
//         } else if (documentStatus === 'draft'){
//             console.log('Guest cannot view drafts.')
//         } else {
//             console.log('Invalid status');
//         } 
//     } else {
//         console.log('Uncnown role.')
//     }
// }

// //2.Simple Discount Calculator:

// let purchaseAmount = 10;
// let isMember = true;

// if(purchaseAmount >= 100){
//     if(isMember === true){
//         console.log(`Amount: ${purchaseAmount}, discount 15%, Final price: ${purchaseAmount - (purchaseAmount * 15 / 100)}`);
//     } else {
//         console.log(`Amount: ${purchaseAmount}, discount 10%, Final price: ${purchaseAmount - (purchaseAmount * 10 / 100)}`);
//     }
// } else if(purchaseAmount < 100){
//     if(isMember === true){
//         console.log(`Amount: ${purchaseAmount}, discount 5%, Final price: ${purchaseAmount - (purchaseAmount * 5 / 100)}`);
//     } else {
//         console.log(`Amount: ${purchaseAmount}, discount 0%, Final price: ${purchaseAmount}`);
//     }
// }else {
//     console.log(purchaseAmount);
// }

// //3.Rock Paper Scissors Logic:

// let player1Choice = 'rock';
// let player2Choice = 'paper';

// if (player1Choice === 'rock'){
//     if (player2Choice === 'paper'){
//         console.log('Player 2 wins!');
//     } else if (player2Choice === 'scissors'){
//         console.log('Player 1 wins!');
//     } else {
//         console.log("it's a tie!");
//     }
// } else if (player1Choice === 'paper'){
//     if (player2Choice === 'paper'){
//         console.log("it's a tie!");
//     } else if (player2Choice === 'scissors'){
//         console.log('Player 2 wins!');
//     } else {
//         console.log('Player 1 wins!');
//     }
// } else if (player1Choice === 'scissors'){
//     if (player2Choice === 'paper'){
//         console.log('Player 1 wins!');
//     } else if (player2Choice === 'scissors'){
//         console.log("it's a tie!");
//     } else {
//         console.log('Player 2 wins!');
//     }
// } else {
//     console.log('invalid move');
// }

// //4.Grade Calculator using Switch (Truthy expression):

// let score = 90;

// switch(true){
//     case score >= 90:
//         console.log("Grade: A");
//         break;
//     case score >= 80:
//         console.log("Grade: B");
//         break;
//     case score >= 70:
//         console.log("Grade: C");
//         break;
//     case score >= 60:
//         console.log("Grade: D");
//         break;
//     default: 
//         console.log("grade: F")
// }

// //5.Character Class Assignment:

// let strength = 40;
// let intelligence = 45;
// let className = '';

// if(strength > 15 && intelligence <= 10){
//     className = 'Warrior';
// } else if (strength <= 10 && intelligence > 15){
//     className = 'Mage';
// } else if (strength > 10 && intelligence > 10){
//     className = 'Spellsword';
// } else {
//     className = 'Advanturer'
// }

// console.log(className);

//Quiz Time! (Days 1-6)

// 1 - true
// 2 - true
// 3 - false
// 4 - true
// 5 - false
// 6 - false
// 7 - false
// 8 - false
// 9 - false
//10 - true
//11 - true
//12 - true
//13 - c
//14 - d
//15 - d
//16 - c
//17 - c
//18 - b
//19 - c
//20 - c
//21 - parametres
//22 - return
//23 - expresion
//24 - scope
//25 - global
//26 - arguments
//27 - false
//28 - Inside, undefined
//29 - multiply(6, 7)
//30 - (true This won't run) and (false This won't run)
//31 - 2
//32 - 8 undefined
//33 - error

//Easy Exercises

//1. Simple Greeter:

function greet(name){
    console.log(`Hello ${name}`);
}
greet('Gio');
greet('Zurbajana')

//2. Sum Function:

function calculateSum(num1, num2){
    return num1 + num2;
}

let totalSums = calculateSum(3, 4);
console.log(totalSums);

//3. Basic Arrow Function:

let isPositive = (num) => {
    if(num > 0){
        console.log(ture);
    } else {
        console.log(false);
    }
}

//4. Function Call Practice:

function displayInfo(item, price){
    return`${item} costs ${price}`;
}

console.log(displayInfo("coffee", 3));
console.log(displayInfo("book", 15));
console.log(displayInfo("keyboard", 75));

//5. Return Undefined:

function logOnly(message){
    console.log(message);
}

logOnly('some message');
let result = logOnly();
console.log(logOnly());
//Medium Exercises

//6.Check Age:

function canVote(age){
    if(age > 18){
        return "Eligible to vote";
    } else {
        return "Not eligible to vote";
    }
}
canVote();
console.log(canVote(25));
console.log(canVote(16));

//7. Print Numbers with Loop:

function printNumbersUpTo(limit){
    for(let i = 1; i <= limit; i++){
        console.log(i);
    }
}

printNumbersUpTo(6);

//8.Count Down:

let countDownFrom = function(start){
    while(start > 0){
        start--
        console.log(start);
    }
    console.log("Blast Off!");
}

countDownFrom(5);

//9. String Repeater:

function repeatString(text, count){
    let resultString = '';
    for (let i = 1; i <= count; i++){
        resultString += text;
    }
    return resultString;
}

console.log(repeatString('a,b,c', 3));

//10.Simple Calculator:

function calculate(num1, num2, operation){
    if(operation === '+'){
        return num1 + num2;
    } else if (operation === '-'){
        return num1 - num2;
    } else if (operation === '*' && num1 !== 0 && num2 !== 0){
        return num1 * num2;
    } else if (operation === '/' && num1 !== 0 && num2 !== 0){
        return num1 / num2;
    } else {
        return 'null';
    }
}

console.log(calculate(3, 0, '*'));

//Hard:

//11. Number Range Checker:

function isWithinRange(num, lowerBound, upperBound){
    if(num >= lowerBound && num <= upperBound){
        return true;
    } else {
        return false;
    }
}
console.log(isWithinRange(15, 10, 20));

//12.Factorial Calculator:

function calculateFactorial(num){
    if(num === 0){
        return 1;
    } else if (num < 0){
        return null;
    } else {
        let numFact = 1;
        let i = 1;
        while(i <= num){
            numFact = numFact * i;
            i++
        }
        return numFact;
    }
}

console.log(calculateFactorial(5));

//13. Simple Password Validation:

function isPasswordValid(password){
    if(password.length >= 8){
        if(password === 'paroliaigi'){
            return true;
        } else {
            return false;
        }
    }
}

console.log(isPasswordValid('paroliaigi'))

//14. Count Character Occurrences:

function countChar(text, charToCount){
    let occurrances = 0;
    for(let i = 0; i < text.length; i++){
        if(text[i] === charToCount){
            occurrances++;
        }
    }
    return occurrances;
}

console.log(countChar('hello World', 'l'));

//explain me what is text[i], i dont understand it

//15. Sum of Evens in Range:

function sumEvenNumbersInRange(start, end){
    let sum = 0;   
    for(let i = start; i <= end; i++){

        if(i % 2 === 0){
            sum += i;
        }
    }
    return sum;
}
console.log(sumEvenNumbersInRange(1,10));

//EXERCISE LVL GOD:

//16.Comprehensive Number Range Analyzer:

function analyzeNumberRange(startNum, endNum){
    let totalSum = 0
    if(startNum >= endNum){
        console.log("Start number must be less than or equal to end number.")
        return null;
    } else {
        for(let i = startNum; i <= endNum; i++){
            if(i % 2 === 0){
                totalSum += i;
                console.log(`${i} is even`);
            } else {
                totalSum += i;
                console.log(`${i} is odd`);
            }
        }
    }
    return totalSum;
}

console.log(analyzeNumberRange(3, 7));

