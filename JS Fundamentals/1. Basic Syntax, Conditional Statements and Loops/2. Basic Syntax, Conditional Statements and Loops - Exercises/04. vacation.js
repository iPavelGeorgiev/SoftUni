function vacation(people, type, day) {
    let onePersonPrice = 0;
    if (type == "Students") {
        switch (day) {
            case "Friday": onePersonPrice = 8.45;
            break;
            case "Saturday": onePersonPrice = 9.80;
            break;
            case "Sunday": onePersonPrice = 10.46;
            break;
        }
    } else if (type == "Business") {
        switch (day) {
            case "Friday": onePersonPrice = 10.90;
            break;
            case "Saturday": onePersonPrice = 15.60;
            break;
            case "Sunday": onePersonPrice = 16;
            break;
        }
    } else if (type == "Regular") {
        switch (day) {
            case "Friday": onePersonPrice = 15;
            break;
            case "Saturday": onePersonPrice = 20;
            break;
            case "Sunday": onePersonPrice = 22.50;
            break;
        }
    }
    let totalPrice = onePersonPrice * people;

    if (type == "Students" && people >= 30) {
        totalPrice *= 0.85;
    } else if (type == "Business" && people >= 100) {
        totalPrice -= onePersonPrice * 10;
    } else if (type == "Regular" && people >= 10 && people <= 20) {
        totalPrice *= 0.95;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

//vacation(30, "Students", "Sunday")