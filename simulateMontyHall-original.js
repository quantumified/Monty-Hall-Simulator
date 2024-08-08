// Generates a random integer 0 and whatever max is equal to
function getRandomInt(max) {
  // Math.random() produces a random decimal number between 0 and 1.
  // Multiplying by max scales the result to a range between 0 and max.
  // Math.floor() rounds the result to the nearest integer.
  return Math.floor(Math.random() * max);
}

function simulateMontyHall(trials) {
  let stayWins = 0;
  let switchWins = 0;

  // Run for specified number of trials
  for (let i = 0; i < trials; i++) {
    // The i is just a counter so that the program stops at the specified number of trials, the ++ increases its value by 1 each time the loop runs.
    // Randomly choose a cup to hide the ball (0, 1, or 2)
    const ballCup = getRandomInt(3);

    // The contestant makes a random initial choice of cup (0, 1, or 2)
    const contestantPick = getRandomInt(3);

    // The host reveals an empty cup. This cup cannot be the ball cup or the contestant's cup.
    let hostPick; // Declares the variable hostPick
    do {
      hostPick = getRandomInt(3);
    } while (hostPick === ballCup || hostPick === contestantPick); // || means OR, === means equal to (strictly)

    // Find the remaining cup (the one the contestant could switch to)
    const switchPick = [0, 1, 2].find(function(cup) {
      return cup !== contestantPick && cup !== hostPick;
    }); // !== means not equal to, && means AND, which will only return true if both are true

    // Check if the contestant wins by staying with their original choice
    if (contestantPick === ballCup) {
      stayWins++; // ++ adds 1 to the value of the variable
    }

    // Check if the contestant wins by switching to the remaining cup
    if (switchPick === ballCup) {
      switchWins++; // ++ adds 1 to the value of the variable
    }
  }

  // Output the simulation results
  console.log(`Total trials: ${trials}`); // ${} allows us to use a variable in a string
  console.log(`Wins by staying: ${stayWins}`);
  console.log(`Wins by switching: ${switchWins}`);
  console.log(`Win rate by staying: ${(stayWins / trials) * 100}%`); // * 100% converts the decimal to a percentage
  console.log(`Win rate by switching: ${(switchWins / trials) * 100}%`);
}

// Run the simulation with 20 million trials
console.time(`Execution time`); // Starts the timer
simulateMontyHall(20000000);
console.timeEnd(`Execution time`); // Stops the timer and prints the execution time
