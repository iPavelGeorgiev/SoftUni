function sameNumbers(num) {
   let isTrue = /^(\d)\1*$/.test(num)

   let sum = [...num.toString()]
      .reduce((accu, curr) => accu + Number(curr), 0);
   return `${isTrue}\n${sum}`;
}

console.log(
   sameNumbers(2222222)
);