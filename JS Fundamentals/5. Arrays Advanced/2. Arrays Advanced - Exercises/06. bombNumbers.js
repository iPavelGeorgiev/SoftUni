function bombNumbers(nums, parameters) {
    for (let i = 0; i < nums.length; i++) {
        let currentElement = nums[i];
        let bomb = parameters[0];
        let power = parameters[1];

        if (currentElement === bomb) {
            let start = Math.max(i - power, 0);
            let end = Math.min(i + power, nums.length);

            for (let j = start; j <= end; j++) {
                nums[j] = 0;
            }
        }
    }

    let sum = nums.reduce((accu, curr) => accu + curr);

    console.log(sum);
}

bombNumbers([1, 4, 4, 2, 8, 9, 1],
    [9, 3])