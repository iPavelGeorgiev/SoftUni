function lowestPricesInCities(array) {
   let products = new Map();

   for (let line of array) {
      let [town, product, price] = line.split(" | ");
      if (!products.has(product)) {
         products.set(product, new Map());
      }
      products.get(product).set(town, Number(price));
   }

   let output = [];
   for (let [product, others] of products) {
      let [town, price] = [...others].reduce((a, b) => {
         if (a[1] > b[1]) return b;
         return a;
      });
      output.push(`${product} -> ${price} (${town})`);
   }

   return output.join("\n");
}

console.log(lowestPricesInCities(
   [
      'Sofia City | Audi | 100000',
      'Sofia City | BMW | 100000',
      'Sofia City | Mitsubishi | 10000',
      'Sofia City | Mercedes | 10000',
      'Sofia City | NoOffenseToCarLovers | 0',
      'Mexico City | Audi | 1000',
      'Mexico City | BMW | 99999'
   ]));