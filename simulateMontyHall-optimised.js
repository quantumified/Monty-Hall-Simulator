// Optimised version
function simulateMontyHall(trials) {
    let stayWins = 0;
    let switchWins = 0;

    for (let i = 0; i < trials; i++) {
        // Randomly choose a cup for the ball
        const ballCup = Math.floor(Math.random() * 3);

        // Contestant makes a random initial pick
        const contestantPick = Math.floor(Math.random() * 3);

        // Host selects an empty cup (the host knows which one has the ball)
        let hostPick;
        do {
            hostPick = Math.floor(Math.random() * 3);
        } while (hostPick === ballCup || hostPick === contestantPick);

        // Check if the contestant would have won by staying
        if (contestantPick === ballCup) {
            stayWins++;
        } else {
            // Check if the contestant would have won by switching
            switchWins++;
        }
    }

    // Output the results
    console.log(`Total trials: ${trials}`);
    console.log(`Wins by staying: ${stayWins}`);
    console.log(`Wins by switching: ${switchWins}`);
    console.log(`Win rate by staying: ${(stayWins / trials) * 100}%`);
    console.log(`Win rate by switching: ${(switchWins / trials) * 100}%`);
}

// Run the simulation with 20 million trials
console.time(`Execution time`);
simulateMontyHall(20000000);
console.timeEnd(`Execution time`);
