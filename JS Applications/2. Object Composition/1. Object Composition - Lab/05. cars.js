function cars(input) {
   const cars = new Map();

   const commands = {
      create: (name, _, parent) => {
         parent = cars.get(parent) || null;
         // In real life Object.create(null) is not OK!
         const newCar = Object.create(parent);
         cars.set(name, newCar);
      },
      set: (name, key, value) => {
         const car = cars.get(name);
         car[key] = value;
      },
      print: (name) => {
         const car = cars.get(name);
         const output = [];

         for (const key in car) {
            output.push(`${key}:${car[key]}`);
         }

         console.log(output.join(', '));
      }
   }

   input.forEach(e => {
      const [cmd, ...params] = e.split(' ');
      commands[cmd](...params);
   });
}

cars(['create c1',
   'create c2 inherit c1',
   'set c1 color red',
   'set c2 model new',
   'print c1',
   'print c2']); 