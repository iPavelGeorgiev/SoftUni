function schoolSupplies(input) {
    let pencils = Number(input.shift());
    let markers = Number(input.shift());
    let tableWasher = Number(input.shift());
    let discount = Number(input.shift());

    pencils *= 5.80;
    markers *= 7.20;
    tableWasher *= 1.20;

    let total = (pencils + markers + tableWasher) * (1 - (discount / 100));

    console.log(total.toFixed(3));
}

schoolSupplies([2, 3, 2.5, 25])