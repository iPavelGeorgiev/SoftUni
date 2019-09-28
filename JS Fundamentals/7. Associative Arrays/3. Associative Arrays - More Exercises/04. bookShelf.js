function bookShelf(input) {
   let library = {};

   for (const command of input) {
       if (command.includes("->")) {
           createShelf(command);
       } else {
           checkAndAdd(command);
       }
   }

   let sorted = Object.entries(library).sort((a, b) => b[1].count - a[1].count);

   for (const shelf of sorted) {
       let id = shelf[0];
       let genre = Object.keys(shelf[1])[0];
       let count = shelf[1].count;
       delete shelf[1].count;
       console.log(`${id} ${genre}: ${count}`);
       let currentBookObj = library[id][genre];
       for (const book in currentBookObj) {
           console.log(`--> ${book}: ${currentBookObj[book]}`);
       }
   }

   function createShelf(command) {
       let [id, genre] = command.split(" -> ");
       if (!library.hasOwnProperty(id)) {
           library[id] = {};
           library[id][genre] = {};
           library[id].count = 0;
       }
   }
   
   function checkAndAdd(command) {
       let [title, authorGenre] = command.split(": ");
       let [author, genre] = authorGenre.split(", ");
       for (const key in library) {
           if (library[key].hasOwnProperty(genre)) {
               library[key].count += 1;
               library[key][genre][title] = author;
           }
       }
   }
}

bookShelf(
   [ '1 -> history',
  '1 -> action',
  'Death in Time: Criss Bell, mystery',
  '2 -> mystery',
  '3 -> sci-fi',
  'Child of Silver: Bruce Rich, mystery',
  'Hurting Secrets: Dustin Bolt, action',
  'Future of Dawn: Aiden Rose, sci-fi',
  'Lions and Rats: Gabe Roads, history',
  '2 -> romance',
  'Effect of the Void: Shay B, romance',
  'Losing Dreams: Gail Starr, sci-fi',
  'Name of Earth: Jo Bell, sci-fi',
  'Pilots of Stone: Brook Jay, history' ]
)