function printEveryNthElementFromAnArray(arr) {
   let nStep = Number(arr.pop());
   return arr.filter((num, i) => i % nStep === 0).join("\n");
}

console.log(printEveryNthElementFromAnArray(
   ['5', '20', '31', '4', '20', '2']
));