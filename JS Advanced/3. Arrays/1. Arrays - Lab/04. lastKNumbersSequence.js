function lastKNumbersSequence(n, k) {
   function sumLastK(arr, k) {
      k = arr.length > k ? k : arr.length;
      let sum = 0;
      for (let i = 1; i <= k; i++) {
         sum += arr[arr.length - i];
      }
      return sum;
   }

   let outputArr = [1];
   for (let i = 1; i < n; i++) {
      console.log(outputArr);
      outputArr[i] = sumLastK(outputArr, k);
   }

   return outputArr.join(' ');
}

console.log(lastKNumbersSequence(6, 3));