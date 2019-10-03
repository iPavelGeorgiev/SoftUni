function helloFrance(input) {
    let items = input.shift().split("|")
    let budget = Number(input.shift());
    let listOfItems = [];

    let prices = [];
    let totalItemsPriceBefore = 0;
    let totalItemsPriceAfter = 0;
    
    items.forEach(item => {
        let [name, price] = item.split("->");
        price = Number(price);

        if (budget - price>= 0){
            if (name === "Clothes" && price <= 50.00) {
                    budget -= price;
                    listOfItems.push(price);
                    totalItemsPriceBefore += price;
            } else if (name === "Shoes" && price <= 35.00) {
                    budget -= price;
                    listOfItems.push(price);
                    totalItemsPriceBefore += price;
            } else if (name === "Accessories" && price <= 20.50) {
                    budget -= price;
                    listOfItems.push(price);
                    totalItemsPriceBefore += price;
            }
        }
    });

    listOfItems.forEach(item => {
        calculate = item * 1.40;
        totalItemsPriceAfter += calculate;
        prices.push(calculate.toFixed(2));
    })

    budget += totalItemsPriceAfter;
    totalItemsPriceAfter -= totalItemsPriceBefore;

    console.log(prices.join(" "));
    console.log(`Profit: ${totalItemsPriceAfter.toFixed(2)}`);
    
    if (budget >= 150) {
        console.log("Hello, France!");
    } else {
        console.log("Time to go.");
    }
}

helloFrance([ 'Clothes->43.30|Shoes->25.25|Clothes->36.52|Clothes->20.90|Accessories->15.60',
'120' ])