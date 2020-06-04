(function () {
   Array.prototype.last = function () {
      return this[this.length - 1];
   };

   Array.prototype.skip = function (n) {
      return this.slice(n);
   };

   Array.prototype.take = function (n) {
      return this.slice(0, n);
   };

   Array.prototype.sum = function () {
      return this.reduce((accu, curr) => accu + curr, 0);
   };

   Array.prototype.average = function () {
      return this.sum() / this.length;
   };

}());

const test = [15, 30, 45, 60, 75, 90];

console.log(test.skip(3));
console.log(test.take(2));
console.log(test.last());
console.log(test.sum());
console.log(test.average());
console.log(test);