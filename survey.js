const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable ;) \n", (name) => {
  rl.question(`Hi ${name}! What's an activity you like doing? \n`, (activity) => {
    rl.question(`${activity} is amazing! And what do you usually listen to while doing that? \n`, (music) => {
      rl.question(`I also enjoy ${music} a lot! Let's talk about food now. Which meal is your favourite (eg: dinner, brunch, etc.)? \n`, (meal) => {
        rl.question(`Interesting... and what's your favourite thing to eat for that meal? \n`, (dish) => {
          rl.question(`Yum! ${dish} actually sound delicious right now! How about sports, which one is your absolute favourite? \n`, (sport) => {
            rl.question(`${sport}, gotcha. Now for the last question: What is your superpower? In a few words, tell us what you're amazing at! \n`, (power) => {
              console.log(`${power} is such a cool superpower to have! Thanks for answering my questions, ${name}! Here's your profile:`);
              console.log(`${name} loves listening to ${music} while ${activity}, savouring ${dish} for ${meal}, prefers ${sport} over any other sport, and is amazing at ${power}!`);
              
              
              rl.close();
            })
          })
        })
      })
    })
  })
});
