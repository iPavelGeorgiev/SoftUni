class Vacation {
   constructor(organizer, destination, budget) {
      this.organizer = organizer;
      this.destination = destination;
      this.budget = budget;
      this.kids = {};
   }

   isRegistered(name, grade) {
      if (this.kids[grade]) {
         return this.kids[grade].filter(x => x.includes(name)).length === 1;
      }
      return false
   }

   registerChild(name, grade, budget) {
      if (budget < this.budget) {
         return `${name}'s money is not enough to go on vacation to ${this.destination}.`
      }

      if (this.isRegistered(name, grade)) {
         return `${name} is already in the list for this ${this.destination} vacation.`
      }

      if (this.kids[grade]) {
         this.kids[grade].push(`${name}-${budget}`);
      } else {
         this.kids[grade] = [`${name}-${budget}`]
      }

      return this.kids[grade];
   }

   removeChild(name, grade) {
      if (!this.isRegistered(name, grade)) {
         return `We couldn't find ${name} in ${grade} grade.`
      }

      for (let i = 0; i < this.kids[grade].length; i++) {
         if (this.kids[grade][i].includes(name)) {
            this.kids[grade].splice(i, 1);
            return this.kids[grade];
         }
      }
   }

   get numberOfChildren() {
      return Object.values(this.kids).reduce((r, x) => r += x.length, 0);
   }

   toString() {
      if (this.numberOfChildren === 0) {
         return `No children are enrolled for the trip and the organization of ${this.organizer} falls out...`
      }

      let firstLine = `${this.organizer} will take ${this.numberOfChildren} children on trip to ${this.destination}`;
      let sortedKeys = Object.keys(this.kids).sort((a, b) => a - b);
      let output = sortedKeys.map(x => {
         if (this.kids[x].length > 0) {
            return `Grade: ${x}\n` + this.kids[x].map((k, i) => `${i + 1}. ${k}`).join('\n')
         }
      })
         .join('\n')

      return firstLine + '\n' + output + '\n'
   }
}