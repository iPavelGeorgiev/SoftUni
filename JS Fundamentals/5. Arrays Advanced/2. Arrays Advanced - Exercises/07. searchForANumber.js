function searchForANumber(arr, steps) {
    let occurs = 0;

    let extractedNums = arr.filter((e, i) => {
        if (i < steps[0]) return e;
    })
    .filter((e, i) => {
        if (i >= steps[1]) return e;
    });

    extractedNums.forEach(e => {
        if (e === steps[2]) occurs++
    })

    console.log(`Number ${steps[2]} occurs ${occurs} times.`);
}

searchForANumber([5, 2, 3, 4, 1, 6], [5, 2, 3])