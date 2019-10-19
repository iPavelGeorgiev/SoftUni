function diagonalSums(matrix) {
   let diagonals = matrix.reduce((accu, curr, i) => {
      return [accu[0] + curr[i], 
      accu[1] + curr[curr.length - (1 + i)]];
   }, [0, 0]);

   return diagonals.join(" ");
}

console.log(diagonalSums(
   [[3, 5, 17],
   [-1, 7, 14],
   [1, -8, 89]]
));