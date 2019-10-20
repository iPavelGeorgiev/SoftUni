function addAndRemoveElements(input) {
   let array = [];
   let counter = 1;
   for (const command of input) {
      if (command === "add") {
         array.push(counter);
      } else {
         array.pop();
      }

      counter++;
   }

   return array.length ? array.join("\n") : "Empty";
}

console.log(addAndRemoveElements(
   ['add', 'add', 'remove', 'add', 'add']
));