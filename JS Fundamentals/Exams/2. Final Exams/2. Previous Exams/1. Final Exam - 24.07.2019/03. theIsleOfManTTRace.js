function theIsleOfManTTRace(input) {
   let pattern = /^([#$%*&])(?<name>[A-Za-z]+)\1=(?<codeLength>\d+)!!(?<code>.+)$/;

   for (let racer of input) {
      let geohashcode = pattern.exec(racer);

      if (geohashcode !== null) {
         let name = geohashcode.groups.name;
         let length = Number(geohashcode.groups.codeLength);
         let code = geohashcode.groups.code;

         if (code.length === length) {
            code = code.split("")
               .map(char => String.fromCharCode(char.charCodeAt() + length))
               .join("");
            console.log(`Coordinates found! ${name} -> ${code}`);
         } else {
            console.log("Nothing found!");
         }
      } else {
         console.log("Nothing found!");
      }
   }
}

theIsleOfManTTRace(
   ['%GiacomoAgostini%=7!!hbqw',
      '&GeoffDuke*=6!!vjh]zi',
      'JoeyDunlop=10!!lkd,rwazdr',
      'Mike??Hailwood=5!![pliu',
      '#SteveHislop#=16!!df%TU[Tj(h!!TT[S']
)