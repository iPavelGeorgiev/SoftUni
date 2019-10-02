function easterShopping(input) {
    let listOfShops = input.shift().split(" ")
    let n = Number(input.shift());

    for (let i = 0; i < n; i++) {
        let command = input.shift().split(" ");

        if (command[0] === "Include") {
            let addShop = command[1];

            listOfShops.push(addShop);
        } else if (command[0] === "Visit") {
            let position = command[1];
            let numShops = Number(command[2]);

            if (position === "first" && numShops <= listOfShops.length) {
                listOfShops.splice(0, numShops);
            } else if (position === "last" && 
            numShops <= listOfShops.length) {
                listOfShops.splice(-numShops);
            }
        } else if (command[0] === "Prefer") {
            let firstIndex = Number(command[1]);
            let secondIndex = Number(command[2]);

            if (listOfShops[firstIndex] !== undefined && 
                listOfShops[secondIndex] !== undefined) {
                    let temp = listOfShops[firstIndex];

                    listOfShops[firstIndex] = listOfShops[secondIndex];
                    listOfShops[secondIndex] = temp
                }
        } else if (command[0] === "Place") {
            let shop = command[1]
            let insertIndex = Number(command[2]);

            if (listOfShops[insertIndex] !== undefined) {
                listOfShops.splice(insertIndex + 1, 0, shop);
            }
        }
    }

    console.log("Shops left:");
    console.log(listOfShops.join(" "));
}

easterShopping([ 'Bershka CandyStore ThriftShop Armani Groceries ToyStore PeakStore',
'5',
'Include HM',
'Visit first 2',
'Visit last 1',
'Prefer 3 1',
'Place Library 2' ])