
// Quest 2 – Calculate Sector Power
//  Difficulty: Easy (2 pts)
// Story
//  The Grid’s power levels are hidden. You must compute the combined power of two sectors.
// Objective
//  Use arithmetic to sum two power readings and display the result.
// Instructions
// Name your file quest2.js
// Define a variable sectorA with value 5
// Define a variable sectorB with value 7
// Define a constant totalPower as sectorA plus sectorB
// Print the exact sentence
//  Total power: 12
// Acceptance Criteria
// sectorA is defined as a variable with value 5
// sectorB is defined as a variable with value 7
// totalPower is defined as a constant with value 12
// The console shows exactly:
//  Total power: 12

const sectorA = 5;
const sectorB = 7;
const totalPower = sectorA + sectorB;
console.log(`Total power: ${totalPower}`);

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

// Quest 9 – Sector Assignment
//  Difficulty: Easy (2 pts)
// Story
//  Interns report to different sectors by code. You must map code to sector name.
// Objective
//  Use a switch statement to select and print the correct sector.
// Instructions
// Name your file quest9.js
// Create a constant sectorCode and assign it the text beta
// Use a switch on sectorCode:
// alpha → Sector Alpha
// beta → Sector Beta
// default → Unknown Sector
// Print the selected sector name exactly
// Acceptance Criteria
// sectorCode is defined as a constant with value beta
// The console shows exactly:
//  Sector Beta

const sectorCode = "beta";

switch (sectorCode) {
    case "alpha":
      console.log("Sector Alpha");
      break;
    case "beta":
      console.log("Sector Beta.");
      break;
    default:
      console.log("Unknown Sector");
  }

//   Quest 5 – Activate Protocol
//   Difficulty: Easy (2 pts)
//  Story
//   Protocol functions must be in place before the Grid can respond. You need to define the activation routine.
//  Objective
//   Declare a function that returns a protocol status and log its result.
//  Instructions
//  Name your file quest5.js
//  Declare a function named activateProtocol that returns the text Protocol activated
//  Call activateProtocol and print its returned text exactly
//  Acceptance Criteria
//  activateProtocol is declared as a function
//  When called, activateProtocol returns Protocol activated
//  The console shows exactly:
//   Protocol activated

function activateProtocol(){
    return "Protocol activated";
}

console.log(activateProtocol());

// Quest 23 – Sector Efficiency Check
//  Difficulty: Medium (3 pts)
// Story
//  To optimize power draw, you must check if the sector’s efficiency meets the safety threshold.
// Objective
//  Calculate an efficiency ratio and use a conditional to report if it’s above the threshold.
// Instructions
// Name your file quest23.js
// Create a constant processedUnits and set it to 45
// Create a constant totalUnits and set it to 50
// Create a constant efficiency as processedUnits divided by totalUnits
// Create a constant threshold and set it to 0.85
// If efficiency is at least threshold, print the exact sentence
//  Efficiency OK: true
//  Otherwise, print
//  Efficiency OK: false
// Acceptance Criteria
// processedUnits = 45, totalUnits = 50
// efficiency = 0.9, threshold = 0.85
// The console shows exactly:
//  Efficiency OK: true

const processedUnits = 45;
const totalUnits = 50;
const efficiency = processedUnits / totalUnits;
const threshold = 0.85;

if (efficiency >= threshold) {
    console.log(`Efficiency OK: ${efficiency != threshold}`);
} else {
    console.log(`Efficiency OK: ${efficiency == threshold}`);
}

// Quest 28 – Cipher Sector Tags
//  Difficulty: Medium (3 pts)
// Story
//  The Grid requires encrypted tags. You must apply your cipher to each sector code.
// Objective
//  Use a function and an array method to reverse each code and display them.
// Instructions
// Name your file quest28.js
// Create a constant sectorCodes and assign it the array of text values red, green, blue
// Declare a function cipher that takes one parameter text and returns the reversed text
// Create a constant encryptedCodes by calling cipher on each entry of sectorCodes using an array method
// Create a constant display by joining encryptedCodes with “; ”
// Print the exact sentence
//  Ciphers: der; neerg; eulb
// Acceptance Criteria
// sectorCodes is a constant array with red, green, blue
// cipher(text) returns the text reversed
// encryptedCodes contains “der”, “neerg”, “eulb”
// display equals “der; neerg; eulb”
// The console shows exactly:
//  Ciphers: der; neerg; eulb

const sectorCodes = ["red", "green", "blue"];

function cipher(text) {
    return text.split("").reverse().join("");
}

const encryptedCodes = sectorCodes.map(cipher);
const display = encryptedCodes.join("; ");

console.log(`Ciphers: ${display}`);



// Quest H7 – Sector Auditor
//  Difficulty: Hard (5 pts)
// Story
//  The Grid admin handbook lists sector properties. You need to audit and format each property entry.
// Objective
//  Create a function that loops over an object’s properties, formats each key-value pair, and returns an array of formatted strings.
// Instructions
// Name your file questH7.js
// Create a constant config set to the object:
// mode: 'active'
// maxLoad: 100
// secure: true
// Declare a function auditConfig(cfg) that:
// Initializes an empty array entries
// Uses a for…in loop to iterate over cfg properties
// For each key, pushes the string <key>: <value> into entries
// Returns entries
// Call auditConfig(config) and store the result in report
// Print exactly:
// Audit report: mode: active, maxLoad: 100, secure: true
//  (join report with , )
// Acceptance Criteria
// config matches the specified object
// auditConfig returns ["mode: active", "maxLoad: 100", "secure: true"]
// The console shows exactly:
//  Audit report: mode: active, maxLoad: 100, secure: true

const config = {
    mode: 'active',
    maxLoad: 100,
    secure: true
};

function auditConfig(cfg) {
    const entries = [];
    for (const key in cfg) {
        entries.push(`${key}: ${cfg[key]}`);
    }
    return entries;
}

const report = auditConfig(config);
console.log(`Audit report: ${report.join(', ')}`);

// Quest H4 – Augment Registry
//  Difficulty: Hard (5 pts)
// Story
//  A new protocol requires all nodes to be marked as ‘upgraded’ before deployment.
// Objective
//  Clone each registry object, update its status, and list the updated names.
// Instructions
// Name your file questH4.js
// Create a constant named registry and assign it an array of objects:
//  • { name: 'A', status: 'old' }
//  • { name: 'B', status: 'old' }
// Use the array map method and Object.assign to produce a new array upgraded where each object has status: 'upgraded'
// Map upgraded to an array of name strings and join with commas into a constant named namesList
// Use console.log to print exactly
//  Updated nodes: A, B
// Acceptance Criteria
// registry contains the two specified objects
// upgraded contains clones with status ‘upgraded’
// namesList equals "A, B"
// The console shows exactly:
//  Updated nodes: A, B

// const registry = [{ name: 'A', status: 'old' }, { name: 'B', status: 'old' }];
// // const asignObj = registry.Object.asign()

// const upgraded = registry.map(function(element){})

// const namesList = upgraded.map(functio?n(element){element.join(', ')});

// console.log(`Updated nodes: ${namesList}`);




// Quest H11 – Unique Node Filter
//  Difficulty: Hard (5 pts)
// Story
//  Duplicate node reports flood your logs. You must filter unique entries.
// Objective
//  Use filter with an index check to remove duplicates.
// Instructions
// Name your file questH11.js
// Create a constant rawNodes = ['A', 'B', 'A', 'C', 'B']
// Declare uniqueFilter(arr) that returns arr.filter((item, idx, self) => self.indexOf(item) === idx)
// Call uniqueFilter(rawNodes) into uniqueNodes
// Print exactly:
//  Unique nodes: A, B, C
// Acceptance Criteria
// uniqueNodes equals ['A', 'B', 'C']
// The console shows exactly:
//  Unique nodes: A, B, C

const rawNodes = ['A', 'B', 'A', 'C', 'B'];

function uniqueFilter(arr){
    return arr.filter((item, idx, self) => self.indexOf(item) === idx);
}

console.log(uniqueFilter(rawNodes));









