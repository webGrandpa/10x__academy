//1. The Sorting Hat (Harry Potter)

const studentNames = ['Harry', 'Hermione', 'Ron', 'Draco'];
const houses = ['Gryffindor', 'Ravenclaw', 'Slytherin', 'Hufflepuff'];

function assignHouse(names) {
  const randomIndex = Math.floor(Math.random() * houses.length);
  return `${names} - ${houses[randomIndex]}`;
}

const sortedStudents = studentNames.map(assignHouse);

console.log(sortedStudents);

//1.1

let numArray = [10, 20, 30, 40, 50];

let mapArray = numArray.map(function(element){
    let randomNum = Math.floor(Math.random() * 11) -5;
    return element + randomNum;
})

console.log(mapArray);

let randomNum = Math.floor(Math.random() * 11) -5;

let newMapArray = numArray
    .map(element => element + randomNum)
    .map(function(element){
        if(element % 2 === 0){
            return Math.random();
        } else {
            return element;
        }
    })
    .map(function(element){
        let randomPlus = Math.floor(Math.random() * 3);
        if(randomPlus === 0){
            return element + 0;
        } else if(randomPlus === 1){
            return element + 100; 
        } else {
            return element - 100;
        }
    })
    .map(function(element){
        const alphabet = 'abcdefghijklmnopqrstuvwxyz';
        let numToString = "" + element; //element.toString()
        if(Math.random() < 0.5){
            const randomIndex = Math.floor(Math.random() * alphabet.length);
            const randomLetter = alphabet[randomIndex];
            element += randomLetter
        }
        return numToString;
    })


//2. The Pokémon Filter

