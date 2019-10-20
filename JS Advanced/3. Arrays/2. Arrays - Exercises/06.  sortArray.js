function sortArray(arr) {
   return arr
      .sort((a, b) => a.length - b.length || a.localeCompare(b))
      .join("\n");
}

console.log(sortArray(
   ['alpha', 'beta', 'gamma']
));