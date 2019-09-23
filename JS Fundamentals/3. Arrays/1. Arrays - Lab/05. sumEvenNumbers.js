function sumEvenNumbers(num) {
    let sum = 0;

    for (let i = 0; i < num.length; i++) {
        let convert = Number(num[i]);

        if (convert % 2 === 0) {
            sum += convert;
        }
    }
    
    console.log(sum);
}

sumEvenNumbers(['1','2','3','4','5','6'])