function reverseAnArrayOfNumbers(n, array) {
    let output = "";
    let arr = []

    for (let i = 0; i < n; i++) {
        arr.push(array[i]);
    }

    for (let i = arr.length - 1; i >= 0; i--) {
        output += `${arr[i]} `;
    }

    console.log(output);
}

reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50])