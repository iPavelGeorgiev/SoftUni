function triplesOfLatinLetters(n) { 
    for (let f = 1; f <= n; f++) {
        for (let s = 1; s <= n; s++) {
            for (let t = 1; t <= n; t++) {
                console.log(`${String.fromCharCode(96 + f)}${String.fromCharCode(96 + s)}${String.fromCharCode(96 + t)}`);
            }
        }
    }
}

triplesOfLatinLetters(3)