function arrayManipulator(arr, commands) {
    for (let i = 0; i < commands.length; i++) {
        let tokens = commands[i].slice().split(" ");
        let name = tokens.shift();
        tokens = tokens.map(Number);

        if (name === "print") break;

        if (name === "add") {
            let addIndex = tokens[0];
            let element = tokens[1];

            arr.splice(addIndex, 0, element);
        } else if (name === "addMany") {
            let addIndex = tokens.shift();

            arr.splice(addIndex, 0, ...tokens);
        } else if (name === "contains") {
            let findIndex = arr.indexOf(tokens[0]);

            console.log(findIndex);
        } else if (name === "remove") {
            let removeIndex = tokens[0];

            arr.splice(removeIndex, 1);
        } else if (name === "shift") {
            let times = tokens[0];

            for (let i = 0; i < times; i++) {
                let shifter = arr.shift()
                arr.push(shifter)
            }
        } else if (name === "sumPairs") {
            let result = [];

            for (let j = 0; j < arr.length; j += 2) {
                let first = arr[j]
                let second = 0;

                if (j + 1 < arr.length) {
                    second = arr[j + 1];
                }

                let pair = first + second;
                result.push(pair);
            }
            arr = result.slice();
        }
    }

    console.log(arr);
}

arrayManipulator([1, 2, 3, 4, 5],
    ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print'])