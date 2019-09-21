function fanShop(input) {
    let budget = Number(input.shift());
    let n = Number(input.shift());
    let subjectsPrice = 0;
    let finalMoney = 0;

    for (let i = 0; i < n; i++) {
        let subject = input.shift();

        switch(subject) {
            case "hoodie": subjectsPrice += 30;
            break;
            case "keychain": subjectsPrice += 4;
            break;
            case "T-shirt": subjectsPrice += 20;
            break;
            case "flag": subjectsPrice += 15;
            break;
            case "sticker": subjectsPrice += 1;
            break;
        }
        finalMoney = budget - subjectsPrice;
    }
    if (subjectsPrice <= budget) {
        console.log(`You bought ${n} items and left with ${finalMoney} lv.`);
    } else {
        console.log(`Not enough money, you need ${Math.abs(finalMoney)} more lv.`);
    }
}

fanShop(['25', '3', 'flag', 'keychain', 'sticker'])