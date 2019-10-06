function presentDelivery(input) {
    let houses = input.shift().split("@").map(Number);
    let command = input.shift();
    let pos = 0;

    while (command !== "Merry Xmas!") {
        let jumpDis = Number(command.split(" ")[1]);

        for (let i = 0; i < jumpDis; i++) {
            if (pos + 1 > houses.length - 1) {
                pos = 0;
            } else {
                pos++;
            }
        }

        if (houses[pos] === 0) {
            console.log(`House ${pos} will have a Merry Christmas.`);
        } else {
            houses[pos] -= 2;
        }

        command = input.shift();
    }

    let mission = houses.filter(value => value > 0);

    console.log(`Santa's last position was ${pos}.`);

    if (mission.length === 0) {
        console.log("Mission was successful.");
    } else {
        console.log(`Santa has failed ${(mission).length} houses.`);
    }

}

presentDelivery(
    [ '2@4@2',
  'Jump 2',
  'Jump 2',
  'Jump 8',
  'Jump 3',
  'Jump 1',
  'Merry Xmas!' ]
)