function smallestTwoNumbers(input) {
    input.sort((a, b) => {
        return a - b;
    });

    let smallestNums = input.slice(0, 2);

    console.log(smallestNums.join(" "));
}

smallestTwoNumbers([30, 15, 50, 5])