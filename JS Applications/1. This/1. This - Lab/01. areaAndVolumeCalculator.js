function area() {
   return this.x * this.y;
};

function vol() {
   return this.x * this.y * this.z;
};

function areaAndVolumeCalculator(areaFunc, volFunc, string) {
   return JSON.parse(string)
      .map(obj => {
         const area = Math.abs(areaFunc.call(obj));
         const volume = Math.abs(volFunc.call(obj));

         return {
            area,
            volume
         }
      })
}

console.log(areaAndVolumeCalculator(
   area, vol, '[{"x":"10","y":"-22","z":"10"},{"x":"47","y":"7","z":"-5"},{"x":"55","y":"8","z":"0"},{"x":"100","y":"100","z":"100"},{"x":"55","y":"80","z":"250"}]'
))