function greatestCommonDivisor_GCD(a, b) {
   if (b == 0) {
       return a;
   }

   return greatestCommonDivisor_GCD(b, a % b);
}

console.log(greatestCommonDivisor_GCD(15, 5))