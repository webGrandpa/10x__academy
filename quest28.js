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