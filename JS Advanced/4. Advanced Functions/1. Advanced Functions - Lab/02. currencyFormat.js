function currencyFormatter(separator, symbol, symbolFirst, value) {
   let result = Math.trunc(value) + separator;
   result += value.toFixed(2).substr(-2,2);
   return symbolFirst ? symbol + ' ' + result : result + ' ' + symbol
}

function result(formatter) {
   return (value) => {
      return formatter(",", "$", true, value);
   }
}

let dollarFormatter = result(currencyFormatter);
console.log(dollarFormatter(5345));   // $ 5345,00
console.log(dollarFormatter(3.1429)); // $ 3,14
console.log(dollarFormatter(2.709));  // $ 2,71
