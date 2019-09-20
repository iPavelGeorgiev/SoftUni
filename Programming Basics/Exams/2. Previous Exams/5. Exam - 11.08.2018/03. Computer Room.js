function computerRoom(input) {
    let month = input.shift();
    let hrsSpend = Number(input.shift());
    let peopleInGroup = Number(input.shift());
    let dayTime = input.shift();
    let pricePerHour = 0;

    if (month == "march" || month == "april" || month == "may") {
        switch (dayTime) {
            case "day": pricePerHour = 10.50;
            break;
            case "night": pricePerHour = 8.4;
            break;
        }
    } else if (month == "june" || month == "july" || month == "august") {
        switch (dayTime) {
            case "day": pricePerHour = 12.60;
            break;
            case "night": pricePerHour = 10.20;
            break;
        }
    }

    if (peopleInGroup >= 4) {
        pricePerHour *= 0.90;
    }

    if (hrsSpend >= 5) {
        pricePerHour *= 0.50
    }

    let totalSum = (pricePerHour * hrsSpend) * peopleInGroup;

    console.log(`Price per person for one hour: ${pricePerHour.toFixed(2)}`);
    console.log(`Total cost of the visit: ${totalSum.toFixed(2)}`);
}

computerRoom(['march', '3', '3', 'day'])