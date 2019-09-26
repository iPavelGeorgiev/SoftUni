function sorting(input) {
    input.sort((a, b) => b - a);
    let numbersSorted = [];
    let length = input.length;

    for (let i = 0; i < length; i += 2) {
        let max = input.shift();
        let min = input.pop();

        numbersSorted.push(max, min);
    }

    console.log(numbersSorted.join(" "));
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18])