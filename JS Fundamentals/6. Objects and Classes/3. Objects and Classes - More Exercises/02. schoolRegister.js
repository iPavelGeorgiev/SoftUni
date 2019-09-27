function schoolRegistry(input) {
   let register = {};

   for (const line of input) {
       let [stName, grade, stScore] = line.split(", ");
       let name = stName.split(": ")[1];
       let nextGrade = (Number(grade.split(": ")[1]) + 1);
       let score = Number(stScore.split(": ")[1]);

       if (score >= 3) {
           if (!register.hasOwnProperty(nextGrade)) {
               register[nextGrade] = {
                   nameArr: [],
                   score: 0,
               }
           }
           register[nextGrade]["nameArr"].push(name);
           register[nextGrade]["score"] += score;
       }
   }
   for (const grade in register) {
       let averageScore = (register[grade]["score"] / register[grade]["nameArr"].length).toFixed(2);
       let students = register[grade]["nameArr"].join(", ");
       console.log(`${grade} Grade`);
       console.log(`List of students: ${students}`);
       console.log(`Average annual grade from last year: ${averageScore}`);
       console.log();
   }
}

schoolRegistry([
   "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
   "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
   "Student name: George, Grade: 8, Graduated with an average score: 2.83",
   "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
   "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
   "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
   "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
   "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
   "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
   "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
   "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
   "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"]);