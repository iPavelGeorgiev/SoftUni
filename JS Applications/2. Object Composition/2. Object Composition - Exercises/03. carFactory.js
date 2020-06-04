function carFactory(obj) {
   const engines = [
       { power: 90, volume: 1800 },
       { power: 120, volume: 2400 },
       { power: 200, volume: 3500 },
   ];

   return {
       model: obj.model,
       engine: engines.find(x => obj.power <= x.power),
       carriage: { type: obj.carriage, color: obj.color },
       wheels: Array(4).fill(obj.wheelsize % 2 === 0 ? obj.wheelsize - 1 : obj.wheelsize)
   };
}

console.log(
   carFactory(
      {
         model: 'Opel Vectra',
         power: 110,
         color: 'grey',
         carriage: 'coupe',
         wheelsize: 17
      }
   )
);