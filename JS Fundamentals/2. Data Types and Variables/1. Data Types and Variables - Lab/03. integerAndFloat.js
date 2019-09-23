function integerAndFloat(first, second, third) {
    let sum = first + second + third;
    sum = sum % 1 == 0 ? sum += " - Integer" : sum += " - Float";
    console.log(sum);
}

integerAndFloat(9, 100, 1.1)