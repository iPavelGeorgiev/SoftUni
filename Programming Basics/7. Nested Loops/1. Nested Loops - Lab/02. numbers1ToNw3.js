function numbers1ToNw3(input) {
    let n = Number(input.shift());

    for (let i = 1; i <= n; i += 3) {
        console.log(i);
    }
}

numbers1ToNw3([10])