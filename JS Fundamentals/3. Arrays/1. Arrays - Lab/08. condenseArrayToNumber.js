function condenseArrayToNumber(nums) {
    let condensed = [];

    for (let i = 0; i <= nums.length - 2; i++) {
        condensed[i] = nums[i] + nums[i + 1];

        if (i === nums.length - 2) {
            nums = condensed;
            condensed = [];
            i = -1;
        }
    }
    
    console.log(nums[0]);
}

condenseArrayToNumber([5,0,4,1,2])