//easy

//1
let playerScore = 0;

if(playerScore > 100){
    console.log(`Perfect Score`);
}

//2

let isQuestCompleted = true;

if(isQuestCompleted){
    console.log(`Mission Complited`);
} else {
    console.log(`Mission Active`);
}

//3

for( let i = 1; i <= 5; i++){
    console.log(i);
    
}

//4

let gameStatus = 'pause';

switch(gameStatus){
    case "pause":
        console.log(`Game is paused`);
        break;
    case "start":
        console.log(`Game started`);
        break;
}

//5

let enemyName = "goblin";
console.log(enemyName.toLocaleUpperCase());

//medium

//1

let playerHealth = 100;

if(playerHealth === 100){
    console.log(`Health is Full`); 
} else if(playerHealth < 100 && playerHealth >= 75){
    console.log(`Health is Almost Full`);
} else if(playerHealth < 75 && playerHealth >= 50){
    console.log(`Health is half`);
} else if(playerHealth < 50 && playerHealth >= 10){
    console.log(`Health is critical`);
} else {
    console.log(`DEAD`);
}

//2

let enemyWarn = 0;

while(enemyWarn < 3){
    enemyWarn++;
    console.log(`Enemy Coming!`);   
}

//3

let itemName = "Fire Wrath Sword";

itemName.includes("Fire");

//4



for(let i = 0; i <= 10; i++){
    if(i % 2 === 0){
        console.log(i);
    }
}

//5

let min = 1;
let max = 6;

let randomCube = Math.floor(Math.random() * (max - min + 1) + min);

//hard

//1
minNum = 1;
maxNum = 10;

let guess = 7;
let predict = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum)

if(guess > predict){
    console.log(`Too High`);
} else if (guess < predict){
    console.log(`Too Low`);
} else if (guess === predict){
    console.log(`Congrats!`);
} else {
    console.log(`You Choose Wrong Number\n
        Please Choos Number From 1 To 10`);
}

//2

for( let i = 1; i <= 5; i++){
    if(i === 3){
        console.log(`Attack is missed`);
        continue
    } else if(i === 0 || i === -i || i > 5){
        break;
    } else {
        console.log(`Attack Number: ${i}`);
    }
}

//3

let playerPrompt = '';

while(playerPrompt !== 'exit'){
    playerPrompt = prompt("write 'exit' for exit").toLowerCase().trim();
}

//4 

let playerScores = 95.678;

console.log(playerScores.toFixed(2));
//toFixed(2) returns to string and after dot shows only 2 numbers;

//5

let monsterLoots = Math.floor(Math.random() * 100) + 1;

if(monsterLoots <= 10){
    console.log(`You Got Legendary Loot`);
} else if(monsterLoots > 10 && monsterLoots <= 30){
    console.log(`You Got Rare Loot`);
} else if(monsterLoots > 30 && monsterLoots <= 60){
    console.log(`You Got Normal Loot`);
} else {
    console.log(`You got nothing`);
}


// LVL GOD

//1

let playerLevel = 1;
let currentXP = 0;
let xpToNextLevel = 500;
let minXP = 50;
let maxXP = 150;
while(playerLevel !== 3){
    let randomXP = Math.floor(Math.random() * (maxXP - minXP + 1) + minXP);
    console.log(`Current XP: ${currentXP}
    XP For Next LVL: ${xpToNextLevel - currentXP}`);
    currentXP += randomXP;
    
    while(currentXP >= xpToNextLevel){
        playerLevel++;
        console.log(`Congrats, You Reach LVL: ${playerLevel}`);
        currentXP -= xpToNextLevel;
        xpToNextLevel *= 1.5;
    }
}

//2

let consoleMenu = true;

while(consoleMenu){
    let userMenu = prompt(`Choose menu BTN`);
    userMenu = userMenu.toLowerCase().toString();
    switch(userMenu){
        case "start game":
            console.log("START GAME");
        case "options":
            console.log("OPTIONS");
        case "exit":
            console.log("EXIT");
            consoleMenu = false;
            break;
        default:
            console.log("Write Direction");
    }
}

//3

let diceRollSum1 = 0;
let diceRollSum2 = 0;
let diceRollSum3 = 0;

let minD = 1;
let maxD = 6;


for(let i = 1; i <= 5; i++){
    let randomDice1 = Math.floor(Math.random() * (maxD - minD + 1) + minD);
    let randomDice2 = Math.floor(Math.random() * (maxD - minD + 1) + minD);
    let randomDice3 = Math.floor(Math.random() * (maxD - minD + 1) + minD);
    diceRollSum1 += randomDice1;
    diceRollSum2 += randomDice2;
    diceRollSum3 += randomDice3;
    console.log(`cube 1: ${diceRollSum1}\ncube 2: ${diceRollSum2}\ncube 3: ${diceRollSum3}`);
}

//4

let userPassword = "Password123";

let userPrompt = prompt("type your password")

if(userPrompt >= userPassword.length){
    while(userPrompt !== userPassword){
        userPrompt = prompt("try again")
        if(userPassword === userPrompt){
            console.log("WELCOME");
            break;
        }
    }
}


//5

const resources = "wood, rock, steel, gold";

let wood = 0, rock = 0, steel = 0, gold = 0;

const maxR = 10;
const minR = 1;

for(let i = 1; i <= 10; i++){
    let randomNum = Math.floor(Math.random() * (maxR - minR + 1) + minR);
    let randomResources = Math.floor(Math.random() * 4) + 1;

    if(randomResources === 1){
        wood += randomNum;
        console.log(`wood in stash: ${wood}, found wood: ${randomNum}`);
    } else if(randomResources === 2){
        rock += randomNum;
        console.log(`rock in stash: ${rock}, found rock: ${randomNum}`);
    } else if(randomResources === 3){
        steel += randomNum;
        console.log(`steel in stash: ${steel}, found steel: ${randomNum}`);
    } else {
        gold += randomNum;
        console.log(`gold in stash: ${gold}, found gold: ${randomNum}`);
    }
}