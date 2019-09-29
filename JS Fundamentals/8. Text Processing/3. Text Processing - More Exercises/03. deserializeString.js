function deserializeString(input) {
   let outputString = "";
   let outputArr = [];

   for (let i = 0; i < input.length; i++) {
      if (input[i] === "end") {
         break;
      }

      let char = input[i].split(":")[0];
      let indexArr = input[i].split(":")[1].split("/");

      for (let index = 0; index < indexArr.length; index++) {
         outputArr[indexArr[index]] = char;
      }
   }

   outputString = outputArr.join("");
   console.log(outputString);
}

deserializeString(['a:0/2/4/6', 'b:1/3/5', 'end'])