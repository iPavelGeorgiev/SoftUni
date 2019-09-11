function volleyball(input) {
    let year = input.shift();
    let holydays = +(input.shift());
    let driving = +(input.shift());
    let saturdaysGame = 0;
    let sundayGames = driving;
    let timePlayed = 0;
    let holydayGames = 0;
    let games = 0;

    saturdaysGame = (48 - sundayGames) * (3 / 4);
    holydayGames = holydays * (2 / 3);
    timePlayed = saturdaysGame + sundayGames + holydayGames;

    if (year === "leap") {
        games = timePlayed * 1.15;
    } else {
        games = timePlayed;
    }
    console.log(Math.floor(games));
}

volleyball(["leap", 5, 2])