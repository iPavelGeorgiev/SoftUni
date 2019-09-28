function cardGame(input) {
    let power = {
        "1": 1,
        "2": 2,
        "3": 3,
        "4": 4,
        "5": 5,
        "6": 6,
        "7": 7,
        "8": 8,
        "9": 9,
        "10": 10,
        "J": 11,
        "Q": 12,
        "K": 13,
        "A": 14
    }
 
    let type = {
        "C": 1,
        "D": 2,
        "H": 3,
        "S": 4
    }

    let players = {}

    for (const line of input) {
        let tokens = line.split(": ")
        let name = tokens.shift();
        let cards = tokens.join(" ").split("").join("").split(", ")
        
        if (!players.hasOwnProperty(name)) {
            players[name] = [...new Set(cards)];
        } else {
            let set = [...new Set(players[name].concat(cards))]
            players[name] = set;
        }
    }

    for (const [player, cards] of Object.entries(players)) {
        let sum = 0;

        for (let card of cards) {
            let p = card.substring(0, card.length - 1)
            let t = card.substring(card.length - 1);
            
            sum += power[p] * type[t];
        }

        console.log(`${player}: ${sum}`);
    }
}

cardGame(
    ['Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD']
)