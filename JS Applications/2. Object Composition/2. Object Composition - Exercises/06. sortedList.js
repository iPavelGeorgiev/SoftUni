function sortedList() {
   return {
      elements: [],
      size: 0,
      add: function (e) {
         this.elements.push(e);
         this.elements.sort((a, b) => a - b);
         this.size = this.elements.length;
      },
      remove: function (index) {
         if (index >= this.elements.length || index < 0) {
            throw new RangeError("Invalid Index!");
         }

         this.elements.splice(index, 1);
         this.size = this.elements.length;
      },
      get: function (index) {
         if (index >= this.elements.length || index < 0) {
            throw new RangeError("Invalid Index!");
         }

         return this.elements[index];
      },
   };
}