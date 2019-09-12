function examPreparation(input) {
    let badGrades = Number(input.shift());
    let exerciseName = "";
    let score = 0;
    let counter = 0;
    let badGradesLimit = 0;
    let lastExercise = "";

    while (exerciseName != "Enough") {
        exerciseName = input.shift();
        let grade = Number(input.shift());

        if (grade <= 4) {
            badGradesLimit++;
        }

        if (badGradesLimit == badGrades) {
            console.log(`You need a break, ${badGradesLimit} poor grades.`);
            break;
        }

        if (exerciseName != "Enough") {
            score += grade;
            lastExercise = exerciseName;
            counter++
        }
    }

    if (exerciseName == "Enough") {
        let average = score / counter; 
        console.log(`Average score: ${average.toFixed(2)}`);
        console.log(`Number of problems: ${counter}`);
        console.log(`Last problem: ${lastExercise}`);
    }
}

examPreparation([3, "Money", 6, "Story", 4, "Spring Time", 5, "Bus", 6, "Enough"])