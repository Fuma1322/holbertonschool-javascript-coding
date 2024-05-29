/* eslint-disable */
const express = require('express');
const fs = require('fs').promises;

function countStudents(path) {
  return fs
    .readFile(path, 'utf8')
    .then((data) => {
      const rows = data.split('\n').filter((row) => row);
      const headers = rows.shift().split(',');
      const fieldIndex = headers.indexOf('field');
      const firstNameIndex = headers.indexOf('firstname');
      const fields = [
        ...new Set(rows.map((row) => row.split(',')[fieldIndex])),
      ];

      let result = `Number of students: ${rows.length}\n`;

      fields.forEach((field) => {
        const students = rows.filter(
          (row) => row.split(',')[fieldIndex] === field
        );
        result += `Number of students in ${field}: ${
          students.length
        }. List: ${students
          .map((student) => student.split(',')[firstNameIndex])
          .join(', ')}\n`;
      });
      return result;
    })
    .catch(() => {
      throw new Error('Cannot load the database');
    });
}

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(process.argv[2])
    .then((data) => {
      res.send(`This is the list of our students\n${data}`);
    })
    .catch((err) => {
      res.send(`This is the list of our students\n${err.message}`);
    });
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });

module.exports = app;
