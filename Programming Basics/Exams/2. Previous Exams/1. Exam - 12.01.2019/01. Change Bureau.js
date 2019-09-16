function changeBureau(input) {
    let bitcoins = Number(input.shift()) * 1168;
    let cny = (Number(input.shift()) * 0.15) * 1.76;
    let commission = Number(input.shift());

    let levaToEuro = (bitcoins + cny) / 1.95;

    let addCommission = levaToEuro * commission / 100;

    let total = levaToEuro - addCommission;

    console.log(total.toFixed(2));
}

changeBureau([1, 5, 5])