const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');

////////////
// Event Handling for User Input
////////////

// on any input from stdin (standard input), output a "." to stdout
stdin.on('data', (key) => {
  process.stdout.write('.');
  if (key === '\u0003') {
    process.exit();
  }
});

console.log('after callback');

rl.question("What's your name?", (answer) => {
  rl.question("What's an activity you like doing?",(name) => {  
   rl.question('What do you listen to while doing that?') ,(music)=>{
     rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)')
       rl.question("What's your favourite thing to eat for that meal?")
         rl.question('Which sport is your absolute favourite?')
         rl.question('What is your superpower? In a few words, tell us what you are amazing at!') 
   rl.close();