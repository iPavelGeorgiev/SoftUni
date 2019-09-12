function sequence2k1(input) {
    let number = Number(input.shift());
    let k = 1;

    while (k <= number) {
        console.log(k);
        k = k * 2 + 1;
    }
}

sequence2k1([3])