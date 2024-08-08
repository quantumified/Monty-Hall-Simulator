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
        } while (hostPick === ballCup || hostPick === contestantPick); // || means OR, = assigns a value to a variable, == checks if two things are equal, but it performs coercion (converts the operands to the same type before comparing).
        // === also checks if two things are equal but does not perform coercion, meaning it compares both the value and the type. For example: 5 == '5' is true, because == converts the string '5' into the number 5 before comparing, but 5 === '5' is false/
        // This is because, because === is strict and does not perform any type conversion, in this case, 5 is a number and '5' is a string, and since their types are different, they are not considered equal.

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
