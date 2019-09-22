function triangleOfNumbers(n) {
    for (let f = 1; f <= n; f++) {
        let print = ``
        for (let s = 1; s <= f; s++) {
            print += `${f} `
        }
        console.log(print);
    }
}

triangleOfNumbers(5)