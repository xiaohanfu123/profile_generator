// on any input from stdin (standard input), output a "." to stdout

const readline = require('readline')

process.stdin.on('data', (data) => {
  process.stdout.write('.');
  if (data === '\u0003') {
    process.exit();
  }
});

console.log('after callback');
