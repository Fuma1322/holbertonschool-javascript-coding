#!/usr/bin/env node

// Import the fs module to interact with the file system
const fs = require('fs');
const path = require('path');

// Get the file path from the command line arguments
const filePath = process.argv[2];

// Function to read and print the file content
function readFile(filePath) {
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
            // If an error occurs, print the error object
            console.error(err);
        } else {
            // If no error, print the file content
            console.log(data);
        }
    });
}

// Check if the file path is provided
if (!filePath) {
    console.log("Please provide a file path as an argument.");
} else {
    // Call the function with the provided file path
    readFile(filePath);
}