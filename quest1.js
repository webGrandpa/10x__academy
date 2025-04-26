// Quest 1 – Initialize Node Identity
//  Difficulty: Easy (2 pts)
// Story
//  After the Grid reboot, your intern profile has no identity. You must re-declare your node identity to rejoin Neosector 404.
// Objective
//  Set up your network and intern variables, then print a welcome message.
// Instructions
// Name your file quest1.js
// Create a constant called networkName and assign it the text Neosector404
// Create a variable called internName and assign it the text Gridbreaker
// Print the exact sentence
//  Welcome, Gridbreaker, to Neosector404!
// Acceptance Criteria
// networkName is defined as a constant with value Neosector404
// internName is defined as a variable with value Gridbreaker
// The console shows exactly:
//  Welcome, Gridbreaker, to Neosector404!

const networkName = "Neosector404";
let internName = "Gridbreaker";
let sayHi = `Welcome, ${internName}, to ${networkName}`;
console.log(sayHi);