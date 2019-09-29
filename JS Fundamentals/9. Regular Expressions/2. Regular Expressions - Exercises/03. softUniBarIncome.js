function softUniBarIncome(input) {
   let pattern = /%(?<name>[A-Z][a-z]+)%[^$%|.]*<(?<product>[\w]+)>[\D^$%|.]*\|(?<count>\d+)\|[\D^$%|.]*(?<price>\d+\.?\d*)\$/;
   let totalIncome = 0;

   input.forEach(line => {
      let customer = pattern.exec(line);

      if (customer !== null) {
         let name = customer.groups.name;
         let product = customer.groups.product;
         let totalPrice = customer.groups.count * customer.groups.price;

         console.log(`${name}: ${product} - ${totalPrice.toFixed(2)}`);
         totalIncome += totalPrice;
      }
   });
   console.log(`Total income: ${totalIncome.toFixed(2)}`);
}

softUniBarIncome(
   ['%George%<Croissant>|2|10.3$',
      '%Peter%<Gum>|1|1.3$',
      '%Maria%<Cola>|1|2.4$',
      'end of shift']
)