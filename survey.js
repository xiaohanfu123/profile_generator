const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

  rl.question("What's your name?", (name) => {
  rl.question("What's an activity you like doing??", (activity) => {
  console.log(`Your name is : ${name}`);
  console.log(`you like to play ${activity}`)
  rl.close();
})});




// What's your name? Nicknames are also acceptable :)
// What's an activity you like doing?
// What do you listen to while doing that?
// Which meal is your favourite (eg: dinner, brunch, etc.)
// What's your favourite thing to eat for that meal?
// Which sport is your absolute favourite?
// What is your superpower? In a few words, tell us what you are amazing at!


// function input(prompt) {
//   return new Promise((callbackFn, errorFn) => {
//       rli.question(prompt, (uinput)=> {
//           callbackFn(uinput);
//       }, ()=> {
//           errorFn();
//       });
//   });
// }


// const main = async () => {
//   name = await input("what is your name? ");
//   console.log(name);
//   answer = await input(" what do you like ");
//   console.log(answer);
//   rli.close();
// };

// main()