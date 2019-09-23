function printNthElement(input) {
    let arrElements = input.slice();
    let step = Number(arrElements.pop()); 
    let output = "";

    for (let i = 0; i < arrElements.length; i += step) {
        output += `${arrElements[i]} `;
    }

    console.log(output);
}

printNthElement(['5', '20', '31', '4', '20', '2'])