class ChristmasDinner {
   constructor(budget) {
      this.budget = budget;
      this.dishes = [];
      this.products = [];
      this.guests = {};
   }

   get budget() {
      return this._budget
   }

   set budget(value) {
      if (value < 0) {
         throw new Error("The budget cannot be a negative number");
      }
      
      return this._budget = value
   }

   shopping(product) {
      const productType = product[0];
      const price = Number(product[1]);

      if (this.budget < price) {
         throw new Error("Not enough money to buy this product");
      }

      this.budget -= price;
      this.products.push(productType);
      return `You have successfully bought ${productType}!`;
   }

   recipes(recipe) {
      let recipeName = recipe.recipeName;
      let productsList = recipe.productsList;
      let allAvailable = true;

      productsList.forEach(product => {
         if (!(this.products.includes(product))) {
            allAvailable = false;
         }
      });

      if (allAvailable) {
         const obj = {
            recipeName,
            productsList
         }

         this.dishes.push(obj);
         return `${recipeName} has been successfully cooked!`
      } else {
         throw new Error("We do not have this product");
      }
   }

   inviteGuests(name, dish) {
      const findDish = this.dishes.some(x => x.recipeName === dish);

      if (!findDish) {
         throw new Error("We do not have this dish");
      }

      if (Object.keys(this.guests).includes(name)) {
         throw new Error("This guest has already been invited");
      }

      this.guests[name] = dish;
      return `You have successfully invited ${name}!`
   }

   showAttendance() {
      let print = [];

      Object.entries(this.guests)
         .forEach(([guest, dish]) => {
            const kvp = this.dishes.find(x => {
               return x.recipeName === dish;
            });

            const products = kvp.productsList.join(", ");

            print.push(`${guest} will eat ${dish}, which consists of ${products}`);
         })

      return print.join("\n");
   }
}

let dinner = new ChristmasDinner(100);

dinner.shopping(['Salt', 1])
console.log(dinner.budget);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);

dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});

dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});

dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');

console.log(dinner.showAttendance());