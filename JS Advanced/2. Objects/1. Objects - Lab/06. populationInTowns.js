function populationInTowns(input) {
   let obj = {};

   for (const line of input) {
      let [town, population] = line.split(" <-> ");
      population = Number(population);

      if (!obj[town]) {
         obj[town] = 0;
      }

      obj[town] += population;
   }

   let output = "";
   for (const kvp of Object.entries(obj)) {
      let [town, population] = kvp;
      output += `${town} : ${population}\n`;
   }
   
   return output;
}

console.log(populationInTowns(
   [
      'Istanbul <-> 100000',
      'Honk Kong <-> 2100004',
      'Jerusalem <-> 2352344',
      'Mexico City <-> 23401925',
      'Istanbul <-> 1000'
   ]
));