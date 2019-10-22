function sortArr(arr, order) {
   return arr
      .sort((a, b) => order === "asc" ? a - b : b - a);
}

console.log(sortArr([14, 7, 17, 6, 8], 'asc'));