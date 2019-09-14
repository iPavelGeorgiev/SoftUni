function nameWars(input) {
    let name = input.shift();
    let winnerName = "";
    let winnerPoints = Number.MIN_SAFE_INTEGER;

    while (name != "STOP") {
        let points = 0;
        for (let i = 0; i < name.length; i++) {
            points += name.charCodeAt(i);
        }

        if (points > winnerPoints) {
            winnerPoints = points;
            winnerName = name;
        }

        name = input.shift();
    }
    console.log(`Winner is ${winnerName} - ${winnerPoints}!`);
}

nameWars(['Petar', 'Georgi', 'Stanimir', 'STOP' ])