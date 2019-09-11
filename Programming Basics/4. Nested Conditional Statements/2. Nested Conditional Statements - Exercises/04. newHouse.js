function newHouse(input) {
    let flowers = input.shift();
    let flowersQuantity = Number(input.shift());
    let budget = Number(input.shift());
    let price = 0;
    let discount = 0;
    let totalPrice = 0;

    if (flowers === "Roses") {
        price = 5 * flowersQuantity;
        if (flowersQuantity > 80) {
            discount = price - (price * 0.10);
            totalPrice = budget - discount;
        } else if (flowersQuantity <= 80) {
            totalPrice = budget - price;
        }
    } else if (flowers === "Dahlias") {
        price = 3.80 * flowersQuantity;
        if (flowersQuantity > 90) {
            discount = price - (price * 0.15);
            totalPrice = budget - discount;
        } else if (flowersQuantity <= 90) {
            totalPrice = budget - price;
        }
    } else if (flowers === "Tulips") {
        price = 2.80 * flowersQuantity;
        if (flowersQuantity > 80) {
            discount = price - (price * 0.15)
            totalPrice = (budget - discount);
        } else if (flowersQuantity <= 80) {
            totalPrice = budget - price;
        }
    } else if (flowers === "Narcissus") {
        if (flowersQuantity < 120) {
            price = ((3 * flowersQuantity) * 1.15)
            totalPrice = budget - price;
        } else if (flowersQuantity >= 120) {
            price = 3 * flowersQuantity;
            totalPrice = budget - price;
        }
    } else if (flowers === "Gladiolus") {
        if (flowersQuantity < 80) {
            price = ((2.50 * flowersQuantity) * 1.20)
            totalPrice = budget - price;
        } else if (flowersQuantity >= 80) {
            price = 2.50 * flowersQuantity;
            totalPrice = budget - price;
        }
    }

    if (budget >= price) {
        console.log(`Hey, you have a great garden with ${flowersQuantity} ${flowers} and ${totalPrice.toFixed(2)} leva left.`);
    } else if (budget < price) {
        totalPrice = Math.abs(totalPrice).toFixed(2);
        console.log(`Not enough money, you need ${totalPrice} leva more.`);
    }
}

newHouse(["Roses", 55, 250])