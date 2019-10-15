function fruit(fruit, weightInGrams, pricePerKg) {
   let weightInKg= weightInGrams / 1000;
   let totalPrice = weightInKg * pricePerKg;

   return `I need $${totalPrice.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${fruit}.`;
}

console.log(
   fruit('orange', 2500, 1.80)
);