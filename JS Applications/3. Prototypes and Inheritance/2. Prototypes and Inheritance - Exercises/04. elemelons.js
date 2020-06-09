function solve() {
   class Melon {
       constructor(weight, melonSort) {
           if (new.target === Melon) {
               throw new Error("Abstract class cannot be instantiated directly");
           }
           
           this.weight = weight;
           this.melonSort = melonSort;
           this.element = this.constructor.name.slice(0, -5);
       }

       get elementIndex() {
           return this.weight * this.melonSort.length;
       }

       toString() {
           return `Element: ${this.element}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;
       }
   }

   class Watermelon extends Melon {
       constructor(weight, melonSort) {
           super(weight, melonSort);
       }
   }

   class Firemelon extends Melon {
       constructor(weight, melonSort) {
           super(weight, melonSort);
       }
   }

   class Earthmelon extends Melon {
       constructor(weight, melonSort) {
           super(weight, melonSort);
       }
   }

   class Airmelon extends Melon {
       constructor(weight, melonSort) {
           super(weight, melonSort);
       }
   }

   class Melolemonmelon extends Watermelon {
       constructor(weight, melonSort) {
           super(weight, melonSort);
           this.element = "Water";
           this.elements = ["Fire", "Earth", "Air", "Water"];
           this.index = 0;
       }

       morph(){
         if(this.index >= this.elements.length){
             this.index = 0;
         }

         this.element = this.elements[this.index++];
     }
   }

   return {
       Melon,
       Watermelon,
       Firemelon,
       Earthmelon,
       Airmelon,
       Melolemonmelon,
   };
}

const melonClasses = solve();
const watermelon = new melonClasses.Watermelon(12.5, "Kingsize");
console.log(watermelon.toString());

// Element: Water
// Sort: Kingsize
// Element Index: 100