function stadiumIncome(input) {
    let numSectors = Number(input.shift());
    let stadiumCapacity = Number(input.shift());
    let oneTicketPrice = Number(input.shift());
    
    let totalIncome = stadiumCapacity * oneTicketPrice;
    let oneSectorIncome = totalIncome / numSectors;
    let moneyForCharity = (totalIncome - (oneSectorIncome * 0.75)) / 8;

    console.log(`Total income - ${totalIncome.toFixed(2)} BGN`);
    console.log(`Money for charity - ${moneyForCharity.toFixed(2)} BGN`);
}

stadiumIncome(['4', '5000', '5'])