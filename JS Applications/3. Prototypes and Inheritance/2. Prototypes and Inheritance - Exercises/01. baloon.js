function solve() {
   class Balloon {
      color;
      gasWeight;
      constructor(color, gasWeight) {
         this.color = color;
         this.gasWeight = gasWeight;
      }
   }

   class PartyBalloon extends Balloon {
      #ribbon;
      constructor(color, gasWeight, ribbonColor, ribbonlength) {
         super(color, gasWeight);
         this.#ribbon = {
            color: ribbonColor,
            length: ribbonlength,
         };
      }

      get ribbon() {
         return this.#ribbon;
      }
   }

   class BirthdayBalloon extends PartyBalloon {
      #text;
      constructor(color, gasWeight, ribbonColor, ribbonlength, text) {
         super(color, gasWeight, ribbonColor, ribbonlength);
         this.#text = text;
      }

      get text() {
         return this.#text;
      }
   }

   return {
      Balloon: Balloon,
      PartyBalloon: PartyBalloon,
      BirthdayBalloon: BirthdayBalloon
   };
}

const create = solve();

const Ballon = create.Balloon;
const PartyBalloon = create.PartyBalloon;
const BirthdayBalloon = create.BirthdayBalloon;

const ballon = new Ballon("blue", 6.45);
console.log(ballon);
const partyBalloon = new PartyBalloon("green", 48.2, "white", 0.2);
console.log(partyBalloon);
partyBalloon.ribbon = "";
console.log(partyBalloon.ribbon);

const birthdayBalloon = new BirthdayBalloon("black", 499.29, "purple", 2, "Happy Birthday JavaScript");
console.log(birthdayBalloon);
console.log(birthdayBalloon.text);