function maxSequenceOfEqualElements(arr) {
    let longest = [];

    for (let i = 0; i < arr.length; i++) {
        let check = [];
        for (let j = i; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                check.push(arr[j])
            } else {
                break;
            }
        }

        if (longest.length < check.length) {
            longest = check;
        }
    }

    console.log(longest.join(" "));
}

maxSequenceOfEqualElements([0, 1, 1, 5, 2, 2, 6, 3, 3])