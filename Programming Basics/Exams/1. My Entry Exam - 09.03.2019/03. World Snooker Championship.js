function worldSnookerChampionship(input) {
    let stage = input.shift();
    let ticketType = input.shift();
    let numTickets = Number(input.shift());
    let photo = input.shift();
    let ticketsPrice = 0;
    let freePhoto = false;

    if (stage == "Quarter final") {
        switch (ticketType) {
            case "Standard": ticketsPrice = 55.50 * numTickets;
            break;
            case "Premium": ticketsPrice = 105.20 * numTickets;
            break;
            case "VIP": ticketsPrice = 118.90 * numTickets;
            break;
        }
    } else if (stage == "Semi final") {
        switch (ticketType) {
            case "Standard": ticketsPrice = 75.88 * numTickets;
            break;
            case "Premium": ticketsPrice = 125.22 * numTickets;
            break;
            case "VIP": ticketsPrice = 300.40 * numTickets;
            break;
        }
    } else if (stage == "Final") {
        switch (ticketType) {
            case "Standard": ticketsPrice = 110.10 * numTickets;
            break;
            case "Premium": ticketsPrice = 160.66 * numTickets;
            break;
            case "VIP": ticketsPrice = 400 * numTickets;
            break;
        }
    }

    if (ticketsPrice > 4000) {
        ticketsPrice *= 0.75;
        freePhoto = true;
    } else if (ticketsPrice > 2500) {
        ticketsPrice *= 0.90;
    }

    if (freePhoto == false && photo == "Y") {
        ticketsPrice += 40 * numTickets;
    }

    console.log(ticketsPrice.toFixed(2));
}

worldSnookerChampionship(['Final', 'Premium', '25', 'Y'])