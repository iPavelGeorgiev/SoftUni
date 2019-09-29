function starEnigma(input) {
   const n = Number(input.shift());
   const attackedPlanets = [];
   const destroyedPlanets = [];
   const patternCount = /[star]/gi
   const patternValidate = /^[^?!@\-!:>]*@(?<planet>[A-Za-z]+)[^?!@\-!:>]*:(?:\d+)[^?!@\-!:>]*!(?<attack>A|D)![^?!@\-!:>]*->(?:\d+)[^?!@\-!:>]*$/

   for (let i = 1; i <= n; i++) {
      let message = input.shift();
      let count = (message.match(patternCount) || []).length;
      
      let decryptMsg = message
         .split("")
         .map(char => {
            return String.fromCharCode(char.charCodeAt() - count)
         })
         .join("");
      
      if ((validMsg = patternValidate.exec(decryptMsg)) !== null) {
         let planetName = validMsg.groups.planet;
         let attackType = validMsg.groups.attack;

         if (attackType == "A") {
            attackedPlanets.push(planetName);
         } else if (attackType == "D") {
            destroyedPlanets.push(planetName);
         }
      }
   }

   console.log(`Attacked planets: ${attackedPlanets.length}`);
   attackedPlanets
   .sort((a, b) => a.localeCompare(b))
   .forEach(planet => console.log(`-> ${planet}`));

   console.log(`Destroyed planets: ${destroyedPlanets.length}`);
   destroyedPlanets
   .sort((a, b) => a.localeCompare(b))
   .forEach(planet => console.log(`-> ${planet}`));
}

starEnigma(
   [ '2',
  'STCDoghudd4=63333$D$0A53333',
  'EHfsytsnhf?8555&I&2C9555SR' ]
)