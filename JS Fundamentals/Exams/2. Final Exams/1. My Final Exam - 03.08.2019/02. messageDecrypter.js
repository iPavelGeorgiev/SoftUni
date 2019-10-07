function messageDecrypter(input) {
   let pattern = /^([\$|\%])(?<tag>[A-Z][a-z]{2,})\1: \[(?<num1>\d+)\]\|\[(?<num2>\d+)\]\|\[(?<num3>\d+)\]\|$/;
   let n = Number(input.shift());

   for (let i = 0; i < n; i++) {
      let str = input[i]
      let validate = pattern.exec(str);

      if (validate !== null) {
         let tag = validate.groups.tag;
         let firstNum = String.fromCharCode(Number(validate.groups.num1))
         let secondNum = String.fromCharCode(Number(validate.groups.num2));
         let thirdNum = String.fromCharCode(Number(validate.groups.num3));

         console.log(`${tag}: ${firstNum}${secondNum}${thirdNum}`);
      } else {
         console.log("Valid message not found!");
      }
   }
}

messageDecrypter(
   [ '3',
  'This shouldnt be valid%Taggy%: [118]|[97]|[108]|',
  '$tAGged$: [97][97][97]|',
  '$Request$: [73]|[115]|[105]|true' ]
)