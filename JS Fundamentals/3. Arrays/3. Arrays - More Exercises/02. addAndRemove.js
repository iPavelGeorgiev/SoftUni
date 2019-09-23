function addAndRemove(input) {
    let output = [];

    input.forEach(function (value, index) {
        if (value === "add") {
            output.push(index + 1);
        } else if (value === "remove") {
            output.pop();
        }
    })

    if (output.length === 0) {
        console.log("Empty");
    } else {
        console.log(output.join(" "));
    }
}

addAndRemove(['add', 'add', 'remove', 'add', 'add'])