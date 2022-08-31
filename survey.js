const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name?", (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);

  rl.close();
});
