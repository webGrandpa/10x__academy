const rollDice = (sides = 6) => {
    let randomDice = Math.floor(Math.random() * sides + 1);
    return randomDice;
}

const simulateDiceRolls = (numberOfRolls = 1, sides = 6) => {
    let sumRolls = 0;
    for(let i = 0; i < numberOfRolls; i++){
        let rollResult = rollDice();
        sumRolls += rollResult;
        console.log(rollResult);
    }
    console.log(sumRolls);
    return sumRolls;
    console.log(sumRolls);
}

console.log(simulateDiceRolls(10));
const displayRollResults = (resultsArray) => {
    let rollArray = [];
    rollArray = rollArray.push(resultsArray);
    return rollArray;
};
console.log(displayRollResults([simulateDiceRolls(10)]));