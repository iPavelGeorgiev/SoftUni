function building(input) {
    let floors = Number(input.shift());
    let rooms = Number(input.shift());

    for (let f = floors; f >= 1; f--) {
        let output = "";
        for (let r = 0; r < rooms; r++) {
            if (f == floors) {
                output += `L${f}${r} `;
            } else if (f % 2 != 0) {
                output += `A${f}${r} `;
            } else {
                output += `O${f}${r} `;
            }
        }
        console.log(output);
    }
}

building([6, 4])