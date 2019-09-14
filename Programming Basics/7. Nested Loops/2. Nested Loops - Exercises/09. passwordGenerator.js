function passwordGenerator(input) {
    let n = Number(input.shift());
    let l = Number(input.shift());
    let output = "";

    for (let n1 = 1; n1 <= n; n1++) {
        for (let n2 = 1; n2 <= n; n2++) {
            for (let n3 = 97; n3 < 97 + l; n3++) {
                for (let n4 = 97; n4 < 97 + l; n4++) {
                    for (let n5 = 1; n5 <= n; n5++) {
                        if (n5 > n1 && n5 > n2) {
                            output += `${n1}${n2}${String.fromCharCode(n3)}${String.fromCharCode(n4)}${n5} `;
                        }
                    }
                }
            }
        }
    }
    console.log(output);
}

passwordGenerator([2, 4])