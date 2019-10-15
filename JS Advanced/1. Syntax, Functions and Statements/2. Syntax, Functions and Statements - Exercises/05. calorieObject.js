function calorieObject(arr) {
   let obj = {};

   for (let i = 0; i < arr.length; i += 2) {
      let food = arr[i];
      let calories = Number(arr[i + 1]);

      obj[food] = calories;
   }

   return obj;
}

console.log(
   calorieObject(['Yoghurt', 48, 'Rise', 138, 'Apple', 52])
);