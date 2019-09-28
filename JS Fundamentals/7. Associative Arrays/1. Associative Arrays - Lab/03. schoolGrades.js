function schoolGrades(input) {
    let allGrades = new Map();

    for (const student of input) {
        let tokens = student.split(" ");
        let name = tokens[0];
        let grades = tokens.slice(1).map(Number);

        if (!allGrades.has(name)) {
            allGrades.set(name, grades);
        } else {
            allGrades.set(name, allGrades.get(name).concat(grades));
        }
    }

    let iterate = Array.from(allGrades.entries()).sort((a, b) => average(a, b));

    for (const [name, grades] of iterate) {
        console.log(`${name}: ${grades.join(", ")}`);
    }

    function average(a, b) {
        let aSum = 0;

        for (let i = 0; i < a[1].length; i++) {
            aSum += a[1][i];
        }

        let bSum = 0;

        for (let i = 0; i < b[1].length; i++) {
            bSum += b[1][i];
        }

        let aAverage = aSum / a[1].length;
        let bAverage = bSum / b[1].length;

        return aAverage - bAverage;
    }
}

schoolGrades(
    [ 'Lilly 4 6 6 5', 'Tim 5 6', 'Tammy 2 4 3', 'Tim 6 6' ]
)