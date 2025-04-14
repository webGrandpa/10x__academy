//Easy

//1. Create & Access:

let planets = ["Mercury", "Venus", "Earth", "Mars"];

console.log(planets);
console.log(planets[2]);

//2. Get Length:

let oddNumbers = [1, 3, 5, 7, 9];

console.log(oddNumbers.length);

//3. Modify Elements:

let letters = ["a", "b", "d"];

letters[2] = "c";

console.log(letters);

//4.

let shopingList = [];

shopingList.push("Milk", "Bread", "Eggs");

console.log(shopingList);

//5.

let tasks = ["Code", "Test", "Deploy", "Review"];

let removedTask = tasks.pop();

console.log(removedTask);
console.log(tasks)

//Medium

//1. iterate & Print:

let cities = ["Tokyo", "London", "Paris", "New York"];

for(let i = 0; i < cities.length; i++){
    console.log(cities[i]);
}

//2. Sum Array Elements:

let data =[10, 20, 30, 40, 50];
let sum = 0;

for (let i = 0; i < data.length; i++){

    sum += data[i];
}

console.log(sum);

//3. 

let line = ["Person A", "Person B", "Person C"];

let removedPerson = line.shift();

line.unshift("New Person");

console.log(line);
console.log(removedPerson);

//4.

let colors = ["red", "green", "blue", "yellow", "green"];

console.log(colors.indexOf("green"));
console.log(colors.indexOf("purple"));

5.
let symbols = ["a", "b", "c"];
function doesArrayInclude(array, element){
    return array.includes(element);
}
console.log(doesArrayInclude(symbols, "b"))

//Hard

// 1.Count Positive Numbers:

function countPositives(numbers){
    let count = 0;
    for (let i = 0; i < numbers.length; i++){
        numbers[i]
        if (numbers[i] > 0){
            count++
        }
    }
    return count;
}
const testNums = [-1, 0, 1, 5, -3, 10];
const countTestNums = countPositives(testNums);
console.log(countTestNums);


// 2.Find Index of Min:

let findNums = [50, 30, 100, 20, 40];

function findIndexOfMin(numbers){
    let minIndex = 0;
    
    for (let i = 1; i < numbers.length; i++){
        if (numbers[i] < numbers[minIndex]){
            minIndex = i;
        }
    }
    return minIndex;
}
console.log(findIndexOfMin(findNums));

// 2.1 Find Index of Largest:

function findIndexOfMax(numbers){
    let maxIndex = 0;
    for (let i = 1; i < numbers.length; i++){
        if (numbers[i] > numbers[maxIndex]){
            maxIndex = i;
        }
    }
    return  maxIndex;
}
let exampleArray = [10, 50, 30, 100, 40];

console.log(findIndexOfMax(exampleArray));

// 2.2 Count Negative Numbers:

function countNegatives(numbers){
    let count = 0;
    for (i = 1; i < numbers.length; i++){
        if (numbers[i] < 0){
            count ++
        }
    }
    return count;
}

let testNegative = [4, -3, 2, -1, 3, -4, -5, -1, 0];

console.log(countNegatives(testNegative));

// 2.3 Find Firs Even Number:

function findFirstEven(numbers){
    for (let i = 0; i < numbers.length; i++){
        if(numbers[i] % 2 === 0)
            return numbers[i];
    }
    return null;
}

let testEven = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(findFirstEven(testEven));

//2.4 Ged Indices of a Pecific Value:

function getIndicesOfValue(numbers, target){
    let indices = [];
    for (let i = 0; i < numbers.length; i++){
        if(numbers[i] === target)
            indices.push(i);
    }
    return indices;
}

let indicesNum = [5, 4, 3, 7, 3, 9];

console.log(getIndicesOfValue(indicesNum, 3));


//2.5 Find Smallest Value Greater Tan X:

function findMinGreaterThan(numbers, x){
    for (let i = 0; i < numbers.length; i++){
        if(numbers[i] > x)
            return numbers[i];
    }
}
let greaterThanX = [10, 5, 30, 7];

console.log(findMinGreaterThan(greaterThanX, 11));

