function foodOrder(input) {
    let budget = Number(input.shift());
    let product = input.shift();
    let productPrice = Number(input.shift());
    let iDelivery = true;
    let price = 0;
    let counter = 0;

    while (product != "Order") {
        counter++
        price += productPrice;

        if (iDelivery == true && price < budget) {
            price += 2.50;
            iDelivery = false;
        }

        if (price > budget) {
            console.log("You will exceed the budget if you order this!");
            counter--
            price -= productPrice;
        }

        product = input.shift();
        productPrice = Number(input.shift());
    }
    console.log(`You ordered ${counter} items!`);
    console.log(`Total: ${price.toFixed(2)}`);
}

foodOrder(['25.00', 'Soup', '3.50', 'Salad', '7.80', 'Fish', '9.00', 'Cake', '5.00', 'Ice cream', '2.00', 'Order'])