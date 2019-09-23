function equalSums(arr) {
    if (arr.length === 1) {
        return 0;
    }

    for (let i = 1; i < arr.length; i++) {
        let leftSum = 0;
        let rightSum = 0;

        for (let j = 0; j < arr.length; j++) {
            if (j < i) {
                leftSum += arr[j];
            } else if (j > i) {
                rightSum += arr[j];
            }
        }

        if (leftSum === rightSum) {
            return i;
        }
    }
    
    return "no";
}

console.log(equalSums([1, 2, 3, 3]))