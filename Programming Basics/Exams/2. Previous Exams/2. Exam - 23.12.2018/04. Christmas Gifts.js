function christmasGifts(input) {
    let age = input.shift();
    let kids = 0;
    let adults = 0;

    while (age != "Christmas") {
        age = Number(age);

        if (age <= 16) {
            kids++;
        } else {
            adults++;
        }

        age = input.shift();
    }

    let moneyForToys = kids * 5;
    let moneyForSweaters = adults * 15;

    console.log(`Number of adults: ${adults}`);
    console.log(`Number of kids: ${kids}`);
    console.log(`Money for toys: ${moneyForToys}`);
    console.log(`Money for sweaters: ${moneyForSweaters}`);
}

christmasGifts(['16', '20', '46', '12', '8', '20', '49', 'Christmas'])