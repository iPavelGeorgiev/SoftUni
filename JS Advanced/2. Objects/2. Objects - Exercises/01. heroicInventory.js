function heroicInventory(data) {
   let heroData = [];

   for (let line of data) {
      let [name, level, items] = line.split(" / ");
      level = Number(level);
      items = items ? items.split(", ") : [];

      heroData.push({ name, level, items })
   }

   return JSON.stringify(heroData);
}

console.log(heroicInventory(
   ['Isacc / 25 / Apple, GravityGun',
   'Derek / 12 / BarrelVest, DestructionSword',
   'Hes / 1 / Desolator, Sentinel, Antara']
));