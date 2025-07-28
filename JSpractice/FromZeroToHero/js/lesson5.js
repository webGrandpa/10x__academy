//easy
//1

const { act } = require("react");

const inventory = ["sword", "shield", "potion"];
console.log(inventory);

//2

const firstItem = inventory[0];
console.log(firstItem);

//3

inventory[3] = "arrow";
console.log(inventory);

//4

const removedItem = inventory.pop();
console.log(removedItem);

//5

const enemies = ["Goblin", "Troll", "Orc", "Scelet"];
const enemyCount = enemies.length;
console.log(enemyCount);

//medium
//1

const npcHealths = [100, 75, 120, 50];

npcHealths[1] += 25;

console.log(npcHealths);

//2

const spellQueue = ["fire ball", "frost arrow"];

spellQueue.unshift("healing");

console.log(spellQueue);

const castSpell = spellQueue.shift();

console.log(castSpell);
console.log(spellQueue);

//3

console.log(inventory.indexOf("potion"));

console.log(inventory.includes("arrow"));

//4

const gameLogEvents = ["player enter", "finded 10 coins", "meeted enemy", "victory in battle"];

const fullLog = gameLogEvents.join("|");

console.log(fullLog);

//5

const startingGear = inventory.slice(0, 2);
console.log(startingGear);

//hard

//1

const activeBuffs = ["power", "agility", "defence"];

activeBuffs.splice(1, 0, "speed");

console.log(activeBuffs);

activeBuffs.splice(2, 1);

console.log(activeBuffs);

activeBuffs.splice(2, 1, "regeneration");

console.log(activeBuffs);

//2

const forestEnemies = ["wolf", "bear"];

const caveEnemies = ["goblin", "spider"];

const mountainEnemies = ["orc", "dragon"];

const allEnemies = forestEnemies.concat(caveEnemies, mountainEnemies);

console.log(allEnemies);

//3

const mixedData = ["sword", 100, true, "shield", 50, null, 75];

const numbersOnly = [];

for(let i = 0; i < mixedData.length; i++){
    if(typeof mixedData[i] === "number"){
        numbersOnly.push(mixedData[i]);
    }
    console.log(numbersOnly);
}

//4

const playerInventory = ["sword", "healing potion", "shield", "mana potion", "healing potion"];

let potionCount = 0;

for(let item of playerInventory){
    if(item.includes("potion")){
        potionCount++;
    }
}
console.log(potionCount);

//5
const npcQueue = ["npc1", "npc2", "npc3"];

npcQueue.unshift("npc4");

const popedNPC = npcQueue.pop();

npcQueue.unshift("npc5");

//Level God

//1






















