function lastKNumbersSequance(n, k) {
    let printSequence = [1];
    let step = 0;

    for (let i = 1; i < n; i++) {
        let sum = 0;

        if (printSequence.length < k) {
            for (let l = 0; l < printSequence.length; l++) {
                sum += printSequence[l];
            }
        } else {
            for (let h = 0 + step; h < k + step; h++) {
                sum += printSequence[h];
            }
            step++;
        }

        printSequence.push(sum);
    }

    console.log(printSequence.join(" "));
}

lastKNumbersSequance(6, 3)