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

letters[2] = ["c"];

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

for(let i = 0; i <= cities.length; i++){
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

//5.
let symbols = ["a", "b", "c"];
function doesArrayInclude(array, element){
    if (array.includes(element)){
    
    }
}
