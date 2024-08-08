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
        } while (hostPick === ballCup || hostPick === contestantPick); // 

        // In this optimised version, we directly check if the contestant wins by staying or by switching, eliminating the need for additional logic.
        // If the contestant's initial pick is the ballCup, they win by staying.
        if (contestantPick === ballCup) {
            stayWins++; // ++ adds 1 to the value of the variable
        } else {
            // Otherwise, they win by switching since the host's reveal guarantees that switching is the only option left with the ball.
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
