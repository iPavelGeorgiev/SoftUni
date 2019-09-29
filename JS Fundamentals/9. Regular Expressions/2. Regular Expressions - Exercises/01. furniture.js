function furniture(string) {
   let pattern = />>(?<name>\w+)<<(?<price>\d+\.?\d*)!(?<quantity>\d+)\b/;
   let totalPrice = 0;

   console.log("Bought furniture:");

   while ((line = string.shift()) !== "Purchase") {
      let item = pattern.exec(line);

      if (item !== null) {
         console.log(item.groups.name);
         let sum = Number(item.groups.price) * Number(item.groups.quantity);
         totalPrice += sum;
      }
   }

   console.log(`Total money spend: ${totalPrice.toFixed(2)}`);
}

furniture([ '>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase' ])