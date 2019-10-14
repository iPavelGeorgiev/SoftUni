function stringLength(...params) {
   let sumLength = params.reduce((accu, curr) => accu + curr.length, 0);
   let averageLength = Math.floor(sumLength / params.length);

   return `${sumLength}\n${averageLength}`;
}

console.log(
   stringLength('chocolate', 'ice cream', 'cake')
);