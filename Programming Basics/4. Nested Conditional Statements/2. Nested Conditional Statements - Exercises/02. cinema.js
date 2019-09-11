function cinema(input) {
    let type = input.shift();
    let rows = Number(input.shift());
    let columns = Number(input.shift());
    let totalSeats = rows * columns;
    let income = 0;

    if (type === "Premiere") {
        income = 12.00 * totalSeats;
    } else if (type === "Normal") {
        income = 7.50 * totalSeats;
    } else if (type === "Discount") {
        income = 5.00 * totalSeats;
    }
    console.log(`${income.toFixed(2)} leva`)
}

cinema(["Premiere", 10, 12])