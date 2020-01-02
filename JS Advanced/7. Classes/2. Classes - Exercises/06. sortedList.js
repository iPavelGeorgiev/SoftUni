class List {
   constructor() {
      this.arr = [];
      this.size = 0;
   }

   add(element) {
      this.arr.push(element);
      this.arr.sort((a, b) => a - b);
      this.size++;
   }

   remove(index) {
      if (this.arr[index] !== undefined) {
         this.size--;
         this.arr.splice(index, 1);
      } else {
         throw new TypeError('Index not found!');
      }
   }

   get(index) {
      if (this.arr[index] !== undefined) {
         return this.arr[index];
      } else {
         throw new TypeError('Index not found!');
      }
   }
}

let list = new List();
list.add(2);
list.add(10);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
console.log(list.size);