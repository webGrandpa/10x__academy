//Task 1: Basic Counting Loop (For Loop)
function countDownFrom(n) {
    for (let i = n; i > 0; i--) {
        console.log(i);
    }
}
countDownFrom(7);

//Task 2: Iterate Over an Array (For...of Loop)

function printArrayElements(arr){
    for (let fruit of arr) {
        console.log(fruit)
    }
}

printArrayElements(["Apple", "Banana", "Cherry"]);

// task 3: Sum of Numbers (While Loop)

function sumNumbersUpTo(n){
    let calculate = 0;
    while(n > 0){
        calculate += n;
        n--
    }
    return calculate
}

console.log(sumNumbersUpTo(5));

//Task 4: Repeat a String (Do...While Loop)

//4.1

function repeatString(str, n) {
    let result = "";
    let count = 0;
    do{
        result = result + str;
        count = count + 1;
    } while (count < n);
    console.log(result);
}

console.log(`Santa-clous says:, ${repeatString("how", 3)}`);

//4,2

function climbTower(levels) {
    let climb = 0;
    do{
        climb++;
    } while (climb < levels);
    console.log(`You climbed to level: ${climb}`);
}
console.log(climbTower(8));

//4.3

function countDownSpell(n){
    do{
        console.log(n);
        n--;
    } while (n > 0);
}
console.log( countDownSpell(8));

//4.4

function chantMantra(mantra, times) {
    let count = 1;
    do{
        console.log(`${count}: ${mantra}`);
        count++;
    } while(count <= times);
}
console.log(chantMantra("OMG", 6));

//4.5

function chargeEnergy(current, max){
    do{
        console.log(`Energy level: ${current}`);
        current += 10;
    } while(max >= current);
}
console.log(chargeEnergy(10, 100));
//უკედ რომ გამეგო ამდაგვარი დავალებები შევასრულე

//Task 5: Iterate Over Object Properties (For...in Loop):

function printObjectKeys(obj){
    
}














