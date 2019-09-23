function addAndSubtract(nums) {
    let sumOriginal = 0;
    let modifiedArray = [];
    let sumModified = 0;

    for (let i = 0; i < nums.length; i++) {
        sumOriginal += nums[i];

        if(nums[i] % 2 === 0) {
            modifiedArray[i] = nums[i] + i;
        } else {
            modifiedArray[i] = nums[i] - i;
        }

        sumModified += modifiedArray[i];
    }

    console.log(modifiedArray);
    console.log(sumOriginal);
    console.log(sumModified);
}

addAndSubtract([5, 15, 23, 56, 35])