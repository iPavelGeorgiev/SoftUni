function coffeeMachine(input) {
   let type = {
      'coffee caffeine': 0.80,
      'coffee decaf': 0.90,
      'tea': 0.80,
      'milk': (price) => Math.ceil(10 * price * 0.10) / 10,
      'sugar': 0.10
   }

   let incomes = 0;

   for (let line of input) {
      let price = 0;
      let tokens = line.split(', ');
      let coins = Number(tokens.shift());
      let typeDrink = tokens.shift();

      if (typeDrink === 'coffee') {
         let typeCoffee = tokens.shift();
         price = type[`${typeDrink} ${typeCoffee}`];
      } else {
         price = type[typeDrink];
      }

      if (tokens[0] === 'milk') {
         tokens.shift();
         price += type['milk'](price);
      }

      if (Number(tokens[0]) > 0 && Number(tokens[0]) <= 5) {
         price += type['sugar'];
      }

      if (coins >= price) {
         console.log(`You ordered ${typeDrink}. Price: $${price.toFixed(2)} Change: $${(coins - price).toFixed(2)}`)
         incomes += price;
      } else {
         console.log(`Not enough money for ${typeDrink}. Need $${(price - coins).toFixed(2)} more.`)
      }
   }

   console.log(`Income Report: $${incomes.toFixed(2)}`);
}

coffeeMachine(['1.00, coffee, caffeine, milk, 4', '0.40, tea, milk, 2', '1.00, coffee, decaf, 0'])