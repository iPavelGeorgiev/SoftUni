function maxNumber(arr) {
    let topIntegers = [];
    let topInt = false;

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                topInt = true;
            } else {
                topInt = false;
                break;
            }
        }

        if (i === arr.length - 1) {
            topIntegers.push(arr[i]);
        } else if (topInt == true) {
            topIntegers.push(arr[i]);
        }
    }

    console.log(topIntegers.join(" "));
}

maxNumber([1, 4, 3, 2])