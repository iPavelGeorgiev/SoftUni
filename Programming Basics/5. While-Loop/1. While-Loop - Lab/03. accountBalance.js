function accountBalance(input) {
    let numTransactions = Number(input.shift());
    let counter = 0;
    let totalBalance = 0.0;

    while (counter < numTransactions) {
        let transaction = Number(input.shift());
        if (transaction < 0) {
            console.log("Invalid operation!");
            break;
        }
        console.log(`Increase: ${transaction.toFixed(2)}`);
        totalBalance += transaction;
        counter++;
    }
    
    console.log(`Total: ${totalBalance.toFixed(2)}`);
}

accountBalance([3, 5.51, 69.42, 100])