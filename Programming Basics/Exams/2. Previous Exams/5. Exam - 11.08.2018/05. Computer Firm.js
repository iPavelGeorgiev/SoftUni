function computerFirm(input) {
    let n = Number(input.shift());
    let totalRating = 0;
    let totalSales = 0;

    for (let i = 0; i < n; i++) {
        let salesRating = Number(input.shift());
        let rating = salesRating % 10;
        let sales = Math.trunc(salesRating / 10);
        totalRating += rating

        if (rating == 3) {
            totalSales += sales * 0.5;
        } else if (rating == 4) {
            totalSales += sales * 0.7;
        } else if (rating == 5) {
            totalSales += sales * 0.85;
        } else if (rating == 6) {
            totalSales += sales;
        }
    }
    totalRating /= n;

    console.log(totalSales.toFixed(2));
    console.log(totalRating.toFixed(2));
}

computerFirm(['3', '103', '103', '103'])