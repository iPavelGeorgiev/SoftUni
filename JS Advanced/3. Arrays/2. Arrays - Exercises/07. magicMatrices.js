function magicMatrices(matrix) {
   let isTrue = true;
   let sum = matrix[0].reduce((accu, curr) => accu + curr, 0);

   for (let i = 0; i < matrix.length; i++) {
      let row = matrix[i].reduce((accu, curr) => accu + curr, 0);
      let column = matrix.reduce((accu, curr) => accu + curr[i], 0);

      if (row !== column || row !== sum || column !== sum) {
         isTrue = false;
         break;
      }
   }

   return isTrue;
}

console.log(magicMatrices(
   [[4, 5, 6], [6, 5, 4], [5, 5, 5]]
));