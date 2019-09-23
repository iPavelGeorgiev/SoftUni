function equalArrays(arr1, arr2) {
    let sum = 0;
    let index = 0;
    let notEqual = false;

    for (let i = 0; i < arr1.length; i++) {
        if (+(arr1[i]) !== +(arr2[i])) {
            notEqual = true;
            break;
        }

        sum += +(arr1[i]);

        index++;
    }

    if (notEqual) {
        console.log(`Arrays are not identical. Found difference at ${index} index`);
    } else {
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
}

equalArrays(['10','20','30'], ['10','20','30'])