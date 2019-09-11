function hotelRoom(input) {
    let month = input.shift();
    let rentedDays = Number(input.shift());
    let apartmentPrice = 0;
    let studioPrice = 0;

    switch (month) {
        case "May":
        case "October":
            studioPrice = 50 * rentedDays;
            apartmentPrice = 65 * rentedDays;
            if (rentedDays > 7 && rentedDays < 14) {
                studioPrice *= 0.95;
            } else if (rentedDays > 14) {
                studioPrice *= 0.70;
            }
            break;
        case "June":
        case "September":
            studioPrice = 75.20 * rentedDays;
            apartmentPrice = 68.70 * rentedDays;
            if (rentedDays > 14) {
                studioPrice *= 0.80;
            }
            break;
        case "July":
        case "August":
            studioPrice = 76 * rentedDays;
            apartmentPrice = 77 * rentedDays;
            break;
    }

    if (rentedDays > 14) {
        apartmentPrice *= 0.90;
    }

    console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
    console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
}


hotelRoom(["May", 15])