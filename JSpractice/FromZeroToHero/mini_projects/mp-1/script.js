let playerHealth = 100;
let playerGold = 0;
let hasKey = false;

alert("You Wake Up In Dark Room");

let firstChoice = prompt("You See a Two Doors, Wich One You Will Choose?")

//choosing a door

if(firstChoice === "left"){
    let randomBox = Math.floor(Math.random() * 2) + 1;

// random box  :  gold or trap
    if(randomBox === 1){
        console.log("You got 50 gold");
        playerGold += 50;
    }else{
        console.log("You Are In The trap");
        playerHealth -= 10;
    }
// fighting scene
} else if(firstChoice === "right"){
    console.log("you Meet a Enemy Goblin!");
    let goblinHealth = 35;

    while(playerHealth > 0 && goblinHealth > 0){
        console.log(`your health : ${playerHealth} Goblin health ${goblinHealth}`);
        let fightingChoice = prompt("Run or Fight?").toLowerCase().trim();

        if(fightingChoice === "fight"){
            let playerAttack = Math.floor(Math.random() * 15) + 5;
            goblinHealth -= playerAttack;
            console.log(`you make damage :${playerAttack}`);

            if(goblinHealth > 0){
                let goblinAttack = Math.floor(Math.random() * 10) + 1; 
                playerHealth -= goblinAttack;
                console.log(`goblin make damage :${goblinAttack}`);
            }
            
        } else if(fightingChoice === "run"){
            console.log("you run from fight");
            break;
        } else {
            console.log("you lose turn");
        }
    }

    if (playerHealth <= 0){
        console.log("you are looser");
    } else if(goblinHealth <= 0){
        console.log("you defeat goblin, you god 10 gold");
        playerGold += 10;
    }
}

