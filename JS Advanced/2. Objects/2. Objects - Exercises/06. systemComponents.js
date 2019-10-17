function systemComponents(input) {
   function ifFalseCreateProperties(system, component) {
      if (!database.hasOwnProperty(system)) {
         database[system] = {};
      }

      if (!database[system].hasOwnProperty(component)) {
         database[system][component] = [];
      }
   }

   const sortByTwoCriteria = (a, b) => {
      // Sorts by amount of components, in descending order, as first criteria, and by alphabetical order as second criteria
      let componentALength = Object.keys(database[a]).length;
      let componentBLength = Object.keys(database[b]).length;
      return componentBLength - componentALength || a.localeCompare(b);
   }

   // Store all data in object
   let database = {};

   // Set 'database' object properties
   for (const line of input) {
      let [system, component, subcomponent] = line.split(" | ");
      ifFalseCreateProperties(system, component);
      database[system][component].push(subcomponent);
   }

   let sortedSystems = Object.keys(database)
      .sort(sortByTwoCriteria);
   let output = [];

   for (const system of sortedSystems) {
      output.push(system);
      const sortedComponents = Object.keys(database[system])
         .sort((a, b) => {
            // Sorts by amount of subcomponents, in descending order.
            let subcomponentsALength = database[system][a].length;
            let subcomponentsBLength = database[system][b].length;
            return subcomponentsBLength - subcomponentsALength;
         });
      
      for (const component of sortedComponents) {
         output.push(`|||${component}`);

         database[system][component].forEach(subcomponent => {
            output.push(`||||||${subcomponent}`);
         });
      }
   }

   return output.join("\n");
}

console.log(systemComponents(
   [
      'SULS | Main Site | Home Page',
      'SULS | Main Site | Login Page',
      'SULS | Main Site | Register Page',
      'SULS | Judge Site | Login Page',
      'SULS | Judge Site | Submittion Page',
      'Lambda | CoreA | A23',
      'SULS | Digital Site | Login Page',
      'Lambda | CoreB | B24',
      'Lambda | CoreA | A24',
      'Lambda | CoreA | A25',
      'Lambda | CoreC | C4',
      'Indice | Session | Default Storage',
      'Indice | Session | Default Security'

   ]
));