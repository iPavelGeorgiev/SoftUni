function vaporWinterSale(input) {
   input = input[0].split(", ");
   let pattern = /(?<game>[A-Za-z\d\s]+)(?:\-(?<price>\d+\.?\d*)|\:(?<expansion>.*))/;
   let gamesWithExpansion = {}
   let gamesWithoutExpansion = {}

   for (let game of input) {
      let gameFormat = pattern.exec(game);

      if (gameFormat !== null) {
         let name = gameFormat.groups.game;
         let price = gameFormat.groups.price;
         let expansion = gameFormat.groups.expansion;
         
         if (price !== undefined) {
            gamesWithoutExpansion[name] = Number(price);
         } else if (expansion !== undefined) {
            if (gamesWithoutExpansion.hasOwnProperty(name)) {
               let currPrice = gamesWithoutExpansion[name];
               gamesWithExpansion[name] = {}
               gamesWithExpansion[name]["price"] = currPrice * 1.20;
               gamesWithExpansion[name]["expansion"] = expansion;
               delete gamesWithoutExpansion[name];
            }
         }
      }
   }
   
   let expansionGames = Object.entries(gamesWithExpansion)
      .map(game => [game[0], game[1].expansion, game[1].price * 0.50])
      .sort((a, b) => a[2] - b[2])
      .forEach(game => console.log(`${game[0]} - ${game[1]} - ${game[2].toFixed(2)}`));
   
   let withoutExpansion = Object.entries(gamesWithoutExpansion)
      .map(game => [game[0], game[1] * 0.80])
      .sort((a, b) => b[1] - a[1])
      .forEach(game => console.log(`${game[0]} - ${game[1].toFixed(2)}`));
}

vaporWinterSale(
   [ 'Center Strike-14.99, FortLite-25, BattleShield 5-64.74, BattleShield 5:CoD edition, Dog of War-45, Dead Red Redemption-100, Dead Red Redemption:no DLC' ]
)