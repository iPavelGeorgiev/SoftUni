function addition(a) {
   return (b) => {
      return a + b;
   }
}

let add5 = addition(5);
console.log(add5(2));
console.log(add5(3));