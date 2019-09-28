function storage(input) {
    let products = new Map();

    for (let string of input) {
        let tokens = string.split(" ");
        let product = tokens[0];
        let quantity = Number(tokens[1]);

        if (!products.has(product)) {
            products.set(product, quantity);
        } else {
            let currQuantity = products.get(product);
            let newQuantity = currQuantity + quantity;
            products.set(product, newQuantity);
        }
    }

    let iterable = Array.from(products.entries());

    for (let [key, value] of iterable) {
        console.log(`${key} -> ${value}`);
    }
}

storage(
    [ 'tomatoes 10', 'coffee 5', 'olives 100', 'coffee 40' ]
)