//Double the Numbers:

const numArray = [1, 2, 3, 4, 5];

const doubleNum = numArray.map(function(element){
    return element * 2;
});

console.log(doubleNum);

function doubleArray(element){
    return element * 2;
}

const doubleArrayNums = numArray.map(doubleArray);
console.log(doubleArrayNums);

//Convert Numbers to Strings:

const arrayForString = [10, 25, 50];

function stringArray(element){
    return element.toString();
}

const stringingArray = arrayForString.map(stringArray);
console.log(stringingArray);

const arrayToString = arrayForString.map(function(element){
    return element.toString();
})

console.log(arrayToString);

const arrayArrow = arrayForString.map((element) => element.toString());

console.log(arrayArrow);

//Uppercase Names:

const names = ["alice", "bob", "charlie"];

const upperNames = names.map((element) => element.toUpperCase());

console.log(upperNames);

//Extract First Letters:

const fruits = ["Apple", "Banana", "Cherry"];

const firstFromFruit = fruits.map(function(element){
    return element[0];
})
console.log(firstFromFruit);

const firstLetterOfFruits = fruits.map((element) => element[0]);
console.log(firstLetterOfFruits);

//Add Index to Element:

const nums = [10, 20, 30, 40];

function sumOfThem(element, index){
    return element + index;
};

const sumNums = nums.map(sumOfThem);

console.log(sumNums);

const sumOfNums = nums.map((element, index) => element + index);
console.log(sumOfNums)

//Extract Specific Object Property:

const pcProp = [{ id: 1, name: "Laptop" },
                { id: 2, name: "Mouse" },
                { id: 3, name: "Keyboard" }];

const elementOfPc = pcProp.map((element) => element.name);
console.log(elementOfPc);

//Boolean Check (Even/Odd):

const bulNums = [1, 2, 3, 4, 5, 6];

function evenOdd(element){
    if(element % 2 === 0){
        return true;
    } else {
        return false;
    }
}
const evenOrOdd = bulNums.map(evenOdd);
console.log(evenOrOdd);

//Format User Data:

const userInfo = [{ name: "John", age: 30 },
                  { name: "Jane", age: 25 }];

function changeObj(element){
    return `Name: ${element.name}, Age: ${element.age}`;
}
const objToArr = userInfo.map(changeObj);
console.log(objToArr);

//Calculate Square Roots and Handle Errors:

const squareRoot = [4, 9, "text", 16, -5, 25];

function checkRoot(element){
    if(typeof element != "number" || element < 0){
        return NaN;
    }
    return Math.sqrt(element);
}
const checkedArray = squareRoot.map(checkRoot);
console.log(checkedArray);

//Extract Initials from Full Names:

const fullNames = ["Brendan Eich", "Douglas Crockford", "Grace Hopper"];

const initialsFull = fullNames.map((element) => {
    const separateName = element.split(" ");
    return separateName[0][0] + separateName[1][0];
})
console.log(initialsFull);

//Create Objects with Original and Transformed Values:



