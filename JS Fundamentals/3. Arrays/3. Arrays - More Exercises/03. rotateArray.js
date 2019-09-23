function rotateArray(input) {
    let output = input.slice();
    let rotations = output.pop();

    for (let i = 1; i <= rotations; i++) {
        let value = output.pop();
        output.unshift(value);
    }

    console.log(output.join(" "));
}

rotateArray(['1', '2', '3', '4', '2'])