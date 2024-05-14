#!/usr/bin/node
// a script that writes a string to a file.
const fs = require('fs');
const fileName = process.argv[2];
fs.readFile(fileName, 'utf8', (error, data) => {
  if (error) {
    console.error(error);
  } else {
    console.log(data);
  }
});
