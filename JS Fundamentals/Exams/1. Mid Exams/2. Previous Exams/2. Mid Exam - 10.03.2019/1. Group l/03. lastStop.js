function lastStop(input) {
    let paintings = input.shift().split(" ").map(Number)

    let command = input.shift();

    while (command != "END" && input.length > 0) {
        command = command.split(" ");
        let name = command.shift();
        command = command.map(Number);

        if (name === "Change") {
            let paintingIndex = paintings.indexOf(command[0]);
            let newPainting = command[1];

            if (paintings[paintingIndex] !== undefined) {
                paintings.splice(paintingIndex, 1, newPainting);
            }
        } else if (name === "Hide") {
            let paintingIndex = Number(paintings.indexOf(command[0]));

            if (paintings[paintingIndex] !== undefined) {
                paintings.splice(paintingIndex, 1);
            }
        } else if (name === "Switch") {
            let firstIndex = paintings.indexOf(command[0]);
            let secondIndex = paintings.indexOf(command[1]);

            if (paintings[firstIndex] !== undefined &&
                paintings[secondIndex] !== undefined) {
                    paintings.splice(firstIndex, 1, command[1]);
                    paintings.splice(secondIndex, 1, command[0]);
                }
        } else if (name === "Insert") {
            let insertIndex = command[0] + 1;
            let paintingNumber = command[1];

            if (insertIndex >= 0 && insertIndex <= paintings.length) {
                paintings.splice(insertIndex, 0, paintingNumber);
            }
        } else if (name === "Reverse") {
            paintings.reverse();
        }

        command = input.shift();
    }

    console.log(paintings.join(" "));
}

lastStop([ '77 120 115 101 101 97 78 88 112 111 108 101 111 110',
'Insert 5 32',
'Switch 97 78',
'Hide 88',
'Change 120 117',
'END' ])