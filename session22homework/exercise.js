// 1. Pokémon Battle – Function Basics


function compareAttack(pokemon1, attack1, pokemon2, attack2){
    if(attack1 > attack2){
        console.log(`${pokemon1} wins!\n his attack is ${attack1}`);
    } else if(attack1 < attack2){
        console.log(`${pokemon2} wins!\n his attack is ${attack2}`);
    } else {
        console.log(`It's a tie! they have the same attack power ${pokemon1}: ${attack1}\n ${pokemon2}: ${attack2}`);
    }
}

compareAttack("Pikachu", 55, "Charizard", 50);

//2. Hogwarts Spell Casting – Function Parameters

const castSpell = (spell, wizard) => `${wizard} casted ${spell}`;
console.log(castSpell("Expelliarmus", "Hermione"));

//3. One Piece Bounty Calculator – Return Values

const bauntyForPirate = (name, currentBounty, bounty) => `Revard for ${name}'s head now is ${currentBounty + bounty}  beli`;
        
console.log(bauntyForPirate('Monkey D Luffy', 1500000000, 500000000)),
console.log(bauntyForPirate('Roronoa Zoro', 320000000, 500000000));
console.log(bauntyForPirate('Nami', 66000000, 500000000));
console.log(bauntyForPirate('Usopp', 200000000, 500000000));
console.log(bauntyForPirate('Sanji', 330000000, 500000000));
console.log(bauntyForPirate('Chopper', 100, 500000000));
console.log(bauntyForPirate('Nico Robin', 130000000, 500000000));
console.log(bauntyForPirate('Franky', 94000000, 500000000));
console.log(bauntyForPirate('Brook', 83000000, 500000000));
console.log(bauntyForPirate('Jinbe', 438000000, 500000000));

//4. Jedi Training – Default Parameters

const trainJedi = (name, strength = 50) => `Jedi ${name} has a strength of ${strength}`;
        
console.log(trainJedi('Luke Skywalker', 100));
console.log(trainJedi('Rey', 0));

//5. Gollum’s Precious – String Manipulation

const gollumSays = (phrase) => `${phrase}! ${phrase}! ${phrase}!`;

console.log(gollumSays('My precious'));

//6. Super Mario Power-Up – Function Expressions

let  powerUp = (jumpHeight) => `Mario Jump Pover increased ${jumpHeight * 2}`;
powerUp(5);

//////////////////////////////////////////
// აქამდე ეროუ ფუნქცია არ უნდა დამეწერა? :D
// ვიცი ისე ფუნქციის წერაც, არ გადამასწორებინო ფლს
//function powerUp(jumpHeight){
//    return `Mario Jump Pover increased ${jumpHeight * 2}`;
//}
//powerUp(5);
// აჰა :D
//////////////////////////////////////////

// 7. Naruto’s Shadow Clone Jutsu – Arrow Functions

let shadowClone = (count) => `Naruto can Use Shadow Clone ${count * 5} times`;

shadowClone(10);

//8. Sorting the Sorting Hat – Callback Functions

function Fraction(){
    const randomFraction = Math.floor(Math.random() * 4);

    if (randomFraction === 0){
        return "Gryffindor";
    } else if(randomFraction === 1){
        return "Hufflepuff";
    } else if(randomFraction === 2){
        return "Ravenclaw";
    } else {
    return "Slytherin";
    }

}

const separateStudents = (name) =>`${name} is in ${Fraction()}`;

console.log(separateStudents("Harry Potter", Fraction));


// რენდომაიზერში მასივის შემოტანითაც შეიძლება გაკეთდეს
// მაგალითად ასე:
// const fractions = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];
// const randomFraction = Math.floor(Math.random() * fractions.length);
// return fractions[randomFraction];
// მაგრამ მასივები ჯერ არ გაგვივლია :D

//9. Infinity Gauntlet – Function Scope


function snapFingers(){
    let stones = 6
    function checkStones(){
        if(stones === 6){
            console.log("Thanos has 6 stones. The universe trembles!");
        } else {
            console.log("Some stones are missing");
        }
    }
    checkStones();
}

snapFingers();


//10.Time-Turner – Function Hoisting
turnBackTime();


function turnBackTime(){
    console.log("I'm turning back time!");
}

//11. Batman’s Secret Identity – Function Closures

function batMan(){
    function secretIdentity(){
        console.log(`I'm Batman!`);
    }
    return secretIdentity;
    
}
let bruceWayne = batMan();

bruceWayne();


//12. The Enchanted Mirror – Higher-Order Functions

function editText(message) {
    return message.toUpperCase();
}

function magicMirror(message, transformFunction) {
    const transformedMessage = transformFunction(message);
    return `The mirror says: ${transformedMessage}`;
}


console.log(magicMirror("Will I be rich?", editText));


