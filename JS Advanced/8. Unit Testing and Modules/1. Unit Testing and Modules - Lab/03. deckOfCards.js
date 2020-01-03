function printDeckOfCards(cards) {
   const validCardFaces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
   const validCardSuits = {
      S: "\u2660",
      H: "\u2660",
      D: "\u2666",
      C: "\u2663"
   }

   return cards.reduce((accu, curr) => {
      const face = curr.slice(0, curr.length - 1);
      const suit = curr.slice(-1);

      try {
         if (!validCardFaces.includes(face) || !validCardSuits[suit]) {
            throw new Error(`Invalid card: ${curr}`);
         }

         accu.push(`${face}${validCardSuits[suit]}`);
      } catch (error) {
         console.log(error.message);
      }

      return accu;
   }, [])
   .join(" ");
}

console.log(printDeckOfCards(['AS', '10D', 'KH', '2C']));