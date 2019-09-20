function uniquePINCodes(input) {
    let firstNum = Number(input.shift())
    let secondNum = Number(input.shift())
    let thirdNum = Number(input.shift())

    for (let i = 1; i <= firstNum; i++){
        for (let j = 1; j <= secondNum; j++){
            for (let k = 1; k <= thirdNum; k++){
                if (i % 2 == 0 && k % 2 == 0) {
                    if (j == 2 || j == 3 || j == 5 || j == 7) {
                        console.log(`${i} ${j} ${k}`);
                    }
                }
            }
        }
    }

}

uniquePINCodes([3, 5, 5])