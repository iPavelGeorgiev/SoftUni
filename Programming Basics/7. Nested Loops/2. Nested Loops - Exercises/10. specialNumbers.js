function specialNumbers(input) {
    let num = Number(input.shift());
    let output = "";

    for (let n1 = 1; n1 <= 9; n1++) {
        for (let n2 = 1; n2 <= 9; n2++) {
            for (let n3 = 1; n3 <= 9; n3++) {
                for (let n4 = 1; n4 <= 9; n4++) {
                    if (num % n1 == 0 && num % n2 == 0 && num % n3 == 0 && num % n4 == 0) {
                        output += `${n1}${n2}${n3}${n4} `;
                    }
                }
            }
        }
    }
    console.log(output);
}

specialNumbers([3])