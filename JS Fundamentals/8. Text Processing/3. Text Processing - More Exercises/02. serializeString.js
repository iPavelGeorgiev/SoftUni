function serializeString(input) {
   input = input.shift().split("");
   let myObj = {};

   for (let i = 0; i < input.length; i++) {
      if (!myObj.hasOwnProperty(input[i])) {
         myObj[input[i]] = [];
      }
      
      myObj[input[i]].push(i);
   }

   for (const char in myObj) {
      let arr = myObj[char].join("/")
      console.log(`${char}:${arr}`);
   }
}

serializeString(['abababa', ''])