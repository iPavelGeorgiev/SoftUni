function concert(input) {
   let bandsAndMembers = new Map();
   let bandsTime = new Map();
   let bandCheck = input.pop();

   while ((line = input.shift()) !== "start of concert") {
      let [command, bandName, membersOrTime] = line.split("; ");

      if (command === "Add") {
         let bandMembers = [...new Set(membersOrTime.split(", "))]

         saveBandAndMembers(bandName, bandMembers);
      } else if (command === "Play") {
         let time = Number(membersOrTime);

         saveBandTime(bandName, time);
      }
   }

   getTotalTime();
   sortAndPrintBands();
   printBandCheck();

   function saveBandAndMembers(band, members) {
      if (!bandsAndMembers.has(band)) {
         bandsAndMembers.set(band, members);
      } else {
         let currentMembers = bandsAndMembers.get(band);
         let newMembers = currentMembers.concat(members);

         bandsAndMembers.set(band, [...new Set(newMembers)]);
      }
   }

   function saveBandTime(band, time) {
      if (!bandsTime.has(band)) {
         bandsTime.set(band, time);
      } else {
         let currentTime = bandsTime.get(band);
         let newTime = currentTime + time;

         bandsTime.set(band, newTime);
      }
   }
   
   function getTotalTime() {
      let totalTime = 0;

      for (let time of bandsTime.values()) {
         totalTime += time;
      }

      console.log(`Total time: ${totalTime}`);
   }

   function sortAndPrintBands() {
      [...bandsTime.entries()].sort((a, b) => {
         if (a[1] !== b[1]) {
            return b[1] - a[1];
         } else {
            return a[0].localeCompare(b[0])
         }
      }).forEach(kvp => console.log(`${kvp[0]} -> ${kvp[1]}`));
   }

   function printBandCheck() {
      console.log(bandCheck);
      bandsAndMembers.get(bandCheck).forEach(member => console.log(`=> ${member}`));
   }
}

concert(
   [ 'Add; The Beatles; John Lennon, Paul McCartney',
  'Add; The Beatles; Paul McCartney, George Harrison',
  'Add; The Beatles; George Harrison, Ringo Starr',
  'Play; The Beatles; 3698',
  'Play; The Beatles; 3828',
  'start of concert',
  'The Beatles' ]
)