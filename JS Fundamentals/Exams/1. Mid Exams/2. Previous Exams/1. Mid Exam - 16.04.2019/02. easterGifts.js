function easterGifts(input) {
    let gifts = input.shift().split(" ");
    let line = input.shift()

    while (line != "No Money") {
        let [command, gift, index] = line.split(" ");

        if (command === "OutOfStock") {
            gifts.forEach((e, i) => {
                if (e === gift) {
                    gifts.splice(i, 1, "None");
                }
            })
        } else if (command === "Required") {
            if (index >= 0 && index < gifts.length - 1) {
                gifts.splice(index, 1, gift);
            }
        } else if (command === "JustInCase") {
            gifts.pop();
            gifts.push(gift);
        }

        line = input.shift()
    }

    let print = gifts.filter(element => element !== "None")
    console.log(print.join(" "));
}

easterGifts(['Eggs StuffedAnimal Cozonac Sweets EasterBunny Eggs Clothes',
    'OutOfStock Eggs',
    'Required Spoon 2',
    'JustInCase ChocolateEgg',
    'No Money']
)