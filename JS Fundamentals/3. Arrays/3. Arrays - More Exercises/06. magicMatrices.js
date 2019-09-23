function magicMatrices(input) {
    let output = [];

    for (let i = 0; i < input.length; i++) {
        let sum = 0;
        for (let j = 0; j < input[i].length; j++) {
            sum += input[i][j];
        }

        output.push(sum);
    }

    if (output[0] === output[1] && output[0] === output[2]) {
        console.log(true);
    } else {
        console.log(false);
    }
}

magicMatrices([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]])