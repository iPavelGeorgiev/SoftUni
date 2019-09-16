function flowerShop(input) {
   let numChrysanthemums = Number(input.shift());
   let numRoses = Number(input.shift());
   let numTulips = Number(input.shift());
   let season = input.shift();
   let totalFlowers = numChrysanthemums + numRoses + numTulips;
   let holiday = input.shift();
   let price = 0;

   if (season == "Spring" || season == "Summer") {
       price = (2.00 * numChrysanthemums) + (4.10 * numRoses) + (2.50 * numTulips);
   } else {
       price = (3.75 * numChrysanthemums) + (4.50 * numRoses) + (4.15 * numTulips);
   }

   if (holiday == "Y") {
       price *= 1.15;
   }

   if (numTulips > 7 && season == "Spring") {
    price *= 0.95;
   }

   if (numRoses >= 10 && season == "Winter") {
    price *= 0.90;
   }

   if (totalFlowers > 20) {
    price *= 0.80;
   }
   price += 2;

   console.log(price.toFixed(2))
   
}

flowerShop(['2', '4', '8', 'Spring', 'Y'])