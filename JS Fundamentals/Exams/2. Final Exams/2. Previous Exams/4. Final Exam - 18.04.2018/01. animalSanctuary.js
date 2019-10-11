function animalSanctuary(input) {
   let n = Number(input.shift());
   let totalWeight = 0;
   let pattern = /^n:(?<name>[^;]+?);t:(?<kind>[^;]+?);c--(?<country>[A-Za-z\s]+?)$/;

   for (let i = 0; i < n; i++) {
      let msg = input.shift();
      let validateMsg = pattern.exec(msg);

      if (validateMsg !== null) {
         let animalName = validateMsg.groups.name.match(/[A-Za-z\s]/g).join("");
         let animalKind = validateMsg.groups.kind.match(/[A-Za-z\s]/g).join("");
         let country = validateMsg.groups.country;
         validateMsg[0].split("").forEach(x => {
            if (!isNaN(x)) {
               totalWeight += Number(x);
            }
         })

         console.log(`${animalName} is a ${animalKind} from ${country}`);
      }
   }
   
   console.log(`Total weight of animals: ${totalWeight}KG`);
}

animalSanctuary(
   [ '3',
  'n:M5%ar4#le@y;t:B3#e!!a2#2r;c--Australia',
  'n:G3e%6org43e;t:C€$at2%;c--Africa',
  'n:AlicE:Won;c-India' ]
)