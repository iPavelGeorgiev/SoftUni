function extractIncreasingSubsequenceFromArray(arr) {
   return arr
      .filter((v, i, a) => v >= a[i - 1] || i == 0)
      .join("\n");
}

console.log(extractIncreasingSubsequenceFromArray(
   [1, 3, 8, 4, 10, 12, 3, 2, 24]
));