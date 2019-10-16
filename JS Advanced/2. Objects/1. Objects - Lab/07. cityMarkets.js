function cityMarkets(input) {
   let townsAndProducts = {};

   for (const line of input) {
      let [town, product, other] = line.split(" -> ");
      let [sales, price] = other.split(" : ");
      let totalPrice = Number(sales) * Number(price);

      if (!townsAndProducts.hasOwnProperty(town)) {
         townsAndProducts[town] = {};
      }

      townsAndProducts[town][product] = totalPrice;
   }

   let output = [];
   for (const [town, obj] of Object.entries(townsAndProducts)) {
      output.push(`Town - ${town}`);

      for (const [product, totalPrice] of Object.entries(obj)) {
         output.push(`$$$${product} : ${totalPrice}`)  
      }
   }
   
   return output.join("\n");
}

console.log(cityMarkets(
   [
      'Sofia -> Laptops HP -> 200 : 2000',
      'Sofia -> Raspberry -> 200000 : 1500',
      'Sofia -> Audi Q7 -> 200 : 100000',
      'Montana -> Portokals -> 200000 : 1',
      'Montana -> Qgodas -> 20000 : 0.2',
      'Montana -> Chereshas -> 1000 : 0.3'
   ]
));