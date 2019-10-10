function arrivingInKathmandu(input) {
   let validatePattern = /^(?<name>[A-Za-z\d@$#!?]+)=(?<length>\d+)<<(?<code>[\w\W]+?)$/;

   while ((line = input.shift()) !== "Last note") {
      let validateCode = validatePattern.exec(line);

      if (validateCode !== null) {
         let nameOfMountain = validateCode.groups.name.match(/[A-Za-z\d]/g).join("");
         let length = Number(validateCode.groups.length);
         let geohashCode = validateCode.groups.code;

         if (geohashCode.length === length) {
            console.log(`Coordinates found! ${nameOfMountain} -> ${geohashCode}`);
         } else {
            console.log("Nothing found!");
         }
      } else {
         console.log("Nothing found!");
      }
   }
}

arrivingInKathmandu(
   [ '!@Ma?na?sl!u@=7<<tv58ycb4845',
  'E!ve?rest=.6<<tuvz26',
  '!K@2.,##$=4<<tvnd',
  '!Shiha@pan@gma##9<<tgfgegu67',
  '!###Anna@pur@na##=16<<tv5dekdz8x11ddkc',
  'Last note' ]
)