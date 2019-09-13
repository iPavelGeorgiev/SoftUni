function leftRightSum(input) {
    let n = Number(input[0]);
    let nX2 = 2 * n;

    let leftSide = 0;
    let rightSide = 0;

    for (let i = 1; i <= nX2; i++) {
        let num = Number(input[i]);

        if (i <= n) {
            leftSide += num;
        } else {
            rightSide += num;
        }
    }

    if (leftSide == rightSide) {
        console.log(`Yes, sum = ${leftSide}`);
    } else {
        let diff = Math.abs(leftSide - rightSide);
        console.log(`No, diff = ${diff}`);
    }
}

leftRightSum([2, 10, 90, 60, 40])