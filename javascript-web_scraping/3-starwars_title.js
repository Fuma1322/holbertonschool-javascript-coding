#!/usr/bin/node

const request = require('request');
const movieid = process.argv[2];
let url = 'https://swapi-api.hbtn.io/api/films/';

url = url.concat(movieid);
request(url, function (err, reposne, body) {
  if (err) {
    console.log(err);
  } else {
    const movie = JSON.parse(body);
    console.log(movie.title);
  }
});
