function fitnessCenter(input) {
    let numVisitors = Number(input.shift());
    let back = 0;
    let chest = 0;
    let legs = 0;
    let abs = 0;
    let proteinShakes = 0;
    let proteinBars = 0;
    let peopleTraining = 0;
    let proteinsBought = 0;

    for (let i = 1; i <= numVisitors; i++) {
        let person = input.shift();

        switch (person) {
            case "Back": back++;
            peopleTraining++;
            break;
            case "Chest": chest++;
            peopleTraining++;
            break;
            case "Legs": legs++;
            peopleTraining++;
            break;
            case "Abs": abs++;
            peopleTraining++;
            break;
            case "Protein shake": proteinShakes += 1;
            proteinsBought++;
            break;
            case "Protein bar": proteinBars += 1;
            proteinsBought++;
            break;
        }
    }
    let percentPeopleTraining = (peopleTraining / numVisitors) * 100;
    let percentShakesBought = (proteinsBought / numVisitors) * 100;

    console.log(`${back} - back`);
    console.log(`${chest} - chest`);
    console.log(`${legs} - legs`);
    console.log(`${abs} - abs`);
    console.log(`${proteinShakes} - protein shake`);
    console.log(`${proteinBars} - protein bar`);
    console.log(`${percentPeopleTraining.toFixed(2)}% - work out`);
    console.log(`${percentShakesBought.toFixed(2)}% - protein`);

}

fitnessCenter(['10', 'Back', 'Chest', 'Legs', 'Abs', 'Protein shake', 'Protein bar', 'Protein shake', 'Protein bar', 'Legs', 'Abs'])