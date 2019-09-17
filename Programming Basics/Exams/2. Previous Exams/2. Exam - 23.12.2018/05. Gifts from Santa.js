function giftsFromSanta(input) {
    let N = Number(input.shift());
    let M = Number(input.shift());
    let S = Number(input.shift());
    let output = "";

    for (let i = M; i >= N; i--) {
        
        if (i % 2 == 0 && i % 3 == 0) {
            if (i == S) {
                break;
            }
            output += `${i} `;
        }
    }

    console.log(output);
}

giftsFromSanta([1, 30, 15])