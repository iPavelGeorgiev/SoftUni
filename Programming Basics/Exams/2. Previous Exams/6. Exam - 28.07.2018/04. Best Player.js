function bestPlayer(input) {
    let playerName = input.shift();
    let goals = Number(input.shift());
    let bestPlayerName = ""
    let bestPlayerGoals = Number.MIN_SAFE_INTEGER;

    while (playerName != "END") {
        if(goals > bestPlayerGoals) {
            bestPlayerName = playerName;
            bestPlayerGoals = goals;
        }

        if (goals >= 10) {
            break;
        }

        playerName = input.shift();
        goals = Number(input.shift());
    }

    console.log(`${bestPlayerName} is the best player!`);
    if (bestPlayerGoals >= 3) {
        console.log(`He has scored ${bestPlayerGoals} goals and made a hat-trick !!!`);
    } else {
        console.log(`He has scored ${bestPlayerGoals} goals.`);
    }
}

bestPlayer(['Neymar', '2', 'Ronaldo', '1', 'Messi', '3', 'END'])