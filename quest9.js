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
