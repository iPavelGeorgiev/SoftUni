function coding(input) {
    let stringNum = input.shift().toString();

    for (let i = stringNum.length - 1; i >= 0; i--) {
        let print = "";
        let currentDigit = Number(stringNum[i]);

        for (let h = 0; h < currentDigit; h++) {
            print += String.fromCharCode(currentDigit + 33);
        }

        if (currentDigit == 0) {
            console.log("ZERO");
                continue;
        }
        console.log(print);
    }
}

coding([2049])