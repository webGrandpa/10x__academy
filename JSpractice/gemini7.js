// //Easy

// //1. Create & Access:

// let planets = ["Mercury", "Venus", "Earth", "Mars"];

// console.log(planets);
// console.log(planets[2]);

// //2. Get Length:

// let oddNumbers = [1, 3, 5, 7, 9];

// console.log(oddNumbers.length);

// //3. Modify Elements:

// let letters = ["a", "b", "d"];

// letters[2] = "c";

// console.log(letters);

// //4.

// let shopingList = [];

// shopingList.push("Milk", "Bread", "Eggs");

// console.log(shopingList);

// //5.

// let tasks = ["Code", "Test", "Deploy", "Review"];

// let removedTask = tasks.pop();

// console.log(removedTask);
// console.log(tasks)

// //Medium

// //1. iterate & Print:

// let cities = ["Tokyo", "London", "Paris", "New York"];

// for(let i = 0; i < cities.length; i++){
//     console.log(cities[i]);
// }

// //2. Sum Array Elements:

// let data =[10, 20, 30, 40, 50];
// let sum = 0;

// for (let i = 0; i < data.length; i++){

//     sum += data[i];
// }

// console.log(sum);

// //3. 

// let line = ["Person A", "Person B", "Person C"];

// let removedPerson = line.shift();

// line.unshift("New Person");

// console.log(line);
// console.log(removedPerson);

// //4.

// let colors = ["red", "green", "blue", "yellow", "green"];

// console.log(colors.indexOf("green"));
// console.log(colors.indexOf("purple"));

// 5.
// let symbols = ["a", "b", "c"];
// function doesArrayInclude(array, element){
//     return array.includes(element);
// }
// console.log(doesArrayInclude(symbols, "b"))

// //Hard

// // 1.Count Positive Numbers:

// function countPositives(numbers){
//     let count = 0;
//     for (let i = 0; i < numbers.length; i++){
//         numbers[i]
//         if (numbers[i] > 0){
//             count++
//         }
//     }
//     return count;
// }
// const testNums = [-1, 0, 1, 5, -3, 10];
// const countTestNums = countPositives(testNums);
// console.log(countTestNums);


// // 2.Find Index of Min:

// let findNums = [50, 30, 100, 20, 40];

// function findIndexOfMin(numbers){
//     let minIndex = 0;
    
//     for (let i = 1; i < numbers.length; i++){
//         if (numbers[i] < numbers[minIndex]){
//             minIndex = i;
//         }
//     }
//     return minIndex;
// }
// console.log(findIndexOfMin(findNums));

// // 2.1 Find Index of Largest:

// function findIndexOfMax(numbers){
//     let maxIndex = 0;
//     for (let i = 1; i < numbers.length; i++){
//         if (numbers[i] > numbers[maxIndex]){
//             maxIndex = i;
//         }
//     }
//     return  maxIndex;
// }
// let exampleArray = [10, 50, 30, 100, 40];

// console.log(findIndexOfMax(exampleArray));

// // 2.2 Count Negative Numbers:

// function countNegatives(numbers){
//     let count = 0;
//     for (i = 1; i < numbers.length; i++){
//         if (numbers[i] < 0){
//             count ++
//         }
//     }
//     return count;
// }

// let testNegative = [4, -3, 2, -1, 3, -4, -5, -1, 0];

// console.log(countNegatives(testNegative));

// // 2.3 Find Firs Even Number:

// function findFirstEven(numbers){
//     for (let i = 0; i < numbers.length; i++){
//         if(numbers[i] % 2 === 0)
//             return numbers[i];
//     }
//     return null;
// }

// let testEven = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(findFirstEven(testEven));

// //2.4 Ged Indices of a Pecific Value:

// function getIndicesOfValue(numbers, target){
//     let indices = [];
//     for (let i = 0; i < numbers.length; i++){
//         if(numbers[i] === target)
//             indices.push(i);
//     }
//     return indices;
// }

// let indicesNum = [5, 4, 3, 7, 3, 9];

// console.log(getIndicesOfValue(indicesNum, 3));


// //2.5 Find Smallest Value Greater Tan X:

// function findMinGreaterThan(numbers, x){
//     for (let i = 0; i < numbers.length; i++){
//         if(numbers[i] > x)
//             return numbers[i];
//     }
// }
// let greaterThanX = [10, 5, 30, 7];

// console.log(findMinGreaterThan(greaterThanX, 11));

// //.


// let animals = ["Lion", "Tiger", "Bear"];


// console.log(animals[2]);

// console.log(animals[animals.length - 1]);

// console.log(animals.length);

// console.log(animals[animals.length - 2]);

// let colors = ["Red", "Green", "Blue"];

// console.log("Before:", colors);

// colors[1] = 'yellow';

// console.log('after:', colors);

// colors[3] = 'purple';

// console.log(colors);

// colors[5] = 'brown';

// console.log(colors);

// colors[4] = 'black';

// console.log(colors);


// let items = ["Book", "Pen"];

// console.log("Before push:", items, "Length:", items.length);

// let newLength = items.push("Eraser", "Pencil", "Notebook");

// console.log("After push:", items, "length", items.length);

// newLength = items.push("Ruler", "Marker", "Desktop", "coffee", "tea");

// console.log("After push:", items, "length", items.length);


// let items = ["Book", "Pen", "Eraser"];
// console.log("Before pop:", items, "Length:", items.length);

// let removedItem = items.pop();

// console.log("after pop:", items, "Length:", items.length);

// let items = ["Book", "Pen"];

// console.log("Before unshift:", items, "Length:", items.length);

// let newLength = items.unshift("pencil", "board", "desktop");

// console.log("After unshift:", items , "Length:", items.length);

// let fruits = ["Apple", "Banana", "Cherry", "Banana"];

// console.log("Array:", fruits);

// let bananaIndex = fruits.indexOf("Banana");

// let cherryIndex = fruits.indexOf("cherry");

// let thirdBanana = fruits.indexOf("Banana", 4);

// console.log(bananaIndex);

// console.log(cherryIndex);

// console.log(thirdBanana);

// let fruits = ["Apple", "Banana", "Cherry"];

// console.log(fruits);

// let hasBanana = fruits.includes("Banana");

// console.log(hasBanana);

// let numbers = [10, 20, 30];

// for (let i = 0; i < numbers.length; i++){
//     console.log(i, numbers[i]);
// }

//Quizers:

// 1 - c
// 2 - b
// 3 - b
// 4 - a
// 5 - c
// 6 - a
// 7 - b
// 8 - a
// 9 - d
//10 - b
//11 - b
//12 - c
//13 - c
//14 - c
//15 - c
//16 - b
//17 - c
//18 - c
//19 - d
//20 - false
//21 - true
//22 - true
//23 - true
//24 - false
//25 - false
//26 - true
//27 - true
//28 - false
//29 - true
//30 - [1, 2, 3]
//31 - ["b", "c"]
//32 - 1
//33 - false
//34 - ["end"]
//35 - ["z"]
//36 - <
//37 - return

//Targeted Practice Exercises

// //1. Return vs. Log:

// function addAndReturn(a, b){
//     return a + b;
// }

// function addAndLog(a, b){
//     console.log(a + b);
// }

// let result1 = addAndReturn(5, 3);

// let result2 = addAndLog(5, 3);

// console.log(result1);
// console.log(result2);

// //2. Comparison Precision (== vs ===):

// // 0 == false - true because its not coercion didnt check the type of objects
// // 0 === false - false because === strictly checking value and type also
// // 1 == "1" - true because value is same 
// // 1 === "1" - false  because value is equal but type is different
// // null == undefined true 
// // null === undefined false
// // "" == false true
// // "" === false false
// // [ ] == false true
// // [ ] === false false

// //3. Default Undefined Return:

// function greet(name){
//     console.log("hello", name, "!");
// }


// let greetingResult = greet("Alice");
// console.log(greetingResult);
// console.log(typeof greetingResult);


// //Standard Exercises (Regenerated for Day 7)

// //1.Create and Access: 

// let favoriteFoods = ["Lobio", "Khinkali", "Shaurma"];

// console.log(favoriteFoods[0], favoriteFoods[2]);

// //2. Get Length:

// let numbers = [5, 10, 15, 20, 25];

// console.log(numbers.length);

// //3. Add to End:

// let tasks = [];

// tasks.push("Wake up");
// tasks.push("Eat breakfast");
// tasks.push("Code");

// console.log(tasks);

// //4. Remove from End:

// let letters = ['a', 'b', 'c', 'd'];

// letters.pop();

// let removedLetter = letters.pop();

// console.log(letters, removedLetter);

// //5. Check Existence: 

// let numbers1 = [2, 4, 6, 8, 10];

// console.log(numbers1.includes(6));
// console.log(numbers1.includes(7));


// //Medium

// //1. Modify Element:

// let colors = ["red", "green", "blue"];

// colors[1] = "yellow";

// console.log(colors);

// //2. Add/Remove from Start:

// let queue = ["Alice", "Bob"];

// queue.unshift("Charlie");

// let deletedPerson = queue.shift();

// console.log(queue, "deleted -", deletedPerson);

// //3. Loop and Print:

// let planets = ["Mercury", "Venus", "Earth", "Mars"];

// for (let i = 0; i < planets.length; i++){
//     console.log(`Planet: ${planets[i]}`);
// }

// //4. Find Index:

// let scores = [88, 92, 75, 92, 80];

// console.log(scores.indexOf(92), scores.indexOf(100));

// //5. Sum of Numbers:

// let nums = [1, 2, 3, 4, 5];

// let sumOfNums = 0;

// for (let i = 0; i < nums.length; i++){
//     sumOfNums += nums[i]
// }

// console.log(sumOfNums);

// //Hard:

// //1. Filter Positives:

// let mixedNumbers = [3, -5, 10, -2, 0, 8, -1];

// let positiveNumbers = [];

// for (let i= 0; i < mixedNumbers.length; i++){
//     if (mixedNumbers[i] > 0){
//         positiveNumbers.push(mixedNumbers[i]);
//     }
// }

// console.log(positiveNumbers);

// //2.Reverse Array (Manual):

// let original = ["a", "b", "c", "d"];

// let reversed = [];

// for (let i = original.length - 1;  i >= 0; i--){
//     reversed.push(original[i]);
// }

// console.log(reversed);

// //3. Count Occurrences:

// const grades = ["A", "B", "C", "B", "A", "A"];

// let counter = 0;

// for (let i = 0; i < grades.length; i++){
//     if (grades[i] === "A"){
//         counter++
//     }
// }

// console.log(counter);

//4. Find First Even Number: 

// const numbers = [1, 3, 5, 8, 9, 10, 13];

// let found = false;

// for (let i = 0; i < numbers.length; i++){
//     if (numbers[i] % 2 === 0){
//         console.log(numbers[i]);
//         found = true;
//         break;
//     }
// }
// if (!found){
//     console.log("No even numbers found");
// }

// //5. Combine and Check

// let arr1 = [1, 2, 3];

// let arr2 = [4, 5, 6];

// let combined = [];

// for (let i = 0; i < arr1.length; i++){
//     combined.push(arr1[i]);
// }
// for (let i = 0; i < arr2.length; i++){
//     combined.push(arr2[i]);
// }

// console.log(combined.includes(3), combined);

// //LVL GOD:

// //1. Inventory Management:

// let inventory = ["Apples", "Oranges", "Apples", "Bananas", "Apples", "Milk"];

// let itemsToRemove = ["Apples", "Milk"];

// let updatedInventory = [];

// let removedCount = 0;

// for (let i = 0; i < inventory.length; i++){
//     if (!itemsToRemove.includes(inventory[i])){
//         updatedInventory.push(inventory[i]);
//     } else {
//         removedCount++;
//     }
// }

// console.log(`Original Inventory: ${inventory}\n
//              Items to Remove: ${itemsToRemove}\n
//              Updated Inventory: ${updatedInventory}\n
//              Total items removed: ${removedCount}`);


// ===========LESSON 8=================
//============Objects==================

let car = {
    make: "toyota",
    model: "Camry",
    year: 2022
};

console.log(car.make);
console.log(car.year);

let user = {
    username: "gemini_learner",
    "user id": 12345,
    isActive: true
  };

console.log(user['username']);
console.log(user["user id"]);

let acces = 'isActive';

console.log(user[acces]);

let dynamicKey = 'user' + ' ' + 'id';

console.log(user[dynamicKey]);


let book = {
    title: "Learning JavaScript",
    author: "Dev Person",
    pages: 300
};

console.log("Original pages:", book.pages);
console.log(`Original Pages: ${book.pages}`);

book.pages = 350;

console.log(book.pages);

book['title'] = "mastering JavaScript";

console.log(book['title']);
console.log(book.title);

let computer = {
    brand: "TechCo",
    ramGB: 16
};

console.log("Before aDDing:", computer);

computer.cpu = "Ultrafast v3";

console.log(computer);

computer["storageType"] = "SSD";
computer["storage space"] = "1TB";

console.log("After adding:", computer);

let gadget = {
    name: "SmartWatch",
    version: 2.0,
    hasGPS: true
  };

  console.log("Before delete:", gadget);
  console.log(`Before delete: ${gadget}`);

delete gadget.version;

console.log("After delete:", gadget);

delete gadget.color;

console.log("color is not a key", gadget);

let rectangle = {
    width: 10,
    height: 5,
    calculateArea: function() {
        return rectangle.width * rectangle.height;
    }
};

console.log(rectangle);
console.log(rectangle.calculateArea());

let circle = {
    radius: 7,
    calculateCircum() {return 2 * 3.14159 * this.radius
    }
};

console.log(circle);
console.log(circle.calculateCircum());

let person = {
    firstName: "Giorgi",
    lastName: "Khiladze",
    age: 31,
    getFullName(){
        return this.firstName + " " +this.lastName;
    },
    canDrive(){
        return this.age >= 18;
    },

    introduce(){
        console.log("Hello, my name is " + this.getFullName() + ".");
        if (this.canDrive()){
            console.log("I'm old enough to drive.");
        } else {
            console.log("I'm not old enough to drive yet.");
        }
    }
};

console.log(person.getFullName());
console.log(person.canDrive());
person.introduce();

let anotherPerson = {
    firstName: "Jane",
    lastName: "Smith",
    age: 16,
    getFullName: person.getFullName,
    canDrive: person.canDrive,
    introduce: person.introduce
};

console.log(anotherPerson.getFullName());
console.log(anotherPerson.canDrive());
anotherPerson.introduce();

let blogPost = {
    title: "Understanding Nested Data",
    author: {
        name: "Chris Coder",
        email: "chris@example.com"
    },
    tags: ["JavaScript", "Objects", "Nesting"],
    Comments: [
        {username: "Learner1", text: "Great explanation!"},
        {username: "DevDude", text: "Very helpful, thanks"}
    ],
    printAuthorCity(){
        console.log("Batumi")
    }
}

console.log(blogPost.author.name);
console.log(blogPost.tags[1]);
console.log(blogPost.Comments[0].username);
console.log(blogPost["author"]["email"]);
console.log(blogPost.Comments[1]["text"]);

blogPost.author.country = "GEORGIA";
console.log(blogPost.author);

blogPost.Comments.push({username: "Newbie", text: "Just starting"});
console.log(blogPost.Comments[2]);


// 1 - c
// 2 - c
// 3 - a
// 4 - c
// 5 - d
// 6 - c
// 7 - c
// 8 - b
// 9 - b
//10 - b
//11 - b
//12 - d
//13 - c
//14 - b
//15 - d
//16 - t
//17 - t
//18 - t
//19 - f
//20 - f
//21 - t
//22 - f
//23 - t
//24 - t
//25 - t
//26 - f
//27 - f
//28 - 26
//29 - 12
//30 - undefined
//31 - hi leo
//32 - 5
//33 - sam
//34 - quotes
//35 - itself
//36 - i dont know
//37 - object


//1 Create Object: 

let movie = {
    title: "string",
    director: "string",
    releeaseYear: 2025
};

console.log(movie);

//2 Access Properties:

console.log(movie.title, movie["releeaseYear"]);

//3 Modify Property:

movie.director = "another string";
console.log(movie.director);
//4 Add Property: 
movie.rating = 8.5;

console.log(movie);
// 5 Delete Property:
movie.country = "USA"
console.log(movie);

delete movie.country
console.log(movie);



























