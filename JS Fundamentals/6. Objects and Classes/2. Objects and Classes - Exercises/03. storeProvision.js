function storeProvision(currentStock, orderProducts) {
    let list = {};

    for (let i = 0; i < currentStock.length; i += 2) {
        let productName = currentStock[i];
        let productQuantity = currentStock[i + 1];

        list[productName] = Number(productQuantity);
    }

    for (let i = 0; i < orderProducts.length; i += 2) {
        let productName = orderProducts[i];
        let productQuantity = orderProducts[i + 1];

        if (list.hasOwnProperty(productName)) {
            list[productName] += Number(productQuantity);
        } else {
            list[productName] = Number(productQuantity);
        }
    }

    for (let product in list) {
        console.log(`${product} -> ${list[product]}`);
    }
}

storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ])