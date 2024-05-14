#!/usr/bin/node

const request = require('request');
const url = process.argv[2];

request(url, { json: true }, (error, response, body) => {
  if (error) {
    console.error(error);
    return;
  }

  const completed = {};

  body.forEach(task => {
    if (task.completed) {
      completed[task.userId] = (completed[task.userId] || 0) + 1;
    }
  });
  console.log(completed);
});
