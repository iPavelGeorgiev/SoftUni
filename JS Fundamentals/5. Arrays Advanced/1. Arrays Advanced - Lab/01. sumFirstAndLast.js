function sumFirstAndLast(nums) {
    let firstNum = Number(nums[0]);
    let secondNum = Number(nums[nums.length - 1]);

    let result = firstNum + secondNum;

    console.log(result);
}

sumFirstAndLast(['20', '30', '40'])