function race(input) {
   let namesList = input.shift().split(", ");
   let namePattern = /[A-Za-z]/g;
   let distancePattern = /\d/g;

   let participants = {}

   while ((line = input.shift()) !== "end of race") {
      let name = line.match(namePattern).join("")
      let distance = line
         .match(distancePattern)
         .reduce((accu, curr) => {
            return accu + Number(curr);
         }, 0);

      if (namesList.includes(name)) {
         if (!participants.hasOwnProperty(name)) {
            participants[name] = distance;
         } else {
            participants[name] += distance;
         }
      }
   }

   let sortWinners = Object.entries(participants)
   .sort((a, b) => b[1] - a[1])
   .slice(0, 3)
   .forEach((winner, index) => {
      let suffix = "";

      switch (index) {
         case 0: suffix = "st";
            break;
         case 1: suffix = "nd";
            break;
         case 2: suffix = "rd";
            break
      }

      console.log(`${(index + 1) + suffix} place: ${winner[0]}`);
   });
}

race(
   ['George, Peter, Bill, Tom',
      'G4e@55or%6g6!68e!!@',
      'R1@!3a$y4456@',
      'B5@i@#123ll',
      'G@e54o$r6ge#',
      '7P%et^#e5346r',
      'T$o553m&6',
      'end of race']
)