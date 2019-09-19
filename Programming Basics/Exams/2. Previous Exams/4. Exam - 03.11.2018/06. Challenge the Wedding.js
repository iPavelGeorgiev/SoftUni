function challengeTheWedding(input) {
    let males = Number(input.shift());
    let females = Number(input.shift());
    let maxTables = Number(input.shift());
    let table = 1;
    let output = "";
    for (let m = 1; m <= males; m++) {
        for (let f = 1; f <= females; f++) {
            if (table <= maxTables) {
                output += `(${m} <-> ${f}) `
                table++;
            }
        }
    }
    console.log(output);
}

challengeTheWedding([2, 2, 6])