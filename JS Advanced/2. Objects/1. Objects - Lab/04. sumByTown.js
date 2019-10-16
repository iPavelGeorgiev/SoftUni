function sumByTown(arr) {
   let townsTotalIncome = {};

   for (let i = 0; i < arr.length; i += 2) {
      let town = arr[i];
      let income = Number(arr[i + 1]);

      if (!townsTotalIncome.hasOwnProperty(town)) {
         townsTotalIncome[town] = 0;
      }

      townsTotalIncome[town] += income;
   }

   return JSON.stringify(townsTotalIncome);
}

console.log(sumByTown(
   [
      'Sofia',
      '20',
      'Varna',
      '3',
      'Sofia',
      '5',
      'Varna',
      '4'
   ]
));