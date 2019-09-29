function santasSecretHelper(input) {
   let key = Number(input.shift());
   let pattern = /^.*?@(?<name>[A-Za-z]+)[^\@\-\!\:\>]*?!(?<behavior>[G|N])!.*?$/;

   while ((line = input.shift()) !== "end") {
      let decodedMsg = line
         .split("")
         .map(char => {
            return String.fromCharCode(char.charCodeAt() - key);
         })
         .join("");

      let validate = pattern.exec(decodedMsg);

      if (validate !== null) {
         let name = validate.groups.name;
         let behavior = validate.groups.behavior;

         if (behavior === "G") {
            console.log(name);
         }
      }
   }
}

santasSecretHelper(
   [ '3',
  'N}eideidmk$\'(mnyenmCNlpamnin$J$',
  'ddddkkkkmvkvmCFrqqru-nvevek$J$nmgievnge',
  'ppqmkkkmnolmnnCEhq/vkievk$Q$',
  'yyegiivoguCYdohqwlqh/kguimhk$J$',
  'end' ]
)