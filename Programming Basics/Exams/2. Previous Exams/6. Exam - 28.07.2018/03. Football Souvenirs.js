function footballSouvenirs(input) {
    let team = input.shift();
    let typeSouvenir = input.shift();
    let numSouvenirs = Number(input.shift());
    let total = 0;
    let isInvalidCountry = false;
    let isInvalidSouvenir = false;

        if (team == "Argentina") {
            switch (typeSouvenir) {
                case "flags": total = numSouvenirs * 3.25;
                break;
                case "caps": total = numSouvenirs * 7.20;
                break;
                case "posters": total = numSouvenirs * 5.10;
                break;
                case "stickers": total = numSouvenirs * 1.25;
                break;
                default: isInvalidSouvenir = true;
            }
        }

        if (team == "Brazil") {
            switch (typeSouvenir) {
                case "flags": total = numSouvenirs * 4.20;
                break;
                case "caps": total = numSouvenirs * 8.50;
                break;
                case "posters": total = numSouvenirs * 5.35;
                break;
                case "stickers": total = numSouvenirs * 1.20;
                break;
                default: isInvalidSouvenir = true;
            }
        }

            if (team == "Croatia") {
                switch (typeSouvenir) {
                    case "flags": total = numSouvenirs * 2.25;
                    break;
                    case "caps": total = numSouvenirs * 6.90;
                    break;
                    case "posters": total = numSouvenirs * 4.95;
                    break;
                    case "stickers": total = numSouvenirs * 1.10;
                    break;
                    default: isInvalidSouvenir = true;
                }
            }

        if (team == "Denmark") {
            switch (typeSouvenir) {
                case "flags": total = numSouvenirs * 3.10;
                break;
                case "caps": total = numSouvenirs * 6.50;
                break;
                case "posters": total = numSouvenirs * 4.80;
                break;
                case "stickers": total = numSouvenirs * 0.90;
                break;
                default: isInvalidSouvenir = true;
            }
        }

    if (team == "Argentina" || team == "Brazil" || team == "Croatia" || team == "Denmark") {
        if (isInvalidSouvenir == false) {
            console.log(`Pepi bought ${numSouvenirs} ${typeSouvenir} of ${team} for ${total.toFixed(2)} lv.`)
        } else {
            console.log("Invalid stock!");
        }
    } else {
        console.log("Invalid country!");
    }
}

footballSouvenirs(['Brazil', 'stickers', '5'])