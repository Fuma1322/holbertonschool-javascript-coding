process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const name = process.stdin.read();
  process.stdout.write(`Your name is: ${name.toString()}`);
});
process.on('exit', () => {
  process.stdout.write('This important software is now closing\n');
});
