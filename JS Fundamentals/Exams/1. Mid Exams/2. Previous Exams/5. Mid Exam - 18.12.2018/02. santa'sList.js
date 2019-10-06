function santaList(input) {
    let badKids = input.shift().split("&");

    let kid = input.shift();

    while (kid !== "Finished!") {
        let [command, name, newName] = kid.split(" ");

        if (command === "Bad") {
            let searchKid = badKids.includes(name);

            if (!searchKid) {
                badKids.unshift(name);
            }
        } else if (command === "Good") {
            let index = badKids.indexOf(name);

            if (index !== -1) {
                badKids.splice(index, 1);
            }
        } else if (command === "Rename") {
            let oldKidIndex = badKids.indexOf(name);

            if (oldKidIndex !== -1) {
                badKids.splice(oldKidIndex, 1, newName);
            }
        } else if (command === "Rearrange") {
            let index = badKids.indexOf(name);

            if (index !== -1) {
                badKids.splice(index, 1);
                badKids.push(name);    
            }
        }

        kid = input.shift();
    }

    console.log(badKids.join(", "));
}

santaList(
    [ 'Joshua&Aaron&Walt&Dustin&William',
  'Good Walt',
  'Bad Jon ',
  'Rename Aaron Paul',
  'Rearrange Jon',
  'Rename Peter George',
  'Finished!' ]
)