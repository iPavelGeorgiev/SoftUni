function neighborhoods(input) {
    let neighborhoods = new Map();

    let streets = input.shift().split(", ");
    for (const street of streets) {
            neighborhoods.set(street, []);
    }

    for (const line of input) {
        let tokens = line.split(" - ");
        let street = tokens[0];
        let name = tokens[1];

        if (neighborhoods.has(street)) {
            neighborhoods.get(street).push(name);
        }
    }

    let iterator = Array.from(neighborhoods.entries()).sort((a, b) => b[1].length - a[1].length);

    for (let [street, names] of iterator) {
        console.log(`${street}: ${names.length}`);
        if (names.length > 0) {
            console.log(`--${names.join(`\n--`)}`);
        }
    }
}

neighborhoods(
    [ 'Abbey Street, Herald Street, Bright Mews',
  'Bright Mews - Garry',
  'Bright Mews - Andrea',
  'Invalid Street - Tommy',
  'Abbey Street - Billy' ]
)