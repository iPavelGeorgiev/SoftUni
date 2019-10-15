function roadRadar(arr) {
   areasLimit = {
      motorway: 130,
      interstate: 90,
      city: 50,
      residential: 20
   }

   let [speed, area] = arr;
   let speedDifference = Math.abs(areasLimit[area] - speed);
   let printWarning = "";

   if (speedDifference > 0 && speedDifference <= 20) {
      printWarning = "speeding";
   } else if (speedDifference > 20 && speedDifference <= 40) {
      printWarning = "excessive speeding";
   } else if (speedDifference > 40) {
      printWarning = "reckless driving";
   }

   return printWarning;
}

console.log(
   roadRadar([120, 'interstate'])
);