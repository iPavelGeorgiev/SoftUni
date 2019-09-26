function negativeOrPositiveNumbers(nums) {
    let sortedNums = [];

    for (let num of nums) {
        if (num < 0) {
            sortedNums.unshift(num);
        } else {
            sortedNums.push(num);
        }
    }

    console.log(sortedNums.join("\n"));
}

negativeOrPositiveNumbers([7, -2, 8, 9])