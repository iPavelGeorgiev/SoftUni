function charactersInRange(firstChar, secondChar) {
    let firstCode = firstChar.charCodeAt(0);
    let secondCode = secondChar.charCodeAt(0);

    let start = Math.min(firstCode, secondCode);
    let end = Math.max(firstCode, secondCode);

    let print = [];

    for (let i = start + 1; i < end; i++) {
        print.push(String.fromCharCode(i));
    }

    console.log(print.join(" "));
}

charactersInRange("C", "#")