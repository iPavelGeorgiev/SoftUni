function christmasDecoration(input) {
    let budget = Number(input.shift());
    let decorationType = input.shift();

    while (decorationType != "Stop") {
        let sum = 0;
        for (let i = 0; i < decorationType.length; i++) {
            sum += decorationType.charCodeAt(i);
        }

        if (sum <= budget) {
            console.log("Item successfully purchased!");
            budget -= sum;
        } else {
            console.log("Not enough money!");
            break;
        }

        decorationType = input.shift();
    }

    if (decorationType == "Stop") {
        console.log(`Money left: ${budget}`);
    }

}

christmasDecoration(['3000', 'star', 'Christmas tree', 'tinsel', 'Tree stand'])