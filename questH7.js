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