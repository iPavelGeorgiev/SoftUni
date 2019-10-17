function storeCatalogue(input) {
   const alphaSort = (a, b) => a.localeCompare(b);
   let catalogue = {};

   for (const line of input) {
      let [name, price] = line.split(" : ");
      price = Number(price);
      let initialChar = name[0];

      if (!catalogue.hasOwnProperty(initialChar)) {
         catalogue[initialChar] = {};
      }

      catalogue[initialChar][name] = price;
   }

   let sortedInitialChars = Object.keys(catalogue).sort((alphaSort));
   let output = [];

   for (const initial of sortedInitialChars) {
      output.push(initial)
      Object.keys(catalogue[initial])
         .sort(alphaSort)
         .forEach(product => {
            let kvp = `  ${product}: ${catalogue[initial][product]}`
            return output.push(kvp);
         })
   }

   return output.join("\n");
}

console.log(storeCatalogue(
   ['Appricot : 20.4',
      'Fridge : 1500',
      'TV : 1499',
      'Deodorant : 10',
      'Boiler : 300',
      'Apple : 1.25',
      'Anti-Bug Spray : 15',
      'T-Shirt : 10']
));