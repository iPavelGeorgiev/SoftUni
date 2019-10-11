function activationKeys(input) {
   input = input[0].split("&");
   let validatePattern = /^[A-Za-z\d]+$/;
   let keys = [];

   for (let key of input) {
      let valid = false;
      if (key.match(validatePattern) !== null) {
         key = key.toUpperCase().split("");

         if (key.length === 16) {
            
            for (let i = 4; i <= 16; i += 5) {
               key.splice(i, 0, "-");
            }
            valid = true;
         } else if (key.length === 25) {
            for (let i = 5; i <= 25; i += 6) {
               key.splice(i, 0, "-");
            }
            valid = true;
         }
      }
      if (valid === true) {
         key = key.map(x => {
            if (!isNaN(x)) {
               return 9 - Number(x);
            } else {
               return x;
            }
         })
         keys.push(key.join(""));
      }
   }

   console.log(keys.join(", "));
}

activationKeys(
   [ 't1kjZU764zIME6Dl9ryD0g1U8&-P4*(`Q>:x8\yE1{({X/Hoq!gR.&rg93bXgkmILW188m&KroGf1prUdxdA4ln&U3WH9kXPY0SncCfs' ]
)