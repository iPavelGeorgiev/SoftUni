function nonDecreasingSubsequence(input) {
    let result = [];
    let max = -Infinity;
    input.filter(element => {
        if (element >= max) {
            result.push(element);
            max = element;
        }
    })
    console.log(result.join(" "));
}

nonDecreasingSubsequence([ 1, 3, 8, 4, 10, 12, 3, 2, 24])