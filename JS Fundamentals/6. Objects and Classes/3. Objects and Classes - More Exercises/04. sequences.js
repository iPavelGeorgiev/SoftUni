function sequences(input) {
   let myArr = [];
   for (const str of input) {
       let curentArr = JSON.parse(str)
           .map(Number)
           .sort((a, b) => b - a);
       let currSum = curentArr.reduce((a, b) => a + b);
       if (!myArr.find(arr => arr.reduce((a, b) => a + b) === currSum)) {
           myArr.push(curentArr);
       }

   }
   let outputArr = myArr
       .sort((a, b) => a.length - b.length)
       .forEach(e => console.log(`[${e.join(", ")}]`));
}

sequences([
   "[7.14, 7.180, 7.339, 80.099, 1]",
   "[7.339, 80.0990, 7.140000, 7.18]",
   "[7.339, 7.180, 7.14, 80.099]"
]);