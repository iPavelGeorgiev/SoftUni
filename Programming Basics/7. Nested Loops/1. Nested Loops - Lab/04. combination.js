function combination(input) {
    let n = Number(input.shift());
    let counter = 0;

    for (let x1 = 0; x1 <= n; x1 += 1){
        for (let x2 = 0; x2 <= n; x2 += 1){
            for (let x3 = 0; x3 <= n; x3 += 1){
                for (let x4 = 0; x4 <= n; x4 += 1){
                    for (let x5 = 0; x5 <= n; x5 += 1){
                        if (x1 + x2 + x3 + x4 + x5 == n) {
                            counter++;
                        } 
                    }
                }
            }
        }
    }
    console.log(counter);
}

combination([25])