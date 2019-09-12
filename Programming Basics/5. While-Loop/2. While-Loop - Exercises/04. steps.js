function steps(input) {
    let steps = 0;

    while (steps < 10000) {
        let command = input.shift();

        if (command == "Going home") {
            command = Number(input.shift());
            steps += Number(command);
            break;
        }

        steps += Number(command);
    }

    if (steps >= 10000) {
        console.log("Goal reached! Good job!");
    } else {
        console.log(`${10000 - steps} more steps to reach goal.`);
    }
}

steps([1500, 300, 2500, 3000, "Going home", 200])