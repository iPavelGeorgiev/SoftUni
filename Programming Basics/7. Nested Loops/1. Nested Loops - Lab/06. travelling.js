function travelling(input) {
    let destination = input.shift();

    while (destination != "End") {
        let minSum = Number(input.shift());
        let savedMoney = 0;

        while (savedMoney < minSum) {
            savedMoney += Number(input.shift());
        }
        console.log(`Going to ${destination}!`);
        destination = input.shift();
    }
}

travelling([ 'Greece', '1000', '200', '200', '300', '100', '150', '240', 'Spain', '1200', '300', '500', '193', '423', 'End', '' ])
