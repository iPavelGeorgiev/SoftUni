function substitute(input) {
    let num1 = Number(input.shift());
    let num2 = Number(input.shift());
    let num3 = Number(input.shift());
    let num4 = Number(input.shift());
    let counter = 0;

    for (let i1 = num1; i1 <= 8; i1++) {
        for (let i2 = 9; i2 >= num2; i2--) {
            for (let i3 = num3; i3 <= 8; i3++) {
                for (let i4 = 9; i4 >= num4; i4--) {
                    if (counter < 6) {
                        if ((i1 % 2 == 0 && i2 % 2 != 0) && (i3 % 2 == 0 && i4 % 2 != 0)) {
                            if (i1 != i3 || i2 != i4) {
                                console.log(`${i1}${i2} - ${i3}${i4}`);
                                counter++;
                            } else {
                                console.log("Cannot change the same player.");
                            }
                        }
                    }
                }
            }
        }
    }
}

substitute(['7', '6', '8', '5'])