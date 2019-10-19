function negativePositiveNumbers(input) {
   return input.reduce((accu, curr) => {
      curr < 0 ? accu.unshift(curr) : accu.push(curr);
      return accu;
   }, []).join("\n");
}

console.log(negativePositiveNumbers(
   [3, -2, 0, -1]
));