function mergeArrays(arr1, arr2) {
    let mergedArrays = [];

    for (let i = 0; i < arr1.length; i++) {
        if (i % 2 === 0) {
            mergedArrays[i] = Number(arr1[i]) + Number(arr2[i]);
        } else {
            mergedArrays[i] = arr1[i] + arr2[i];
        }
    }

    console.log(mergedArrays.join(" - "));
}

mergeArrays(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11'])