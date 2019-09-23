function commonElements(arr1, arr2) {
    let output = "";

    for (let f = 0; f < arr1.length; f++) {
        for (let s = 0; s < arr1.length; s++) {
            if (arr1[f] === arr2[s]) {
                output += `${arr1[f]}\n`
            }
        }
    }

    console.log(output);
}

commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2'])