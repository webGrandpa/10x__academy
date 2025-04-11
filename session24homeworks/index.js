//BMI Calculator
function bmiCalculator(name, weight, height){
    let bmi = weight / (height * height);
    return `${name}'s BMI is ${bmi}`;
}
console.log(bmiCalculator("John", 78, 1.69));
//პირობაში მოცემული ამოხსნის წესი სადაც გვეუბნება რომ შექმენით კონკრეტული
//ადამიანისთვის ცვლადიო არ იყო სწორი გადაწყვეტილება, მაგ შემთხვევაში ჩვენ
//უბრალოდ ყოველი ადამიანის BMI-ს შექმნა მოგვიწევს ვისიც უნდა გამოვთვალოთ,
//ამ ფუნქციის დახმარებით კი ცვლადებით დატვირთვა არ მოგვიწევს კოდის და 
//ნებისმიერი ადამიანის BMI-ს გამოვთვლით უბრალოდ არგუმენტებით.

//BMI Calculator 2
let markMass = 78;
let markHeight = 1.69;
let bmiMark = markMass / (markHeight * markHeight);
let johnMass = 95;
let johnHeight = 1.88;
let bmiJohn = johnMass / (johnHeight * johnHeight);
function whosBmiBigger(bmi1, bmi2){
    if (bmiMark > bmiJohn){
        console.log(`Marks BMI is bigger: ${bmiMark}`)
    } else if (bmiJohn > bmiMark){
        console.log(`Johnss BMI is bigger: ${bmiJohn}`)
    } else {
        console.log(`Both BMI equal\n ${bmiMark} vs ${bmiJohn}`);
    }
}
//შესრულებულია პირობაში მიხედვით

//exercise 3 gymnastics teams
function firstResult(){
    let dolphinsAvarage = (96 + 108 + 89) / 3;
    let koalasAvarage= (88 + 91 + 110) / 3;
    let result = (dolphinsAvarage > koalasAvarage && dolphinsAvarage >= 100) 
    ? "Dolphins are winners" : 
    (dolphinsAvarage < koalasAvarage&& koalasAvarage>= 100) ? "Koalas are winners" 
    :(dolphinsAvarage == koalasAvarage) ? "they both have equal scores"
    :"they dont have anough scores for minimum requirement";
    return result;
}
console.log(firstResult());
//შევეცადე მაქსიმალურად ავტომატიზირებული გამეხადა პროცესი რომ 
// ცალცალკე არ ყოფილიყო შესაყვანი ამათი მონაცემები მაგრამ ჯერ ცოდნა
// არ მყოფნის მაგისთვის

//exercise 4 calculator
function tipValue(bill){
    let tip = Math.floor(bill / 100 * 15);
    let tips = Math.floor(bill / 100 * 20);
    let resultTips = (bill >= 50 && bill <= 300)
        ? `Your bill is: ${bill} tips is: ${tip}. total is ${bill + tip}`
        : (bill < 50 || bill > 300)
            ? `Your bill is: ${bill} tips is: ${tips}. total is ${bill + tips}`
            : `You don't leave the tips`;
    return resultTips;
    
}

console.log(tipValue(275.4));
console.log(tipValue(430));
// ternary operators is added to skills :D
// ავითვისე მგონი :D

//exercise 5 Dynamic Calculator
function calculate(a, b, operator){
    switch(operator) {
        case "+":
            return (a + b);
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return a / b;
        case "%":
            return a % b;
        default:
            return `invalid operator`;
    }
}
console.log(calculate(9, 4, '%'));
console.log(calculate(93928, 394829, '*'))
// switch is added to inventar :D
// ეს დავალებები უფრო მომწონს ვიდრე წინები :D

//exercise 6 
function playGame(player1, player2){
    let result = 
      (player1 == 'rock' && player2 == "scissors")
    ? `player 1:${player1}, player 2:${player2}\n player 1 WINS`
    : (player1 == 'rock' && player2 == 'paper')
    ? `player 1:${player1}, player 2:${player2}\n player 2 WINS`
    : (player1 == 'rock' && player2 == 'rock')
    ? `player 1:${player1}, player 2:${player2}\n ITS A TIE!`
    : (player1 == 'paper' && player2 == 'scissors')
    ? `player 1:${player1}, player 2:${player2}\n player 2 WINS`
    : (player1 == 'paper' && player2 == 'rock')
    ? `player 1:${player1}, player 2:${player2}\n player 1 WINS`
    : (player1 == 'paper' && player2 == 'paper')
    ? `player 1:${player1}, player 2:${player2}\n ITS A TIE!`
    : (player1 == 'scissors' && player2 == 'rock')
    ? `player 1:${player1}, player 2:${player2}\n player 2 WINS`
    : (player1 == 'scissors' && player2 == 'paper')
    ? `player 1:${player1}, player 2:${player2}\n player 1 WINS`
    : (player1 == 'scissors' && player2 == 'scissors')
    ? `player 1:${player1}, player 2:${player2}\n ITS A TIE!`
    : `invalid move`;

    return result;

}

console.log(playGame('scissors', 'rock'));
//EASY
//ბევრად უკეთესი ვერსიები ამიწყვია :D

//exercise 6 Triangle Type Detector

function triangleType(a, b, c) {
    if (a + b > c && a + c > b && b + c > a) {
        if (a === b && b === c) {
            return "Equilateral triangle";
        } else if (a === b || b === c || a === c) {
            return "Isosceles triangle";
        } else {
            return "Scalene triangle";
        }
    } else {
        return "Not a triangle";
    }
}

console.log(triangleType(1, 2, 3));
//ამაზე ვიწვალე :D, 50 ხაზი პირობები მქონდა და მერე გამინათდა გონება :D
//თურმე IFის ასე გამოყენებაც შეიძლებოდა და არ ვიცოდი

//exercise 7 Bank Transaction System

function processTransaction(balance, amount, transactionType){

    let transactionResult = (transactionType === "withdraw" && amount <= balance)
        ? `You have left : ${balance - amount}`
        :(transactionType === "withdraw" && amount > balance)
        ? `Insufficient funds`
        :(transactionType === "deposit")
        ? `Deposit is : ${balance + amount}`
        :`Invalid transaction type`;
    return transactionResult;
    
}
console.log(processTransaction(400, 200, "withdraw"));
console.log(processTransaction(400, 200, "deposit"));
//EASY

//exercise 8 Hotel Room Pricing System
function getRoomPrice(type, isWeekend, hasDiscount) {
    let normalPrice;
  
    if (type === "Standard") {
      normalPrice = isWeekend ? 120 : 100;
    } else if (type === "Deluxe") {
      normalPrice = isWeekend ? 180 : 150;
    } else if (type === "Suite") {
      normalPrice = isWeekend ? 250 : 200;
    } else {
      return "Invalid room type";
    }
  
    if (hasDiscount) {
      normalPrice *= 0.9;
    }
  
    return normalPrice;
  }
  console.log(getRoomPrice("Deluxe", true, true));
// DONE...