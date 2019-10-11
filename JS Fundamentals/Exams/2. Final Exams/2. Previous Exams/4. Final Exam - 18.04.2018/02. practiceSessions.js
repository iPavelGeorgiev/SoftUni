function practiceSessions(input) {
   let roadsAndRacers = {}

   while ((line = input.shift()) !== "END") {
      line = line.split("->");
      let command = line.shift();

      if (command === "Add") {
         let [road, racer] = line;

         if (!roadsAndRacers.hasOwnProperty(road)) {
            roadsAndRacers[road] = [racer];
         } else {
            roadsAndRacers[road].push(racer);
         }
      } else if (command === "Move") {
         let [currRoad, racer, nextRoad] = line;
         let index = roadsAndRacers[currRoad].indexOf(racer);

         if (roadsAndRacers[currRoad].includes(racer)) {
            roadsAndRacers[currRoad].splice(index, 1);
         roadsAndRacers[nextRoad].push(racer);
         }
      } else if (command === "Close") {
         let road = line;

         if (roadsAndRacers.hasOwnProperty(road)) {
            delete roadsAndRacers[road];
         }
      }
   }

   sortAndPrint()

   function sortAndPrint() {
      console.log("Practice sessions:");
   let sortedRoads = Object.entries(roadsAndRacers)
      .sort((a, b) => {
         return b[1].length - a[1].length || a[0].localeCompare(b[0]);
      })
      .forEach(tuple => {
         let [road, racer] = tuple;

         console.log(road);
         for (let i = 0; i < racer.length; i++) {
            console.log(`++${racer[i]}`);
         }
      })
   }
}

practiceSessions(
   [ 'Add->Glen Vine->Steve Hislop',
  'Add->Ramsey road->John McGuinness ',
  'Add->Glen Vine->Ian Hutchinson',
  'Add->Ramsey road->Dave Molyneux',
  'Move->Ramsey road->Hugh Earnsson->Glen Vine',
  'Add->A18 Snaefell mountain road->Mike Hailwood',
  'Add->Braddan->Geoff Duke',
  'Move->A18 Snaefell mountain road->Mike Hailwood->Braddan',
  'Move->Braddan->John McGuinness->Glen Vine',
  'Close->A18 Snaefell mountain road',
  'END' ]
)