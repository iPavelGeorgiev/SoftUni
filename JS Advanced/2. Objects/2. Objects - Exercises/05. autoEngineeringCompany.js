function autoEngineeringCompany(input) {
   function ifFalseCreateProperties(brand, model) {
      // Create a car brand or model properties if they don't exist
      if (!cars.hasOwnProperty(brand)) {
         cars[brand] = {};
      }

      if (!cars[brand].hasOwnProperty(model)) {
         cars[brand][model] = 0;
      }
   }

   let cars = {};

   for (const line of input) {
      let [brand, model, produced] = line.split(" | ");
      produced = Number(produced);

      ifFalseCreateProperties(brand, model);
      cars[brand][model] += produced;
   }

   const carBrands = Object.keys(cars);
   let output = [];

   for (const brand of carBrands) {
      output.push(brand);
      /*Get an array of car models specific to the brand. Loop through them and create/push string with model and number of produced units to output*/
      Object.keys(cars[brand])
         .forEach(model => {
            let kvp = `###${model} -> ${cars[brand][model]}`;
            return output.push(kvp);
         });
   }

   return output.join("\n");
}

console.log(autoEngineeringCompany(
   [
      'Audi | Q7 | 1000',
      'Audi | Q6 | 100',
      'BMW | X5 | 1000',
      'BMW | X6 | 100',
      'Citroen | C4 | 123',
      'Volga | GAZ-24 | 1000000',
      'Lada | Niva | 1000000',
      'Lada | Jigula | 1000000',
      'Citroen | C4 | 22',
      'Citroen | C5 | 10'
   ]
));