function listProcessor(input) {
   const map = {
      add: function (arr, str) {
         return [...arr, str];
      },
      remove: function (arr, str) {
         return arr.filter(x => x !== str);
      },
      print: function (arr, _) {
         console.log(arr.join(","));
         return arr;
      },
   }

   let output = [];

   return input.forEach(x => {
      const [cmd, str] = x.split(" ");
      output = map[cmd](output, str);
   });
}

listProcessor(["add pesho", "print", "add george", "add peter", "remove peter","print"]);