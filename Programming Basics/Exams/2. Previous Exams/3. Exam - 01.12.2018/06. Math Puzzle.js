function mathPuzzle(input) {
    let num = Number(input.shift());
    let isNaN = true;
    for (let f = 1; f <= 30; f++){
        for (let s = 1; s <= 30; s++){
            for (let t = 1; t <= 30; t++){
                if (f < s && s < t) {
                    let plus = f + s + t;
                    if (plus == num) {
                        console.log(`${f} + ${s} + ${t} = ${plus}`);
                        isNaN = false;
                    }
                }

                if (f > s && s > t) {
                    let multiply = f * s * t;
                    if (multiply == num) {
                        console.log(`${f} * ${s} * ${t} = ${multiply}`);
                        isNaN = false;
                    }
                }
            }
        }
    }
    if (isNaN == true) {
        console.log("No!");
    }
}

mathPuzzle([12])