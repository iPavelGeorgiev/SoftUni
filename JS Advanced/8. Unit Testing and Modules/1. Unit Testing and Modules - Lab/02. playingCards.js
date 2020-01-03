function playingCards(face, suit) {
   const validCardFaces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
   const validCardSuits = {
      S: "\u2660",
      H: "\u2660",
      D: "\u2666",
      C: "\u2663"
   }

   if (!validCardFaces.includes(face) || !validCardSuits[suit]) {
      throw new Error(`Invalid card: ${face}${suit}`);
   }

   return {
      face,
      suit: validCardSuits[suit],
      toString() {
         return `${this.face}${this.suit}`;
      }
   }
}

const card = playingCards("5", "S");
console.log(card.toString());