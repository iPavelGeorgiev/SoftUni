function bunnyKill(input){
   let matrix = [];
   let bombs = input.pop().split(" ").filter(x => x !="");

   let dmg = 0;
   let count = 0;

   for (let i = 0; i < input.length; i++) {
       matrix[i] = input[i].split(" ").map(Number)
   }

   let rows = matrix.length;
   let cols = matrix[0].length


   for (let bomb = 0; bomb < bombs.length; bomb++) {
       let [bX, bY] = bombs[bomb].split(",").map(Number);
       let damage = matrix[bX][bY];
       if(damage > 0) {
           dmg +=  matrix[bX][bY];
           count++;
           if ((bX - 1) >= 0 && (bY - 1) >= 0)
               matrix[bX - 1][bY - 1] -= damage;
           if ((bY - 1) >= 0)
               matrix[bX][bY - 1] -= damage;
           if ((bX + 1) < rows && (bY - 1) >= 0)
               matrix[bX + 1][bY - 1] -= damage;
           if ((bX - 1) >= 0)
               matrix[bX - 1][bY] -= damage;
           if ((bX + 1) < rows)
               matrix[bX + 1][bY] -= damage;
           if ((bX - 1) >= 0 && (bY + 1) < cols)
               matrix[bX - 1][bY + 1] -= damage;
           if ((bX >= 0) && (bY + 1) < cols)
               matrix[bX][bY + 1] -= damage;
           if ((bX + 1) < rows && (bY + 1) < cols)
               matrix[bX + 1][bY + 1] -= damage;
           matrix[bX][bY] = 0;
       }
   }

   for (let r = 0; r < rows; r++) {
       for (let c = 0; c < cols; c++) {
           if(matrix[r][c] > 0) {
               count++;
               dmg += matrix[r][c];
           }
       }
   }

   console.log(dmg)
   console.log(count)
}

bunnyKill([ '10 10 10', '10 10 10', '10 10 10', '0,0' ])