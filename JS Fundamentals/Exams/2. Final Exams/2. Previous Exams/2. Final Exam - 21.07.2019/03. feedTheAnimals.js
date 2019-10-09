function feedTheAnimals(input) {
   let animals = {}
   let areas = {}

   while ((line = input.shift()) !== "Last Info") {
      line = line.split(":");
      let command = line[0];
      let animalName = line[1];
      let area = line[3];

      if (command === "Add") {
         let foodLimit = Number(line[2]);

         if (!animals.hasOwnProperty(animalName)) {
            animals[animalName] = foodLimit;

            if (!areas.hasOwnProperty(area)) {
               areas[area] = 1
            } else {
               areas[area] += 1
            }
         } else {
            animals[animalName] += foodLimit;
         }
      } else if (command === "Feed") {
         let feedAmount = Number(line[2]);

         if (animals.hasOwnProperty(animalName)) {
            animals[animalName] -= feedAmount;

            if (animals[animalName] <= 0) {
               console.log(`${animalName} was successfully fed`);
               delete animals[animalName];
               areas[area] -= 1;
            }
         }
      }
   }
   
   console.log("Animals:");
   let sortHungryAnimals = Object.entries(animals)
      .sort((a, b) => a[0].localeCompare(b[0]))
      .sort((a, b) => b[1] - a[1])
      .forEach(animal => {
         let name = animal[0];
         let dailyFoodLeft = animal[1];

         console.log(`${name} -> ${dailyFoodLeft}g`);
      });

   console.log("Areas with hungry animals:");
   let sortAreas = Object.entries(areas)
      .filter(x => x[1] > 0)
      .sort((a, b) => b[1] - a[1])
      .forEach(area => {
         let areaName = area[0];
         let countOfUnfedAnimals = area[1];
         console.log(`${areaName} : ${countOfUnfedAnimals}`);
      });
}

feedTheAnimals(
   ['Add:Maya:7600:WaterfallArea',
      'Add:Bobbie:6570:DeepWoodsArea',
      'Add:Adam:4500:ByTheCreek',
      'Add:Jamie:1290:RiverArea',
      'Add:Gem:8730:WaterfallArea',
      'Add:Maya:1230:WaterfallArea',
      'Add:Jamie:560:RiverArea',
      'Feed:Bobbie:6300:DeepWoodsArea',
      'Feed:Adam:4650:ByTheCreek',
      'Feed:Jamie:2000:RiverArea',
      'Last Info']
)