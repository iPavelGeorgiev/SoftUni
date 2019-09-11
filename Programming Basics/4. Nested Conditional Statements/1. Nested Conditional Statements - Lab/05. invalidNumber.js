function invalidNumber(input) {
    let num = Number(input.shift());

    if (!((num >= 100 && num <= 200) || num == 0)) {
        console.log("invalid")
    }
}

invalidNumber([75])