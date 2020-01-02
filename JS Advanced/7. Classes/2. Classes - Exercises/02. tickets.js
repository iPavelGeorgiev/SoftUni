function solve(input, prop) {
   class Ticket {
      constructor(destination, price, status) {
         this.destination = destination;
         this.price = Number(price);
         this.status = status;
      }

      static sortTickets(tickets, prop) {
         return [...tickets].sort((a, b) => {
            if (typeof a[prop] === "string") {
               return a[prop].localeCompare(b[prop]);
            } else {
               return a[prop] - b[prop];
            }
         })
      }
   }

   const tickets = input.reduce((accu, curr) => {
      const [destination, price, status] = curr.split("|");

      let ticket = new Ticket(destination, price, status);

      accu.push(ticket);

      return accu;
   }, []);

   return Ticket.sortTickets(tickets, prop);
}

console.log(
   solve(
      ['Philadelphia|94.20|available',
         'New York City|95.99|available',
         'New York City|95.99|sold',
         'Boston|126.20|departed'],
      'destination'
   )
);