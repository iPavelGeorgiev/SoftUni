function christmasSpirit(input) {
    let quantity = Number(input.shift());
    let days = Number(input.shift());

    let totalCost = 0;
    let totalSpirit = 0;

    for (let i = 1; i <= days; i++) {

        if (i % 11 === 0) {
            quantity += 2;
        }

        if (i % 10 === 0) {
            totalCost += 5 + 3 + 15;
            totalSpirit -= 20;

            if (i === days) {
                totalSpirit -= 30;
            }
        }

        if (i % 2 === 0) {
            totalCost += 2 * quantity;
            totalSpirit += 5;
        }

        if (i % 3 === 0) {
            totalCost += 5 * quantity;
            totalCost += 3 * quantity;
            totalSpirit += 13
        }

        if (i % 5 === 0) {
            totalCost += 15 * quantity;
            totalSpirit += 17;

            if (i % 3 === 0) {
                totalSpirit += 30;
            } 
        }

    }

    console.log(`Total cost: ${totalCost}`);
    console.log(`Total spirit: ${totalSpirit}`);
}

christmasSpirit(
    [ '3', '20' ]
)