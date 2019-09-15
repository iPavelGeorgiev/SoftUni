function gameNumberWars(input) {
    let playerOne = input.shift();
    let playerTwo = input.shift();
    let firstPlayerCard = input.shift();
    let secondPlayerCard = input.shift();
    let firstPlayerPoints = 0;
    let secondPlayerPoints = 0;
    let isWar = false;

    while (firstPlayerCard != "End of game" && secondPlayerCard != "End of game") {
        firstPlayerCard = Number(firstPlayerCard);
        secondPlayerCard = Number(secondPlayerCard);
        if (firstPlayerCard > secondPlayerCard) {
            firstPlayerPoints += firstPlayerCard - secondPlayerCard;
        } else if (secondPlayerCard > firstPlayerCard) {
            secondPlayerPoints += secondPlayerCard - firstPlayerCard;
        } else if (firstPlayerCard == secondPlayerCard) {
            console.log("Number wars!");
            firstPlayerCard = Number(input.shift());
            secondPlayerCard = Number(input.shift());
            if (firstPlayerCard > secondPlayerCard) {
                console.log(`${playerOne} is winner with ${firstPlayerPoints} points`);
            } else {
                console.log(`${playerTwo} is winner with ${secondPlayerPoints} points`);
            }
            isWar = true;
            break;
        }


        firstPlayerCard = input.shift();
        secondPlayerCard = input.shift();
    }

    if (isWar == false) {
        console.log(`${playerOne} has ${firstPlayerPoints} points`);
        console.log(`${playerTwo} has ${secondPlayerPoints} points`);
    }

}

gameNumberWars(['Desi', 'Niki', '7', '5', '3', '4', '3', '3', '5', '3'])