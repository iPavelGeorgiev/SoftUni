function isExcellent(input) {
  let grade = Number(input.shift());

  if (grade >= 5.5) {
    console.log("Excellent!");
  }
}

isExcellent([6])