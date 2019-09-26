function arrayManipulations(input) {
    let arrNums = input.shift().split(" ")
    let length = input.length;

    for (let i = 0; i < length; i++) {
        let command = input.shift().split(" ");
        let first = command[0];
        let second = command[1];
        let third = command[2];

        for (let j = 0; j < arrNums.length; j++) {
            if (first == "Add") {
                arrNums.push(second);
                break;
            } else if (first == "Remove" && arrNums[j] == second) {
                arrNums.splice(j, 1);
                break;
            } else if (first == "RemoveAt" && j == second) {
                arrNums.splice(j, 1);
                break;
            } else if (first == "Insert") {
                arrNums.splice(third, 0, second);
                break;
            }
        }
    }
    
    console.log(arrNums.join(" "));
}

arrayManipulations(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3'])