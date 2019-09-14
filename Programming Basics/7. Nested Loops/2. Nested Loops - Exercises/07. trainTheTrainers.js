function trainTheTrainers(input) {
    let juryCount = Number(input.shift());
    let presentationName = input.shift();
    let finalAssessment = 0;
    let counter = 0;

    while (presentationName != "Finish") {
        let sumGrades = 0;
        for (let i = 1; i <= juryCount; i++) {
            let grade = Number(input.shift());
            sumGrades += grade;
            counter++;
        }
        console.log(`${presentationName} - ${(sumGrades / juryCount).toFixed(2)}.`);
        finalAssessment += sumGrades;
        presentationName = input.shift();
    }
    finalAssessment /= counter;
    console.log(`Student's final assessment is ${finalAssessment.toFixed(2)}.`);
}

trainTheTrainers(['2','While-Loop','6.00','5.50','For-Loop', '5.84','5.66','Finish'])