//Task 1: Basic Counting Loop (For Loop)
function countDownFrom(n) {
    for (let i = n; i > 0; i--) {
        console.log(i);
    }
}
countDownFrom(7);

//Task 2: Iterate Over an Array (For...of Loop)

function printArrayElements(arr){
    for (let fruit of arr) {
        console.log(fruit)
    }
}

printArrayElements(["Apple", "Banana", "Cherry"]);

// task 3: Sum of Numbers (While Loop)

function sumNumbersUpTo(n){
    let calculate = 0;
    while(n > 0){
        calculate += n;
        n--
    }
    return calculate
}

console.log(sumNumbersUpTo(5));

//Task 4: Repeat a String (Do...While Loop)

//4.1

function repeatString(str, n) {
    let result = "";
    let count = 0;
    do{
        result = result + str;
        count = count + 1;
    } while (count < n);
    console.log(result);
}

console.log(`Santa-clous says:, ${repeatString("how", 3)}`);

//4,2

function climbTower(levels) {
    let climb = 0;
    do{
        climb++;
    } while (climb < levels);
    console.log(`You climbed to level: ${climb}`);
}
console.log(climbTower(8));

//4.3

function countDownSpell(n){
    do{
        console.log(n);
        n--;
    } while (n > 0);
}
console.log( countDownSpell(8));

//4.4

function chantMantra(mantra, times) {
    let count = 1;
    do{
        console.log(`${count}: ${mantra}`);
        count++;
    } while(count <= times);
}
console.log(chantMantra("OMG", 6));

//4.5

function chargeEnergy(current, max){
    do{
        console.log(`Energy level: ${current}`);
        current += 10;
    } while(max >= current);
}
console.log(chargeEnergy(10, 100));
//უკედ რომ გამეგო ამდაგვარი დავალებები შევასრულე

//Task 5: Iterate Over Object Properties (For...in Loop):

//5.1

let scroll = {
    spell1: "Fireball",
    spell2: "Invisibility",
    spell3: "Teleportation"
  };

function printObjectKeys(obj){
    for (let key in obj) {
        console.log(key);
    }
}

console.log(printObjectKeys(scroll));

//5.2

let inventory = {
    sword: 2,
    potion: 5,
    shield: 1,
    arrows: 15
  };

function showInventory(inv){
    for(let key in inv){
        console.log(key + ':' + inv[key]);
    }
}

showInventory(inventory);

//5.3

function countLetters(word){
    const letterForCounts = {};
    for (const letter of word){
        if(letterForCounts[letter]){
            letterForCounts[letter]++;
        } else {
            letterForCounts[letter] = 1;
        }
    }
    for (let key in letterForCounts){
        console.log(key + ':' + letterForCounts[key]);
    }
}

countLetters("Hello 10x academy, how you doing?");

//string to aray than object for count letters:vol: 1

function countVawelsAndConsonants(str){
    let vowelsCount = 0;
    let consonantsCount = 0;
    const vowels = "aeiouAEIOU";
    for(const char of str) {
        if(vowels.includes(char)){
            vowelsCount++;
        } else if (char.match(/[a-zA-Z]/i)){
            consonantsCount++;
        }
    }
    return {vowels: vowelsCount, consonants: consonantsCount};
}

console.log(countVawelsAndConsonants("hello javaScriopt, this is very good exercise"));

//string to aray than object for count letters:vol: 2

function countAllCharacters(str){
    let charForCount = {};
    for (const char of str){
        if (charForCount[char]){
            charForCount[char]++
        }else{
            charForCount[char] = 1
        }
        return charForCount
    }
    for (const key in charForCount){
        console.log(key + ":" + charForCount[key]);
    }
}

countAllCharacters("abrakadabra barakuda maraduda");

//Task 1: Filter Odd Numbers (For Loop):

function filterOdd(numbers){
    let oddNums = [];
    for (let i = 0; i < numbers.length; i++){
        if(numbers[i] % 2 !== 0){
            oddNums.push(numbers[i]);
        }
    }
    return oddNums;
}
let numsForFilter = [1, 2, 3, 4, 5];
console.log(filterOdd(numsForFilter));

//1.1
function filterEven(nums){
    let evenNums = [];
    for(let i = 0; i < nums.length; i++){
        if (nums[i] % 2 === 0){
            evenNums.push(nums[i]);
        }
    }
    return evenNums;
}

let filteredNums = [1,2,3,4,5,6,7];

filterEven(filteredNums);

//1.2

function findMax(nums){
    let maxNum = 0;
    for (let i = 0; i < nums.length; i++){
        if(nums[i] > maxNum){
            maxNum = nums[i];
        }
    }
    return maxNum;
}
let findMaxNum = [10, 5, 20, 8, 15];

findMax(findMaxNum);

//1.3

function sumArray(nums){
    let sum = 0;
    for (let i = 0; i < nums.length; i++){
        sum += nums[i];
    }
    return sum;
}

let someArray = [1, 2, 3, 4, 5];

sumArray(someArray);

//1.4

function doubleArray(nums){
    let double = [];
    for (let i = 0; i < nums.length; i++){
        double.push(nums[i] * 2);
    }
    return double;
}

let arayForDub = [1, 2, 3];

doubleArray(arayForDub);

//1.5

function findElement(array, target){
    for (let i = 0; i < array.length; i++){
        if(array[i] === target){
            return true;
        }
    }
    return false;
}

let arrayForCheck = [1, 2, 3, 4, 5];

findElement(arrayForCheck, 3);

//Task 2: Find Maximum Value (For...of Loop)

function findMaxValue(numbers){
    let maxValue = 0;
    for(let i = 0; i < numbers.length; i++){
        if(maxValue < numbers[i]){
            maxValue = numbers[i];
        }
    }
    return maxValue;
}

let arrForMax = [10, 20, 5, 30];
findMaxValue(arrForMax);

//Task 3: Reverse a String;

function reverseString(str) {
    return str.split("").reverse().join("");
  }

let reversed = reverseString("hello");
console.log(reversed);

//task 3: with while loop:

function reverseStrings(str){
    let = revStr= "";
    let i = str.length - 1;
    while(i >= 0){
        revStr += str[i]
        i--
    }
    return revStr;
}

let msgForCoding = "davalebebs vin amowmebs?";

reverseStrings(msgForCoding);

//3.1
function countdown(start){
    while(start > 0){
        start--;
    }
}

countdown(10);

//Task 4: Validate User Input (Do...While Loop)

function getValidInput() {
    let userInput;
    do {
      const inputString = prompt("Guess a number from 1 to 10");
      userInput = parseInt(inputString);
    } while (isNaN(userInput) || userInput < 1 || userInput > 10);
  
    return userInput;
  }
  
  let validNumber = getValidInput();
  console.log("you Guess a right number", validNumber);

 // Task 1: FizzBuzz with a Twist:


function fizzBuzzTwist() {
    for (let i = 1; i <= 50; i++) {
        let output = "";
        if (i % 3 === 0 && i % 5 === 0) {
            output = "FizzBuzz";
        } else if (i % 3 === 0) {
            output = "Fizz";
        } else if (i % 5 === 0) {
            output = "Buzz";
        }
        console.log(i);
    }
}

fizzBuzzTwist();

//Task 2: Nested Loops: Multiplication Table

function printMultiplicationTable(n) {
    for (let i = 1; i <= n; i++){
        for(let j = 1; j <= i; j++){
            console.log(i*j);
        }
    }
}

console.log(printMultiplicationTable(3));

//Task 3: Modify Array While Looping:

function removeDuplicates(arr){
    let saveArr = [];
    for (let i = 0; i < arr.length; i++){
        if(arr[i] !== arr[i - 1]){
            saveArr.push(arr[i]);
        }
    }
    return saveArr;
}

let testArray = [1, 2, 2, 3, 4, 4, 5];

removeDuplicates(testArray);














