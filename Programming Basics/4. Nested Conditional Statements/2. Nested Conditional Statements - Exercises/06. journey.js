function journey(input) {
    let budget = Number(input.shift());
    let season = input.shift();

    if (budget <= 100) {
        console.log("Somewhere in Bulgaria")
        if (season == "summer") {
            budget *= 0.30;
        } else {
            budget *= 0.70;
        }
    } else if (budget <= 1000) {
        console.log("Somewhere in Balkans")
        if (season == "summer") {
            budget *= 0.40;
        } else {
            budget *= 0.80;
        }
    } else if (budget > 1000) {
        console.log("Somewhere in Europe")
        budget *= 0.90;
    }

    if (budget > 1000) {
        console.log(`Hotel - ${budget.toFixed(2)}`);
    } else if (season === "summer") {
        console.log(`Camp - ${budget.toFixed(2)}`);
    } else if (season === "winter") {
        console.log(`Hotel - ${budget.toFixed(2)}`);
    }
}

journey([50, "summer"])