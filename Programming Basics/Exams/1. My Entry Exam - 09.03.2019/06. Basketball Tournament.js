function basketballTournament(input) {
    let tournament = input.shift();
    let victories = 0;
    let defeats = 0;
    let matches = 0;

    while (tournament != "End of tournaments") {
        let games = Number(input.shift());

        for (let n = 1; n <= games; n++) {
                let desiTeam = Number(input.shift());
                let enemy = Number(input.shift());

                if (desiTeam > enemy) {
                    console.log(`Game ${n} of tournament ${tournament}: win with ${desiTeam - enemy} points.`);
                    victories++
                } else {
                    console.log(`Game ${n} of tournament ${tournament}: lost with ${enemy - desiTeam} points.`);
                    defeats++;
                }
                matches++;
        }

        tournament = input.shift();
    }

    console.log(`${(victories / matches * 100).toFixed(2)}% matches win`);
    console.log(`${(defeats / matches * 100).toFixed(2)}% matches lost`);
}

basketballTournament(['Dunkers', '2', '75', '65', '56', '73', 'Fire Girls', '3', '67', '34', '83', '98', '66', '45', 'End of tournaments'])