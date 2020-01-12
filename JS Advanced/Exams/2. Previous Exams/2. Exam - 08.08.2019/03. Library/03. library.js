class Library {
   constructor(libraryName) {
      this.libraryName = libraryName;
      this.subscribers = [];
      this.subscriptionTypes = {
         normal: Number(this.libraryName.length),
         special: Number(this.libraryName.length * 2),
         vip: Number.MAX_SAFE_INTEGER
      }
   }

   subscribe(name, type) {
      if (!this.subscriptionTypes.hasOwnProperty(type)) {
         throw new Error(`The type ${type} is invalid`);
      }

      const foundSubscriber = this.subscribers.find(s => s.name === name);

      if (foundSubscriber) {
         foundSubscriber.type = type;
      } else {
         this.subscribers.push({
            name,
            type,
            books: []
         })
      }
      
      return foundSubscriber
      ? foundSubscriber
      : this.subscribers[this.subscribers.length - 1]
   }

   unsubscribe(name) {
      const foundSubscriberIdx = this.subscribers.findIndex(s => s.name === name);

      if (foundSubscriberIdx === -1) {
         throw new Error(`There is no such subscriber as ${name}`);
      }

      this.subscribers.splice(foundSubscriberIdx, 1);

      return this.subscribers;
   }

   receiveBook(subscriberName, bookTitle, bookAuthor) {
      const foundSubscriber = this.subscribers.find(s => s.name === subscriberName);

      if (!foundSubscriber) {
         throw new Error(`There is no such subscriber as ${subscriberName}`);
      }

      const subType = foundSubscriber.type;
      const subTypeLimit = this.subscriptionTypes[subType];
      const ownedBooks = foundSubscriber.books.length;

      if (ownedBooks >= subTypeLimit) {
         throw new Error(`You have reached your subscription limit ${subTypeLimit}!`)
      }

      foundSubscriber.books.push({
         title: bookTitle,
         author: bookAuthor
      })

      return foundSubscriber;
   }

   showInfo() {
      if(!this.subscribers.length) {
         return `${this.libraryName} has no information about any subscribers`;
      }

      return this.subscribers
      .map(e => {
         const books = e.books
            .map(b => `${b.title} by ${b.author}`)
            .join(", ");

         return `Subscriber: ${e.name}, Type: ${e.type}\nReceived books: ${books}`;
      })
      .join("\n")
   }
}

let lib = new Library('Lib');

lib.subscribe('Peter', 'normal');
lib.subscribe('John', 'special');

lib.receiveBook('John', 'A Song of Ice and Fire', 'George R. R. Martin');
lib.receiveBook('Peter', 'Lord of the rings', 'J. R. R. Tolkien');
lib.receiveBook('John', 'Harry Potter', 'J. K. Rowling');
console.log(lib);

