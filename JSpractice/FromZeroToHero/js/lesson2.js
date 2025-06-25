// let playerName = "itadori";
// console.log(playerName);


// let GAME_VERSION = "1.0.0";
// console.log(GAME_VERSION);

// let score1 = 150;
// let score2 = 230;

// console.log(score1 + score2);

// let isGameOver = false;
// console.log(typeof isGameOver);


// let gameTitle = "Adventure Quest";
// let levelNumber = 5;

// console.log(`now you playing a game ${gameTitle} you are on LVL ${levelNumber}`);

// //MEDIUM

// let playerHealth = 100;
// playerHealth -= 25;

// console.log(playerHealth);

// let itemPrice = 12.5;
// let quantity = 4;
// let totalCost = itemPrice * quantity;

// console.log(`whole price is ${totalCost} coins`);


// let number = 17;
// let isEven = number % 2 === 0;
// console.log(`number ${number} even/odd: ${isEven}`);


// let password = "mySecret123";
// let confirmPassword = "Mysecret123";
// let passwordsMatch = password === confirmPassword;

// console.log(`password matches: ${passwordsMatch}`);


// let levelName = null;
// console.log(`starting score levelname: ${levelName} type: ${typeof levelName}`);

// levelName = 'Forest Level';
// console.log(`new score levelname: ${levelName} type: ${typeof levelName}`);


//HARD

// const userName = prompt("what is your name?");

// const userAgeString = prompt('how old are you?');

// const userAge = Number(userAgeString);

// if(!isNaN(userAge)){
//     console.log(`hello, ${userName} your age is ${userAge}, after 5 years you will be ${userAge + 5}.`);
// } else {
//     console.log("you write a incorrect age");
// }

// let attackPower = 150;
// let enemyDefense = 40;
// let criticalHitChance = Math.floor(Math.random() * 100) - 1;

// let effectiveAttack = (attackPower * criticalHitChance) - enemyDefense;

// console.log(`effective attack power is ${effectiveAttack}`);


// console.log(`10 == '10': ${10 == '10'}`);
// console.log(`'true' == true: ${'true' == true}`);
// console.log(`0 == false: ${0 == false}`);
// console.log(`null == undefined: ${null == undefined}`);
// console.log(`null === undefined: ${null === undefined}`);


// let resourceCount = 5;
// console.log(`Начальное количество ресурсов: ${resourceCount}`);

// let firstOutput = ++resourceCount;
// console.log(`После префиксного инкремента (++resourceCount): ${firstOutput}`);
// console.log(`Текущее resourceCount: ${resourceCount}`);

// let secondOutput = resourceCount--;
// console.log(`После постфиксного декремента (resourceCount--): ${secondOutput}`);
// console.log(`Текущее resourceCount: ${resourceCount}`);


// let playerAgility = 80;
// let enemyAttackAccuracy = 75;

// let dodgeStatus = (playerAgility > enemyAttackAccuracy) ? "Dodge" : "Attack success";
// console.log(dodgeStatus);


// let playerAgility2 = 62;
// let dodgeStatus2 = (playerAgility > enemyAttackAccuracy) ? "Dodge" : "Attack success"
// console.log(dodgeStatus2);


let playerAttack = 50;
let enemyDefense = 15;

const DAMAGE_MULTIPLIER = 1.5;
const CRIT_CHANCE = Math.floor(Math.random() * 100) - 1;

if (CRIT_CHANCE >= 30){
    console.log(`its crit damage - ${(playerAttack * DAMAGE_MULTIPLIER) - enemyDefense}`);
} else {
    console.log(`its base damage - ${playerAttack - enemyDefense}`);
}

/* what is toFixed(2)?? in feedback write that to the next lesson you have to 
give me explanation about this kind of methods */


let slot1 = "sword";
let slot2 = "shield";
let slot3 = null;

let displayslot1 = slot1 ?? "empty";
let displayslot2 = slot2 ?? "empty";
let displayslot3 = slot3 ?? "empty";

console.log(`slot 1: ${displayslot1}`);
console.log(`slot 2: ${displayslot2}`);
console.log(`slot 3: ${displayslot3}`);



console.log(`NPC: Hello stranger! What is your Name?`);
const playerName = prompt('Enter your Name');
const playerAnswer = playerName || "Incognito Player";

console.log(`NPC: Nice to meet you ${playerAnswer}, i have a mission for you!`);
const playerMission = prompt(`are you ready for Adventure? (yes/no)`).toLocaleLowerCase();

const nextMove = (playerMission === "yes") ? "Excelent! Good Luck!" : "its too sad!, i will wait for you";
console.log(nextMove);

let progress = 0;
const totalSteps = 10;
const intervalTime = 1000;

console.log(`start loading`);

const loadingInterval = setInterval(() => {
    if (progress <= totalSteps) {
        let progressBar = "[";
        for (let i = 0; i < progress; i++) {
            progressBar += "#";
        }
        for(let i = progress; i < totalSteps; i++){
            progressBar += " ";
        }
        progressBar += "]";
        console.log(progressBar);
        progress++;
    }else{
        clearInterval(loadingInterval);
        console.log(`Loading Finished`);
    }
}, intervalTime);

let maxHealth = 100;
let currentHealth = 75;
let attackDamage = 20;

console.log(`Игрок получает ${attackDamage} урона!`);
currentHealth -= attackDamage; // Уменьшаем здоровье

// Убедимся, что здоровье не опускается ниже 0
currentHealth = Math.max(0, currentHealth);

let message;
// Используем тернарный оператор для условия
message = (currentHealth <= 0) ? "Игрок повержен!" : `Текущее здоровье игрока: ${currentHealth}.`;
console.log(message);

// Дополнительный пример, чтобы показать поражение
console.log("\n--- Следующий раунд атаки ---");
currentHealth = 15; // Устанавливаем низкое здоровье для следующей атаки
attackDamage = 20;

console.log(`Игрок получает ${attackDamage} урона!`);
currentHealth -= attackDamage;
currentHealth = Math.max(0, currentHealth);

message = (currentHealth <= 0) ? "Игрок повержен!" : `Текущее здоровье игрока: ${currentHealth}.`;
console.log(message); // Выведет: Игрок повержен!


// <!DOCTYPE html>
// <html lang="ru">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Статус Игрока</title>
// </head>
// <body>
//     <h1>Статус Игрока в Консоли</h1>
//     <p>Откройте консоль разработчика (F12 или Ctrl+Shift+I) чтобы увидеть статус игрока.</p>
//     <script src="script.js"></script>
// </body>
// </html>


// --- Переменные Статуса Игрока ---

// Имя игрока (тип String)
let playerName = "Ариадна";

// Текущий уровень игрока (тип Number)
let playerLevel = 1;

// Текущее здоровье игрока (тип Number)
let playerHealth = 85;

// Максимальное здоровье игрока (тип Number)
const playerMaxHealth = 100;

// Текущий опыт игрока (тип Number)
let playerXP = 320;

// Опыт, необходимый для следующего уровня (тип Number)
const xpToNextLevel = 500;

// Количество золота у игрока (тип Number)
let playerGold = 250;

// Есть ли у игрока меч (тип Boolean)
let hasSword = true;

// Слоты инвентаря (тип String или null)
let inventorySlot1 = "Зелье Здоровья";
let inventorySlot2 = "Камень Маны";
let inventorySlot3 = null; // Пустой слот


// --- Вывод Информации о Статусе Игрока в Консоль ---

console.log("--- Статус Игрока ---");

// Вывод имени игрока
console.log(`Имя: ${playerName}`);

// Вывод уровня и опыта
console.log(`Уровень: ${playerLevel} (XP: ${playerXP}/${xpToNextLevel})`);

// Вывод здоровья
console.log(`Здоровье: ${playerHealth}/${playerMaxHealth}`);

// Вывод золота
console.log(`Золото: ${playerGold} монет`);

// Вывод информации о наличии меча
console.log(`Имеет меч: ${hasSword}`);

// Вывод инвентаря с использованием тернарного оператора для пустых слотов
console.log("Инвентарь:");
console.log(`  Слот 1: ${inventorySlot1 ?? "Пусто"}`);
console.log(`  Слот 2: ${inventorySlot2 ?? "Пусто"}`);
console.log(`  Слот 3: ${inventorySlot3 ?? "Пусто"}`);

// --- Вычисление и вывод дополнительной информации ---

// Вычисление процента здоровья игрока
// Используем toFixed(2) для округления до двух знаков после запятой
let healthPercentage = (playerHealth / playerMaxHealth) * 100;
console.log(`Здоровье: ${healthPercentage.toFixed(2)}%`);

// Вычисление необходимого золота для покупки 5 зелий по 15 золота каждое
const potionPrice = 15;
const potionsToBuy = 5;
let neededGoldForPotions = potionPrice * potionsToBuy;
console.log(`Для ${potionsToBuy} зелий нужно: ${neededGoldForPotions} золота.`);

// Пример использования оператора присваивания
playerGold += 100; // Игрок нашел 100 золота
console.log(`Золото после находки: ${playerGold} монет`);

// Пример использования унарного оператора
playerLevel++; // Игрок получил новый уровень
console.log(`Новый уровень игрока: ${playerLevel}`);

// Пример изменения типа данных
let initialScore = "200"; // Это строка
let bonus = 50;
let totalGameScore = Number(initialScore) + bonus; // Явно преобразуем в число
console.log(`Общий игровой счет (после преобразования): ${totalGameScore}`);















