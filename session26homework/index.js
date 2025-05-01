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


//2. The Pokémon Filter:
const pokemonInfo = [ {name: 'Pikachu', CP: 320}, {name: 'Charizard', CP: 900} ];

function cpFilter(pokemon) {
    return pokemon.CP > 500;
}

const filteredPokemons = pokemonInfo.filter(cpFilter);

console.log(filteredPokemons);

//2.1 with if else
const pokFilter = [];

for(let i = 0; i < pokemonInfo.length; i++){
    const pokemon = pokemonInfo[i];
    if(pokemon.CP > 500){
        pokFilter.push(pokemon);
    }
}


//3. Avengers Assemble (Reduce)

const avangers = [ {hero: 'Iron Man', budget: 5000}, {hero: 'Hulk', budget: 2000} ];

const totalPower = avangers.reduce((acc, curr) => acc + curr.budget, 0);
console.log(totalPower);

//3.1
const nums = [5, 10, 15, 20, 25];

const sumNums = nums.reduce((acc, curr) => curr + acc);
console.log(sumNums);

//4. The Lost Treasure Map

const direction = ['left', 'right', 'forward'];

const editDirection = direction.map((element) => "Move " + element);

console.log(editDirection);

//5. The Jedi Archives

const jediNames = ['Luke', 'Obi-Wan', 'Yoda', 'Anakin'];

const findYoda = jediNames.find(jedi => jedi === 'Yoda');
console.log(findYoda ? 'Master found!' : 'Master not found!');

//6. The One Ring Inventory

let frodosInventory = [];

frodosInventory.push("The One Ring", "Sting", "Travel Provisions", "Money", "Pipe-weed");
console.log(frodosInventory);
frodosInventory.pop();
console.log(frodosInventory);
frodosInventory.pop();
console.log(frodosInventory);

//7. Spider-Man’s Web of Crime

function sortCrimeLocations(crimeLocations) {
    crimeLocations.sort(); 
    return crimeLocations;
  }

  const crimeLocations = ['Times Square', 'Central Park', 'Brooklyn', 'Wall Street',
                          'Harlem', 'Lower Manhattan', 'Upper East Side'];

console.log(sortCrimeLocations(crimeLocations));

//8. The Time Stone (Array Slicing)

const occurrences = [ 'Dormammu Attack', 'Multiverse Glitch',
     'Ancient One’s Warning', 'Time Loop', 'Portal Opening' ]


const revisitOccurrences = occurrences.slice(-3);
console.log(revisitOccurrences);

//9. Matrix Reloaded: Data Processing

const numToBinary = [3, 7, 15, 22];

function matrixProc(array){

const binaryNum = array.map((element) => element.toString(2));

const highestValue = array.reduce((acc, curr) => {
    return Math.max(acc, curr);
  }, array[0]);

    return `Binary : ${binaryNum} , Higest: ${highestValue}`;
}

console.log(matrixProc(numToBinary));

//10. Cyberpunk City Data Processing

const riskLevel = [99, 135, 76, 200, 150, 89];

function checkRisk(array) {
    const useMap = array.map((element) => element.toString(16).toUpperCase());
    const useFilter = array.filter((element) => element > 100);
    const useReduce = array.reduce((acc, curr) => acc + curr, 0);
    const useFind = array.find(risk => risk >= 150);
    const copyArray = [...array];
    const useSplice = copyArray.splice(2, 1);
    return {
        Hexadecimal: useMap,
        "High risk LVL": useFilter,
        "Total risk": useReduce,
        "First risk >=150": useFind,
        "Corrupt data": useSplice
    };
}

const results = checkRisk(riskLevel);
console.log(results);