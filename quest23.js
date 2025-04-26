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