function arenaTier(input) {
    let gladiators = {}
    let line = input.shift();

    while (line !== "Ave Cesar") {
        if (!line.includes("vs")) {
            let [name, technique, skill] = line.split(" -> ");
            skill = Number(skill);

            if (!gladiators.hasOwnProperty(name)) {
                gladiators[name] = {}
                gladiators[name].totalSkill = 0;
            }

            if (!gladiators[name].hasOwnProperty(technique)) {
                gladiators[name][technique] = skill;
                gladiators[name].totalSkill += skill;
            } else if (skill > gladiators[name][technique]) {
                gladiators[name].totalSkill += skill - gladiators[name][technique]
                gladiators[name][technique] = skill;
            }
        } else {
            let [firstGladiator, secondGladiator] = line.split(' vs ')

            if (gladiators.hasOwnProperty(firstGladiator) &&
                gladiators.hasOwnProperty(secondGladiator)) {
                let commonSkills = Object.keys(gladiators[firstGladiator])
                    .filter(x => gladiators[secondGladiator].hasOwnProperty(x));

                if (commonSkills.length > 1) {
                    let firstTotal = gladiators[firstGladiator].totalSkill;
                    let secondTotal = gladiators[secondGladiator].totalSkill;

                    (firstTotal > secondTotal) ?
                        delete gladiators[secondGladiator] :
                        delete gladiators[firstGladiator]
                }
            }
        }

        line = input.shift();
    }

    let entries = Object.entries(gladiators)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .sort((a, b) => b[1].totalSkill - a[1].totalSkill);

    for (const gladiator of entries) {
        console.log(`${gladiator[0]}: ${gladiator[1].totalSkill} skill`);
        delete gladiator[1].totalSkill;

        Object.entries(gladiator[1])
            .sort((a, b) => a[0].localeCompare(b[0]))
            .sort((a, b) => b[1] - a[1])
            .forEach(e => console.log(`- ${e[0]} <!> ${e[1]}`));
    }
}

arenaTier(
    [ 'Pesho -> Duck -> 400',
  'Julius -> Shield -> 150',
  'Gladius -> Heal -> 200',
  'Gladius -> Support -> 250',
  'Gladius -> Shield -> 250',
  'Pesho vs Gladius',
  'Gladius vs Julius',
  'Gladius vs Gosho',
  'Ave Cesar' ]
)