function winningTicket(input) {
   let jackpotPattern = /(\${20}|\#{20}|\@{20}|\^{20})/;
   let winningPattern = /^[^\$\#\@\^]*(?<f>\${6,}|\#{6,}|\@{6,}|\^{6,})[^\$\#\@\^]+(?<s>\${6,}|\#{6,}|\@{6,}|\^{6,})[^\$\#\@\^]*$/

   let tickets = input.shift().split(/,\s+/);

   for (let ticket of tickets) {
      ticket = ticket.trim();
      if (ticket.length === 20) {

         if (ticket.match(jackpotPattern) !== null) {
            let symbol = ticket[0];

            console.log(`ticket "${ticket}" - 10${symbol} Jackpot!`);
         } else if ((win = winningPattern.exec(ticket)) !== null) {
            if (win.groups.f[0] === win.groups.s[0]) {
               let fLength = win.groups.f.length;
               let sLength = win.groups.s.length;
               let corSymbol = win.groups.f[0];

               if (fLength >= sLength) {
                  console.log(`ticket "${ticket}" - ${sLength}${corSymbol}`);
               } else {
                  console.log(`ticket "${ticket}" - ${fLength}${corSymbol}`);
               }
            }
         } else {
            console.log(`ticket "${ticket}" - no match`);
         }
      } else {
         console.log("invalid ticket");
      }
   }
}

winningTicket(
   [ '$$$$$$$$$$$$$$$$$$$$   ,   aabb  , th@@@r@@eemo@@@@r@ey,     th@@@@@@eemo@@@@@@ey' ]
)