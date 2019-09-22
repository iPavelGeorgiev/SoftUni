function nextDay(year, month, day) {
    let tomorrow = new Date(year, month - 1, day + 1);
    let printDate = tomorrow.getFullYear() + "-" + (tomorrow.getMonth() + 1) + "-" + tomorrow.getDate();

    console.log(printDate);
}

nextDay(1951, 12, 24)