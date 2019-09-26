function firstAndLastKNumbers(nums) {
    let k = nums.shift();
    let first = nums.slice(0, k);
    let second = nums.slice(nums.length - k);

    console.log(first.join(" "));
    console.log(second.join(" "));
}

firstAndLastKNumbers([2, 7, 8, 9])