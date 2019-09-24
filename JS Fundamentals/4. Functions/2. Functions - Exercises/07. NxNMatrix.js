function NxNMatrix(n) {
    let print = new Array(n)
    .fill(n)
    .map(() => new Array(n)
    .fill(n));

    console.log(print.join(`\n`).split(",").join(" "));
}

NxNMatrix(7)