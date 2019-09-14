function matrix(input) {
    let a = Number(input[0]);
    let b = Number(input[1]);
    let c = Number(input[2]);
    let d = Number(input[3]);

    for (let firstRowFirstNum = a; firstRowFirstNum <= b; firstRowFirstNum++) {
        for (let firstRowSecondNum = a; firstRowSecondNum <= b; firstRowSecondNum++) {
            for (let secondRowFirstNum = c; secondRowFirstNum <= d; secondRowFirstNum++) {
                for (let secondRowSecondNum = c; secondRowSecondNum <= d; secondRowSecondNum++) {
                    if (((firstRowFirstNum + secondRowSecondNum) == (firstRowSecondNum + secondRowFirstNum)) && (firstRowFirstNum != firstRowSecondNum) && (secondRowFirstNum != secondRowSecondNum)) {
                        console.log(`${firstRowFirstNum}${firstRowSecondNum}`);
                        console.log(`${secondRowFirstNum}${secondRowSecondNum}`);
                        console.log();
                    }
                }
            }
        }
    }
}

matrix([1, 2, 3, 4])