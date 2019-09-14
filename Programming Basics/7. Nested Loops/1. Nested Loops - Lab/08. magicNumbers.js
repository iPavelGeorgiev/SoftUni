function magicNumbers(input) {
    let magicNumber = Number(input.shift());

    for (let first = 1; first <= 9; first++) {
        for (let second = 1; second <= 9; second++) {
            for (let third = 1; third <= 9; third++) {
                for (let fourth = 1; fourth <= 9; fourth++) {
                    for (let fifth = 1; fifth <= 9; fifth++) {
                        let product = first * second * third * fourth * fifth;
                        if (product == magicNumber) {
                            console.log(`${first}${second}${third}${fourth}${fifth}`);
                        }
                    }
                }
            }
        }
    }
}

magicNumbers([2])