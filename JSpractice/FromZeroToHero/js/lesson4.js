//easy

//1

function startGame(){
    return "Game is Started";
}

console.log(startGame());

//2

function showPlayerHealth(health){
    return`Current Player Health : ${health}`;
}

console.log(showPlayerHealth(100));

//3

function add(num1, num2){
    return num1 + num2;
}

console.log(add(2, 2));

//4

const logGameOver = () => "Game Over!"

console.log(logGameOver());

//5

const getPlayerName = (defaultName = "incognito Player") => defaultName;

console.log(getPlayerName());

//medium

//1

const checkLevelUp = (currentXP, xpToNextLevel) => {
    if(currentXP >= xpToNextLevel){
        return true;
    } else {
        return false;
    }
}

console.log(checkLevelUp(10, 11));

//2

const displayInventory = (item1, item2, item3) => {
    return `item 1 :${item1}\nitem 2 :${item2}\nitem 3 :${item3}`
}

console.log(displayInventory("sword", "shield", "potion"));

//3

const getEnemyType = type => {
    if(type === 1){
        return "Goblin"
    } else if(type === 2){
        return "Orc"
    } else if(type === 3){
        return "Dragon"
    } else {
        return "write level from 1 to 3"
    }
}

console.log(getEnemyType(3));

//4

const calculateAttackDamage = (baseDamage, critChance) => {
    let critRandomChance = Math.floor(Math.random() * 100) + 1;

    if(critRandomChance <= 20){
        return critChance
    } else {
        return baseDamage
    }
}

console.log(calculateAttackDamage(2, 4));

//5

const logActivity = (message, time = new Date().toLocaleTimeString()) => {
    return `${message} time : ${time}`;
}

console.log(logActivity("what time now?"));

//hard

//1
const processCommand = (command, ...args) => {
    switch(command){
        case "move":
            return `player moves to ${args[0]}`;
        case "attack":
            return `player attacking ${args[1]} with ${args[2]}`;
        case "use":
            return `player uses ${args[3] || "unknown item"} to ${args[4] || "unknown target"}`
        case "exit":
            return "Exiting game";
    }
}

console.log(processCommand("move", "to boulvard"));

//2

const checkLogin = (username, password) => {
    if(username === "admin" && password === "123"){
        return "Acces granted";
    } else {
        return "Acces Denied";
    }
}

console.log(checkLogin("admin", "123"));

//3

const formatPlayerName = (name, prefix = "Hero") => {
    if(name === ""){
        return `Unknown ${prefix}`;
    } else {
        return `${name} ${prefix}`
    }
}

console.log(formatPlayerName("niko"));


//4

const getDistance = (x1, y1, x2, y2) => {
    return Math.sqrt((x2 - x1)**2 + (y2 - y1)**2).toFixed(2);
}

console.log(getDistance(2, 3, 4, 5));

//5

const drawHealthBar = (currentHealth, maxHealth) => {
    const barLength = 10;
    const filledChars = Math.round((currentHealth / maxHealth) * barLength);
    const emptyChars = barLength - filledChars;

    const filledPart = "#".repeat(filledChars);
    const emptyPart = " ".repeat(emptyChars);

    const percentage = ((currentHealth / maxHealth) * 100).toFixed(0);

    return `[<span class="math-inline">\{filledPart\}</span>{emptyPart}] <span class="math-inline">\{currentHealth\}/</span>{maxHealth} (${percentage}%)`;
};
console.log(drawHealthBar(70, 100));
console.log(drawHealthBar(30, 100));

//level god

//1

let playerLevel = 1;
let currentXP = 0;
let xpToNextLevel = 500;
let minXP = 50;
let maxXP = 150;
while(playerLevel !== 5){
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

let playerHealth = 100;
let playerAttack = 50;
let playerDefense = 5;
let monsterHealth = 20;
let monsterAttack = 10;
let monsterDefense = 10;

const calculateDamage = (attackerAttack, defenderDefence) => {
    let damage = attackerAttack - defenderDefence;
    return damage;
}

const isCriticalHit = chance => {
    chance = Math.floor(Math.random() * 100) + 1;
    if(chance < 20){
        return attackerAttack *= 2;
    } else {
        return attackerAttack;
    }
}

const aplyDamage = (targetHealth, damage) => {
    targetHealth -= damage
    return targetHealth;
}

const logBattleEvent = message => {
    message += `fight is started`
}

const simulateAdvancedBattle = (playerHealth, playerAttack, 
    playerDefense, monsterHealth, monsterAttack, monsterDefense,
     playerCritChance) => {
        while(playerHealth > 0 && monsterHealth > 0){
            calculateDamage(playerAttack ,  monsterDefense);
            calculateDamage(monsterAttack, playerDefense);

        }
     }

//3


const displayShopItems = (itemsArray) => {

}

//4

let playerStats = {
    health : 100,
    attack : 50,
    defense : 10
}

const generateWeather = () => {
    let weatherRandom = Math.floor(Math.random() * 4) + 1;
    if(weatherRandom === 1){
        return "sunny";
    } else if(weatherRandom === 2){
        return "rain";
    } else if (weatherRandom === 3){
        return "fog";
    } else {
        return "thunder";
    }
}

const applyWeatherEffect = (weather, player) => {
    if(weather === "sunny"){
        player.health += 5;
    } else if(weather === "rain"){
        player.attack -= 5;
    } else if(weather === "fog"){
        player.defense -= 5;
    } else if(weather === "thunder"){
        player.health -= 20;
    }
    return player;
}

const simulateDay = (dayNumber, player) => {
    for (let i = 1; i <= 5; i++){
        console.log(`Today is ${dayNumber} and player effect is ${player}`);
    }
}


// 5



// debugging

//1
function calculateArea(length, width) {
    let area = length * width;
    console.log(area);
}

//2
function getGreeting(name) {
    return "Hello, " + name;
}
let message = getGreeting("World");
console.log("Полученное сообщение: " + message);

//3 
const sum = (a, b) => a + b;
console.log(sum(5, 3));

//4

function applyBuff(playerHealth, buffAmount) {
    playerHealth += buffAmount || 10;
    return playerHealth;
}
console.log(applyBuff(50, 20));

//5

function logStats(name, type, ...values) { 
    console.log(name, type, values);
}
logStats("Player", 100, 50, "Health");

//6

const sayHello = function() {
    console.log("Hello!");
};

sayHello();

//7

function checkScore(score) {
    if (score > 100) {
        console.log("Этот текст никогда не будет виден");
        return "Высший балл!";
    }
    return "Хороший балл.";
}
console.log(checkScore(150));

//8
for (let i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(i);
    }, 100);
}

//9

function canEnter(age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}
console.log(canEnter(17));


//10

function greet(name) {
    console.log("Привет, " + name);
}
greet("Аня");
greet("Петя");





























