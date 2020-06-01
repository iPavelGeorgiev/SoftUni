function orderRectangles(input) {
   function area() {
      return this.width * this.height;
   }

   function compareTo(obj) {
      return obj.area() - this.area() || obj.width - this.width;
   }

   return input.map(x => ({
         width: x[0],
         height: x[1],
         area,
         compareTo,
      }))
      .sort((a, b) => a.compareTo(b));
}

const test = orderRectangles([[10, 5], [3, 20], [5, 12]]);
console.log(test);