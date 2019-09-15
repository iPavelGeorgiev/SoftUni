function basketballEquipment(input) {
    let tax = Number(input.shift());

    let shoes = tax * 0.60;
    let suit = shoes * 0.80;
    let ball = suit / 4;
    let accessories = ball / 5;

    let total = tax + shoes + suit + ball + accessories;

    console.log(total.toFixed(2));
}

basketballEquipment([320])