function onTheWayToAnnapurna(input) {
   let diary = {}
   
   while ((line = input.shift()) !== "END") {
      let [command, store, items] = line.split("->");

      if (command === "Add") {
         items = items.split(",");
         if (!diary.hasOwnProperty(store)) {
            diary[store] = [...items];
         } else {
            diary[store].push(...items);
         }
      } else if (command === "Remove") {
         if (diary.hasOwnProperty(store)) {
            delete diary[store];
         }
      }
   }

   sortAndPrint()

   function sortAndPrint() {
      console.log("Stores list:");
      Object.entries(diary)
         .sort((a, b) => {
            return b[1].length - a[1].length || b[0].localeCompare(a[0]);
         })
         .forEach(tuple => {
            let [store, items] = tuple;

            console.log(store);
            items.forEach(item => console.log(`<<${item}>>`))
         })
   }
}

onTheWayToAnnapurna(
   ['Add->PeakSports->Map,Navigation,Compass',
      'Add->Paragon->Sunscreen',
      'Add->Groceries->Dried-fruit,Nuts',
      'Add->Groceries->Nuts',
      'Add->Paragon->Tent',
      'Remove->Paragon',
      'Add->Pharmacy->Pain-killers',
      'END']
)