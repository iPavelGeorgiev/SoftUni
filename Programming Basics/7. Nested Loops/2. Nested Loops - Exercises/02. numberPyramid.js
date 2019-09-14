function numberPyramid(input) {
    let n = Number(input.shift());
    let current = 1;

    for (let rows = 1; rows <= n; rows++) {
        let print = "";
        for (let cols = 1; cols <= rows; cols++) {
            if (current > n) {
                break;
            }

            print += `${current} `;
            current++;
        }

        console.log(print);
    }
}

numberPyramid([7])