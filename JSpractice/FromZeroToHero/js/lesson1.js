console.log(`Страница загружена успешно! \nТекущая дата: ${new Date()}`);
// alert("Welcome To JS World!");

const paragraphElement = document.getElementById("myParagraph");

paragraphElement.innerHTML = "Javascript can Change everything";

console.log("text was changed!");

document.title = "Lesson is Finished!";
console.log(`Title is changed`);

let counter = 1;

setInterval(function() {
    console.log(`Number: ${counter}`);
    counter++;

}, 2000);

console.log(`Counter Started, Look at console`);

const now = new Date();
const year = now.getFullYear();
const month = (now.getMonth() + 1);
const day = now.getDate().toString().padStart(2, '0');

const formattedDate = `<span class="math-inline">${year}-${month}-${day}</span>`;
console.log(`Today: ${formattedDate}`);

let countdown = 10;
const timeId = setInterval(function(){
    console.log(countdown);
    countdown--;

    if (countdown < 0) {
        clearInterval(timeId);
        console.log(`Game started`);
    }
    
}, 1000);

console.log(`Countdown Timer Started...`);

const playerName = prompt("Enter Your Name");

if (playerName) {
    console.log(`Welcome ${playerName}`);
} else {
    console.log(`Welcome anonimous player`);
}

const randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(`random number from 1 to 100 ${randomNumber}`);

const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];
const randomIndex = Math.floor(Math.random() * colors.length);
const randomColor = colors[randomIndex];

document.body.style.backgroundColor = randomColor;

console.log(`background color is changed to: ${randomColor}`);

const word = "GAME";

let currentIndex = 0;
let displayedText = '';

const animationId = setInterval(function() {
    if(currentIndex < word.length){
        displayedText += word[currentIndex];
        console.log(displayedText);
        currentIndex++;
    } else {
        clearInterval(animationId);
        console.log(`download finished`);
    }
}, 1000);


