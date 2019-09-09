function tailoringWorkshop(input) {
    let tables = parseInt(input.shift());
    let tLength = Number(input.shift());
    let tWidth = Number(input.shift());
    let tCoverArea = tables * (tLength + 2 * 0.30) * (tWidth + 2 * 0.30);
    let tCrochetArea = tables * (tLength / 2) * (tLength / 2);
    let printUSD = tCoverArea * 7 + tCrochetArea * 9;
    let printBGN = printUSD * 1.85;
    console.log(`${printUSD.toFixed(2)} USD`);
    console.log(`${printBGN.toFixed(2)} BGN`);
}

tailoringWorkshop([5, 1.00, 0.50])